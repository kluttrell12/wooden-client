export const getAllLumber = () => {
    return fetch('http://localhost:8000/lumber', {
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    }).then(res => res.json())
}

export const createLumber = lumber => {
    return fetch('http://localhost:8000/lumber', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(lumber)
    }).then(res => res.json())
}

export const deleteLumber = lumberId => {
    return fetch(`http://localhost:8000/lumber/${lumberId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        }
    })
}

export const updateLumber = lumber => {
    return fetch(`http://localhost:8000/lumber/${lumber.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(lumber)
    })
}
