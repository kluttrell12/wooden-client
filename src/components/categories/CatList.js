import { useEffect, useState } from "react"
import { deleteCategory } from "../../managers/CategoryManger"
import { getAllCategories } from "../../managers/CategoryManger"
import { CatForm } from "./CatForm"


export const CatList = () => {
    const [categories, setCategories] = useState([])
    const [editCategory, setEdit] = useState({ type: '' })

    const loadCategories = () => {
        getAllCategories().then(data => setCategories(data))
    }

    useEffect(() => {
        loadCategories()
    }, [])
    const handleDelete = (categoryId) => {
        deleteCategory(categoryId).then(loadCategories)
    }
    return <section  className="section ">
        <div className="columns">
            <div className="column">
                <table className="table is-fullwidth">
                    <thead>
                        <tr>
                            <th className=" title is-3 has-text-danger-dark pl-2" >Categories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map(category => (
                                <tr key={category.id}>
                                    <td>{category.type}</td>
                                    <td>
                                        <div className="buttons">
                                            <button className="button is-small has-text-success-dark has-background-white" onClick={() => { setEdit(category) }}>edit</button>
                                            <button className="button is-small has-text-white-ter has-background-danger-dark" onClick={() => { handleDelete(category.id) }}>delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        <div className="column">
            <CatForm loadCategories={loadCategories} category={editCategory} setCategory={setEdit} />
        </div>
    </section>
}