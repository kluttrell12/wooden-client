import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// import { useNavigate } from "react-router-dom"
// import { getAllActiveBuilders, updateBuilderActiveStatus } from "../../managers/BuilderManager"
import { getAllInactiveBuilders } from "../../managers/BuilderManager"
import { getAllActiveBuilders } from "../../managers/BuilderManager"


export const BuilderList = () => {
    const navigate = useNavigate()
    const [builders, setBuilders] = useState([])

    useEffect(
        () => {
            activeBuilders()
        }, []
    )
    const activeBuilders = () => {
        getAllActiveBuilders().then(setBuilders)
    }

    const inactiveBuilders = () => {
        getAllInactiveBuilders().then(setBuilders)

    }

    // const confirmDeactivate = (builderId) => {
    //     if (window.confirm("Do you want to deactivate builder?")) {
    //         handleDeactivation(builderId)
    //     }
    // }
    // const handleDeactivation = (builderId) => {
    //     updateBuilderActiveStatus(builderId)
    //         .then(activeBuilders())
    // }

    // const confirmActivate = (builderId) => {
    //     if (window.confirm("Do you want to reactivate builder?")) {
    //         handleActivate(builderId)
    //     }
    // }

    // const handleActivate = (builderId) => {
    //     updateBuilderActiveStatus(builderId).then(
    //         inactiveBuilders()
    //     )
    // }

    return <section className="section">
        <div className="column">
            <h1 className="title has-text-danger-dark">Edit Builder Profile</h1>

            <div>
                <button className="button is-small has-background-success-dark has-text-white-bis" onClick={() => { activeBuilders() }} >View Active Builders</button>
                <button className="button is-small has-background-success-dark has-text-white-bis" onClick={() => { inactiveBuilders() }} >View Inactive Builders</button>
            </div>
            <table className="table is-fullwidth">
                <thead>
                    <tr>
                        <th>Builders</th>
                        <th>Full Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        builders.map(builder => (
                            <tr key={builder.id}>
                                <td>{builder?.user?.username}</td>
                                <td>{builder?.user?.first_name} {builder?.user?.last_name} </td>
                                {
                                    localStorage.getItem("user_id") == builder?.user?.id ?
                                        <div>
                                            <button className="button is-small has-background-success-dark has-text-white-bis" onClick={() => { navigate(`${builder.id}/edit`) }}>Edit Your Profile</button>
                                        </div>
                                        : <></>
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </section>
}

