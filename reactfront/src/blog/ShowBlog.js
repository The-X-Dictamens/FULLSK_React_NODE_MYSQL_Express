import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const URI = 'http://localhost:8000/blogs/'


const CompShowBlogs = () => {
    //primero configuramos nuestro s hooks
    
    const [blogs, setBlog] = useState([])//aqui usestate nos devuelve dos cosas un valor con estado y una funcion para actualizarlos
    useEffect(()=> {//este hohk nos permite utilizar un efectompero con cosas de las que reaact no se encarga, como digamos una busqueda
        getBlogs()
    }, [])
    
    //procedimiento para mostar todos los blogs
    const getBlogs = async () => {//proimero creamos una peticion con azios
        const res = await axios.get(URI)//res de res
        setBlog(res.data)//que de la respuesta que nos de qaueremosa obtener la data
    }

    //procedimiento para eliminar un blog
    const deleteBlog = async (id) => {
        axios.delete('${URI}${id}')
        getBlogs()
    }//HOOKS Significa ganchos es una appi que nos permite controllar los estados sde los componentes

    return (
        //aqui que vamos a devolcer
        <div className='container'>

            
            <div className='row'>
                
                <div className='col'>
                
                    <table className="table">
  
                        <thead>
    
                            <tr>      
                                <th scope="col">#</th>      
                                <th scope="col">content</th>      
                                <th scope="col">actions</th>                            
                            </tr>                            
                        </thead>                      
  
                        <tbody>
    
    
                            {blogs.map((blog) => (
        
                                <tr key={blog.id}>      
                                    <td>{blog.title}</td>            
                                    <td>{blog.content}</td>      
                                    <td>
                                        <link to={'/edit/${blog.id}'} className='btn btn-info'>Editar</link>
                                        <button onClick={() =>deleteBlog(blog.id) } className='btn btn-danger'>Dekete</button>
                                    </td>        
                                </tr>
    ))}
      
    </tbody>
</table>

                </div>

            </div>
            
        </div>
    )


}


export default CompShowBlogs