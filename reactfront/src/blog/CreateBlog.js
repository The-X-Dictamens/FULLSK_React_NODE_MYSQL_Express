import axios from "axios";

import { useState } from "react";

import { Form, useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/blogs/'

const CompCreateBlog = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    //procedmineto para guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { title: title, content: content })
        navigate('/')
    }
    


    return (
        
        <div>
            <h1>Vista crear POST</h1>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                

                <div className='mb-3'>    
                    <label className='form-label'>Title</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        type="text"
                        className='form-control'
                        />
                </div>
                <button type='submit' className='btn btn-primary'>Store</button>

            </form>
        </div>
    )
}

export default CompCreateBlog
