export const getAllProjects = () => {
    return fetch("http://localhost:8000/projects", {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
}
export const getSingleProject = (projectId) => {
    return fetch(`http://localhost:8000/projects/${projectId}`, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
        .then(res => res.json())
}

export const createProject = (project) => {
    return fetch("http://localhost:8000/projects", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(project)
    })
        .then(res => res.json())
}

export const updateProject = (id, project) => {
    return fetch(`http://localhost:8000/projects/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(project)
    })
}

export const deleteProject = (projectId) => {
    return fetch(`http://localhost:8000/projects/${projectId}`, {
        method: "DELETE",
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
}