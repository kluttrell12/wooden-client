import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getAllCategories } from "../../managers/CategoryManger"
import { getAllLumber } from "../../managers/LumberManager"
import { getSingleProject, updateProject } from "../../managers/ProjectManager"
import { getAllTags } from "../../managers/TagManger"

export const EditProject = () => {
    const [project, setProject] = useState({})
    const [tags, setTags] = useState([])
    const [categories, setCategories] = useState([])
    const [lumber, setLumber] = useState([])
    const [projectTags, setProjectTags] = useState([])
    const [projectCategories, setProjectCategories] = useState([])
    const [projectLumber, setProjectLumber] = useState([])
    const { projectId } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        getSingleProject(projectId).then(data => {
            setProject(data)
            const tagIds = data.tags.map(t => t.id)
            setProjectTags(tagIds)
            const categoryIds = data.categories.map(c => c.id)
            setProjectCategories(categoryIds)
            const lumberIds = data.lumber.map(l => l.id)
            setProjectLumber(lumberIds)
        })
        getAllCategories().then(data => setCategories(data))
        getAllTags().then(data => setTags(data))
        getAllLumber().then(data => setLumber(data))
    }, [projectId])

    const updateTags = (tagId, e) => {
        const tagsCopy = [...projectTags]
        if (e.target.checked) {
            tagsCopy.push(tagId)
        } else {
            const index = tagsCopy.indexOf(tagId)
            tagsCopy.splice(index, 1)
        }
        setProjectTags(tagsCopy)
    }
    const updateCategories = (categoryId, e) => {
        const categoriesCopy = [...projectCategories]
        if (e.target.checked) {
            categoriesCopy.push(categoryId)
        } else {
            const index = categoriesCopy.indexOf(categoryId)
            categoriesCopy.splice(index, 1)
        }
        setProjectCategories(categoriesCopy)
    }
    const updateLumber = (lumberId, e) => {
        const lumberCopy = [...projectLumber]
        if (e.target.checked) {
            lumberCopy.push(lumberId)
        } else {
            const index = lumberCopy.indexOf(lumberId)
            lumberCopy.splice(index, 1)
        }
        setProjectLumber(lumberCopy)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        project.tags = projectTags
        project.categories = projectCategories
        project.lumber = projectLumber
        updateProject(projectId, project).then((project) =>{
            navigate("/projects")
        } )
    }

    const handleChange = (evt) => {
        const projectCopy = { ...project }
        projectCopy[evt.target.name] = evt.target.value
        setProject(projectCopy)
    }

    return (
        <section className="section">
            <article className="panel is-warning">
                <h2 className="panel-heading">
                    Update Project
                </h2>
                <div className="panel-block">
                    <form style={{ width: "100%" }}>
                        <div className="field">
                            <label htmlFor="title" className="label">
                                Title:
                            </label>
                            <div className="control">
                                <input
                                    type="text"
                                    name="title"
                                    required autoFocus
                                    className="input"
                                    placeholder="Title"
                                    value={project.title}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="description" className="label">Description: </label>
                            <div className="control">
                                <div className="control">
                                    <input
                                        type="text"
                                        name="description"
                                        required autoFocus
                                        className="input"
                                        placeholder="Description"
                                        value={project.description}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="image_url" className="label">Image URL: </label>
                            <div className="control">
                                <div className="control">
                                    <input
                                        type="text"
                                        name="image_url"
                                        required autoFocus
                                        className="input"
                                        placeholder="Image URL"
                                        value={project.image_url}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="date_started" className="label">Start Date: </label>
                            <div className="control">
                                <div className="control">
                                    <input
                                        type="date"
                                        name="date_started"
                                        required autoFocus
                                        className="input"
                                        placeholder="Start Date"
                                        value={project.date_started}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="date_completed" className="label">Finish Date: </label>
                            <div className="control">
                                <div className="control">
                                    <input
                                        type="date"
                                        name="date_completed"
                                        required autoFocus
                                        className="input"
                                        placeholder="Finish Date"
                                        value={project.date_completed}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="cost" className="label">Cost: </label>
                            <div className="control">
                                <div className="control">
                                    <input
                                        type="text"
                                        name="cost"
                                        required autoFocus
                                        className="input"
                                        placeholder="Cost"
                                        value={project.cost}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="content" className="label">Lumber:</label>
                            {
                                lumber.map(lumber => (
                                    <div className="field" key={`lumber--${lumber.id}`}>
                                        <div className="control">
                                            <label className="checkbox" htmlFor={lumber.type}>
                                                <input type="checkbox" name={lumber.type}
                                                    checked={projectLumber.includes(lumber.id)}
                                                    onChange={(e) => {
                                                        updateLumber(lumber.id, e)
                                                    }} />
                                                {lumber.type}
                                            </label>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="field">
                            <label htmlFor="content" className="label">Tags:</label>
                            {
                                tags.map(tag => (
                                    <div className="field" key={`tag--${tag.id}`}>
                                        <div className="control">
                                            <label className="checkbox" htmlFor={tag.label}>
                                                <input type="checkbox" name={tag.label}
                                                    checked={projectTags.includes(tag.id)}
                                                    onChange={(e) => {
                                                        updateTags(tag.id, e)
                                                    }} />
                                                {tag.label}
                                            </label>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="field">
                            <label htmlFor="content" className="label">Categories:</label>
                            {
                                categories.map(category => (
                                    <div className="field" key={`category--${category.id}`}>
                                        <div className="control">
                                            <label className="checkbox" htmlFor={category.type}>
                                                <input type="checkbox" name={category.type}
                                                    checked={projectCategories.includes(category.id)}
                                                    onChange={(e) => {
                                                        updateCategories(category.id, e)
                                                    }} />
                                                {category.type}
                                            </label>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="field">
                            <div className="control">
                                <button type="submit"
                                    onClick={handleSubmit}
                                    className="button is-success">
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </article>
        </section>
    )


}