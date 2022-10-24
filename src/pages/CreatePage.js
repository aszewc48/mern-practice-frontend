import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreatePage = () => {
    const navigate = useNavigate()
    const [state,setState] = useState({
        title: '',
        description: ''
    })
    const updateState = event => setState({
        ...state,
        [event.target.name]: event.target.value
    })
    return (
        <div>
            <h1>Create Content Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input name='title' value={state.title} onChange={updateState} />
                </div>
                <div>
                    <label>Description</label>
                    <textarea name='description' value={state.description} onChange={updateState} />
                </div>
                <button>Create</button>
            </form>
        </div>
    )
}