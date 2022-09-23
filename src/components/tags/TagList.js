import { useEffect, useState } from "react"
import { deleteTag } from "../../managers/TagManger"
import { getAllTags } from "../../managers/TagManger"
import { TagForm } from "./TagForm"



export const TagList = () => {
    const [tags, setTags] = useState([])
    const [editTag, setEdit] = useState({ label: ''})

    const loadTags = () => {
        getAllTags().then(data => setTags(data))
    }

    useEffect(() => {
        loadTags()
    }, [])
    const handleDelete = (tagId) => {
        deleteTag(tagId).then(loadTags)
    }
    return <section  className="section ">
    <div className="columns">
        <div className="column">
            <table className="table is-fullwidth">
                <thead>
                    <tr>
                        <th className=" title is-3 has-text-danger-dark pl-2" >Tags</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tags.map(tag => (
                            <tr key={tag.id}>
                                <td>{tag.label}</td>
                                <td>
                                    <div className="buttons">
                                        <button className="button is-small has-text-success-dark has-background-white" onClick={() => { setEdit(tag) }}>edit</button>
                                        <button className="button is-small has-text-white-ter has-background-danger-dark" onClick={() => { handleDelete(tag.id) }}>delete</button>
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
        <TagForm loadTags={loadTags} tag={editTag} setTag={setEdit} />
    </div>
</section>
}