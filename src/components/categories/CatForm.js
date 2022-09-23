import { createCategory } from "../../managers/CategoryManger"
import { updateCategory } from "../../managers/CategoryManger"


export const CatForm = ({loadCategories, category, setCategory}) => {
    const saveCategoryEvent = (e) => {
        e.preventDefault()
        if (category.id) {
            updateCategory(category).then(loadCategories)
        } else {
            createCategory(category).then((data) => {
                loadCategories(data)
                setCategory({ type: ''})
            })
        }
    }
    return (
        <form>
            <div className="field">
                <label className="label">New Category:</label>
                <div className="control">
                    <input
                    required
                    type="text"
                    className="input"
                    value={category.type}
                    onChange={
                        (evt) => {
                            const copy = {...category}
                            copy.type = evt.target.value
                            setCategory(copy)
                        }
                    }/>
                </div>
            </div>
            <button
            onClick={(evt) => saveCategoryEvent(evt)}
            className="button is-small has-text-success-dark has-background-white">
            Save 
            </button>
        </form>
        )
}

