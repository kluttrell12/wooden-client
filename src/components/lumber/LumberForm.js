import { createLumber } from "../../managers/LumberManager"
import { updateLumber } from "../../managers/LumberManager"


export const LumberForm = ({loadLumber, lumber, setLumber}) => {
    const saveLumberEvent = (e) => {
        e.preventDefault()
        if (lumber.id) {
            updateLumber(lumber).then(loadLumber)
        } else {
            createLumber(lumber).then((data) => {
                loadLumber(data)
                setLumber({ type: ''})
            })
        }
    }
    return (
        <form>
            <div className="field">
                <label className="label">New Lumber:</label>
                <div className="control">
                    <input
                    required
                    type="text"
                    className="input"
                    value={lumber.type}
                    onChange={
                        (evt) => {
                            const copy = {...lumber}
                            copy.type = evt.target.value
                            setLumber(copy)
                        }
                    }/>
                </div>
            </div>
            <button
            onClick={(evt) => saveLumberEvent(evt)}
            className="button is-small has-text-success-dark has-background-white">
            Save 
            </button>
        </form>
        )
}

