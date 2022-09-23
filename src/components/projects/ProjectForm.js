import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllCategories } from "../../managers/CategoryManger"
import { getAllLumber } from "../../managers/LumberManager"
import { createProject } from "../../managers/ProjectManager"
import { getAllTags } from "../../managers/TagManger"

export const ProjectForm = () => {
    const [categories, setCategories] = useState([])
    const [tags, setTags] = useState([])
    const [lumber, setLumber] = useState([])
    const [project, setProject] = useState({})
    const [projectTags, setProjectTags] = useState([])
    const [projectCategories, setProjectCategories] = useState([])
    const [projectLumber, setProjectLumber] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        getAllCategories().then(data => setCategories(data))
        getAllTags().then(data => setTags(data))
        getAllLumber().then(data => setLumber(data))
    }, [])

    const updateTags = (tagId) => {
        let tagsCopy = [...projectTags]
        const index = tagsCopy.indexOf(tagId)
        if (index < 0) {
            tagsCopy.push(tagId)
        } else {
            tagsCopy.splice(index, 1)
        }
        setProjectTags(tagsCopy)
    }

    const updateCategories = (categoryId) => {
        let categoriesCopy = [...projectCategories]
        const index = categoriesCopy.indexOf(categoryId)
        if (index < 0) {
            categoriesCopy.push(categoryId)
        } else {
            categoriesCopy.splice(index, 1)
        }
        setProjectCategories(categoriesCopy)
    }

    const updateLumber = (lumberId) => {
        let lumberCopy = [...projectLumber]
        const index = lumberCopy.indexOf(lumberId)
        if (index < 0) {
            lumberCopy.push(lumberId)
        } else {
            lumberCopy.splice(index, 1)
        }
        setProjectLumber(lumberCopy)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()

        const projectData = {
            ...project,
            tags: projectTags,
            categories: projectCategories,
            lumber: projectLumber
        }

        createProject(projectData).then((project) => {
            navigate("/projects")
        })
    }

    const handleChange = (event) => {
        const newProject = { ...project }
        newProject[event.target.name] = event.target.value
        setProject(newProject)
    }

    return (
        <section className="columns is-centered">
            <form className="column is-two-thirds">
                <h1 className="title"> Add Project</h1>
                <div className="field">
                    <label className="label">Title: </label>
                    <div className="control">
                        <input
                            required
                            className="input"
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={project.title}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Description:</label>
                    <div className="control">
                        <textarea
                            required
                            className="textarea"
                            name="description"
                            placeholder="Description"
                            value={project.description}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Image URL:</label>
                </div>
                <div>
                    <input
                        required
                        className="input"
                        type="text"
                        name="image_url"
                        placeholder="Image URL"
                        value={project.image_url}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <label className="label">Start Date:</label>
                </div>
                <div className="control">
                    <input
                        required
                        className="input"
                        type="date"
                        name="date_started"
                        placeholder="Start Date"
                        value={project.date_started}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <label className="label">Finish Date:</label>
                </div>
                <div className="control">
                    <input
                        required
                        className="input"
                        type="date"
                        name="date_completed"
                        placeholder="Finish Date"
                        value={project.date_completed}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <label className="label">Cost:</label>
                </div>
                <div className="control">
                    <input
                        required
                        className="input"
                        type="text"
                        name="cost"
                        placeholder="cost"
                        value={project.cost}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <label htmlFor="description" className="label">Lumber: </label>
                    {
                        lumber.map(lumber => {
                            return (
                                <div key={`lumber--${lumber.id}`}>
                                    <div className="control">
                                        <label className="checkbox" htmlFor={lumber.type}>
                                            <input type="checkbox" name={lumber.type}
                                                checked={projectLumber.includes(lumber.id)}
                                                onChange={() => {
                                                    updateLumber(lumber.id)
                                                }} />
                                            {lumber.type}
                                        </label>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="field">
                    <label htmlFor="description" className="label" >Tags: </label>
                    {
                        tags.map(tag => {
                            return (
                                <div key={`tag--${tag.id}`}>
                                    <div className="control">
                                        <label className="checkbox" htmlFor={tag.label}>
                                            <input type="checkbox" name={tag.label}
                                                checked={projectTags.includes(tag.id)}
                                                onChange={() => {
                                                    updateTags(tag.id)
                                                }} />
                                            {tag.label}
                                        </label>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="field">
                    <label htmlFor="description" className="label">Categories: </label>
                    {
                        categories.map(category => {
                            return (
                                <div key={`category--${category.id}`}>
                                    <div className="control">
                                        <label className="checkbox" htmlFor={category.type}>
                                            <input type="checkbox" name={category.type}
                                                checked={projectCategories.includes(category.id)}
                                                onChange={() => {
                                                    updateCategories(category.id)
                                                }} />
                                            {category.type}
                                        </label>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="field">
                    <div className="control">
                        <button type="submit"
                            onClick={handleSubmit}
                            className="button has-text-success-dark has-background-white"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </section >
    )
}