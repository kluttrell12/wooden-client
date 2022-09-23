import { updateTag } from "../../managers/TagManger"
import { createTag } from "../../managers/TagManger"




export const TagForm = ({loadTags, tag, setTag}) => {
    const saveTagEvent = (e) => {
        e.preventDefault()
        if (tag.id) {
            updateTag(tag).then(loadTags)
        } else {
            createTag(tag).then((data) => {
                loadTags(data)
                setTag({ label: ''})
            })
        }
    }
    return (
        <form>
            <div className="field">
                <label className="label">New Tag:</label>
            </div>
            <div className="control">
                <input
                required
                type="text"
                className="input"
                value ={tag.label}
                onChange={
                    (evt) => {
                        const copy = {...tag}
                        copy.label = evt.target.value
                        setTag(copy)
                    }
                }/>
            </div>
            <button
            onClick={(evt) => saveTagEvent(evt)}
            className="button is-small has-text-success-dark has-background-white">
                Save
            </button>
        </form>
    )
}