import { useEffect, useState } from "react"
import { deleteLumber } from "../../managers/LumberManager"
import { getAllLumber } from "../../managers/LumberManager"
import { LumberForm } from "./LumberForm"


export const LumberList = () => {
    const [lumber, setLumber] = useState([])
    const [editLumber, setEdit] = useState({ type: '' })

    const loadLumber = () => {
        getAllLumber().then(data => setLumber(data))
    }

    useEffect(() => {
        loadLumber()
    }, [])
    const handleDelete = (lumberId) => {
        deleteLumber(lumberId).then(loadLumber)
    }
    return <section  className="section ">
    <div className="columns">
        <div className="column">
            <table className="table is-fullwidth">
                <thead>
                    <tr>
                        <th className=" title is-3 has-text-danger-dark pl-2" >Lumber</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lumber.map(lumber => (
                            <tr key={lumber.id}>
                                <td>{lumber.type}</td>
                                <td>
                                    <div className="buttons">
                                        <button className="button is-small has-text-success-dark has-background-white" onClick={() => { setEdit(lumber) }}>edit</button>
                                        <button className="button is-small has-text-white-ter has-background-danger-dark" onClick={() => { handleDelete(lumber.id) }}>delete</button>
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
        <LumberForm loadLumber={loadLumber} lumber={editLumber} setLumber={setEdit} />
    </div>
</section>
}