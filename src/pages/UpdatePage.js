import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const UpdatePage = (props) => {
    const {contentId} = useParams()
    const [state,setState] = useState({
        title: '',
        description: ''
    })
    const updateState = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }
    const getContent = (contentId) => {
        const storedToken = localStorage.getItem('authToken')
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/read/${contentId}`, {
            headers:{
                authorization: `Bearer: ${storedToken}`
            }
        })
        .then(res => {
            console.log(res.data)
            setState(res.data)
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {
        getContent(contentId)
    }, [contentId])
    const handleSubmit = (event) => {
        const storedToken = localStorage.getItem('authToken')
        axios.put(`${process.env.REACT_APP_BACEKND_URL}/update/${contentId}`, {
            title: state.title,
            description: state.description
        }, {
            headers: {
                authorization: `Bearer ${storedToken}`
            }
        })
        .then(updatedContent => {
            console.log(updatedContent.data)
            setState(updatedContent.data)
        })
    }
    return (
        <div>
            <h2>{state.title}</h2>
            <p>{state.description}</p>
        </div>
    )
}

export default UpdatePage