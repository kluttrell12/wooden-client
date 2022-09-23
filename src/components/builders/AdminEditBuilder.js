import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getSingleBuilder, updateBuilder } from "../../managers/BuilderManager"




export const AdminEditBuilder = () => {
    const { builderId } = useParams()
    const navigate = useNavigate()
    const [builderDetails, setBuilderDetails] = useState({})
    const [editBuilderData, setEditBuilderData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        bio: "",
        is_staff: false
    })

    useEffect(
        () => {
            getSingleBuilder(builderId).then(setBuilderDetails)
        }, []
    )

    useEffect(
        () => {
            if (builderDetails.builder !== {}) {
                let builderCopy = { ...editBuilderData }
                builderCopy.first_name = builderDetails?.user?.first_name
                builderCopy.last_name = builderDetails?.user?.last_name
                builderCopy.username = builderDetails?.user?.username
                builderCopy.email = builderDetails?.user?.email
                builderCopy.bio = builderDetails?.bio
                builderCopy.is_staff = builderDetails?.user?.is_staff

                setEditBuilderData(builderCopy)
            }
        }, [builderDetails]
    )

    const handleChange = (evt) => {
        const builderCopy = { ...editBuilderData }
        builderCopy[evt.target.name] = evt.target.value
        setEditBuilderData(builderCopy)
    }

    const handleUpdateBuilder = (evt) => {
        evt.preventDefault()
        const builderCopy = { ...editBuilderData }
        builderCopy.is_staff = JSON.parse(builderCopy.is_staff)
        updateBuilder(builderId, builderCopy).then(
            navigate("/builders")
        )
    }

    return <>
        {
            (editBuilderData)
                ? <>
                    <section className="columns is-centered">
                        <form className="column is-two-thirds" onSubmit={handleUpdateBuilder}>
                            <h1 className="title">Builder Profiles</h1>
                            <div className="field">
                                <label className="label">First Name</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        name="first_name"
                                        value={editBuilderData.first_name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Last Name</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        name="last_name"
                                        value={editBuilderData.last_name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Username</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        name="username"
                                        value={editBuilderData.username}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        name="email"
                                        value={editBuilderData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div class="control">
                                <label className="label">Select builder type</label>
                                <label className="radio">
                                    <input type="radio" name="is_staff" value={true}
                                        onChange={handleChange}
                                        checked={editBuilderData.is_staff === true || editBuilderData.is_staff === "true"}
                                    />
                                    Admin
                                </label>
                                <label className="radio">
                                    <input type="radio" name="is_staff" value={false}
                                        onChange={handleChange}
                                        checked={editBuilderData.is_staff === false || editBuilderData.is_staff === "false"}
                                    />
                                    Builder
                                </label>
                            </div>

                            <div className="field">
                                <label className="label">Bio</label>
                                <div className="control">
                                    <textarea className="textarea"
                                        value={editBuilderData.bio}
                                        name="bio"
                                        onChange={handleChange}>
                                    </textarea>
                                </div>
                            </div>
                            <div className="field is-grouped">
                                <div className="control">
                                    <button className="button has-background-white-bis has-text-success-dark is-small is-link" type="submit">Submit</button>
                                </div>
                                <div className="control">
                                    <Link to="/builders" className="button is-small has-background-danger-dark has-text-white-bis">Cancel</Link>
                                </div>
                            </div>
                        </form>
                    </section>
                </>
                : <></>
        }
    </>
}

