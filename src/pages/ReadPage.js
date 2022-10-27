import axios from 'axios'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'


const ReadPage = () => {
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/read`)
        .then(res => setContent(res.data.content))
    }, [])
    const [content,setContent] = useState([])
    return (
        <div>
            {content.map(element => {
                return(
                    <div key={element._id}>
                    <h2>{element.title}</h2>
                    <p>{element.description}</p>
                    <Link to={`/read/${element._id}`}>Options</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ReadPage