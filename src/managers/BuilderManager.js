export const getAllBuilders = () => {
    return fetch("http://localhost:8000/builders", {
        headers: {
            "Authorization": `Token ${localStorage.getItem('auth_token')}`
        }
    }).then(res => res.json())
}

export const getAllActiveBuilders = () => {
    return fetch("http://localhost:8000/builders/active", {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    }).then(res => res.json())
}

export const updateBuilder = (id, builderInfo) => {
    return fetch(`http://localhost:8000/builders/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(builderInfo)
    })
}

export const getAllInactiveBuilders = () => {
    return fetch("http://localhost:8000/builders/inactive", {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    }).then(res => res.json())
}

export const getSingleBuilder = builderId => {
    return fetch(`http://localhost:8000/builders/${builderId}`, {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    }).then(res => res.json())
}

export const updateBuilderActiveStatus = (builderId) => {
    return fetch(`http://localhost:8000/builders/${builderId}/active_status`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token${localStorage.getItem('auth_token')}`
        }
    })
}
