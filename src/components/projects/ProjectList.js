import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteProject, getAllProjects } from "../../managers/ProjectManager"


export const ProjectList = () => {
    let navigate = useNavigate()
    const [projects, setProjects] = useState([])
    const loadProjects = () => {
        getAllProjects().then(data => setProjects(data))
    }
    useEffect(() => {
        loadProjects()
    }, [])

    const deleteClickEvent = (projectId) => {
        deleteProject(projectId).then(loadProjects)
    }

    return <section className="section has-background-white">
        {
            projects.map(project => {
                return <section className="control">
                    <div key={project.id} className="tile is-ancestor">
                        <div className="tile is-vertical is-7">
                            <div className="tile">
                                <div className="tile is-parent is-vertical is-7">

                                    <article className="box is-child notification has-background-white">
                                        <div className="field is-grouped is-grouped-multiline">
                                            {
                                                project.tags?.map(tag => {
                                                    return <>
                                                        <div className="control">
                                                            <div className="control">
                                                                <div className="tag has-background-warning-dark has-text-white-bis">{tag.label}</div>
                                                            </div>
                                                        </div>
                                                    </>

                                                })
                                            }                                            {
                                                project.categories?.map(cat => {
                                                    return <>
                                                        <div className="control">
                                                            <div className="control">
                                                                <div className="tag has-background-info-dark has-text-white-bis">{cat.type}</div>
                                                            </div>
                                                        </div>
                                                    </>
                                                })
                                            }
                                            {
                                                project.lumber?.map(lum => {
                                                    return <>
                                                        <div className="control">
                                                            <div className="control">

                                                                <div className="tag is-small has-background-primary-dark has-text-white-bis ">{lum.type}</div>
                                                            </div>
                                                        </div>
                                                    </>
                                                })
                                            }
                                        </div>
                                        <figure>
                                            <img src={project.image_url} height="400px" width="300px" alt="" />
                                        </figure>
                                        <div className="title is-4 has-text-danger-dark ">{project.title}</div>
                                        <div className="subtitle is-6 " >{project.description}
                                            <div>Project Cost : ${project.cost}</div>
                                            <div className="subtitle is-6 ">Built by @{project?.builder?.user?.username}</div>
                                        </div>
                                        <footer>
                                            {
                                                localStorage.getItem("user_id") == project.builder?.user?.id ?
                                                    <div className="control">
                                                        <button className="button is-small has-text-success-dark has-background-white-ter" onClick={() => navigate(`/projects/${project.id}/edit`)}>Edit</button>
                                                        <button className="button is-small has-text-white-ter has-background-danger-dark" onClick={() => deleteClickEvent(project.id)}>Delete</button>
                                                    </div>
                                                    : <></>
                                            }
                                        </footer>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            })
        }
    </section>

}

