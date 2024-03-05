import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const URI = 'http://localhost:8000/blogs/'


    //primero configuramos nuestro s hooks

const CompShowBlogs = () => {
    
    const [blogs, setBlog] = useState([])//aqui usestate nos devuelve dos cosas un valor con estado y una funcion para actualizarlos
    useEffect(  ()=> {//este hohk nos permite utilizar un efectompero con cosas de las que reaact no se encarga, como digamos una busqueda
        getBlogs()
    }, [])
    
    //procedimiento para mostar todos los blogs
    const getBlogs = async () => {//proimero creamos una peticion con azios
        const res = await axios.get(URI)//res de res
        setBlog(res.data)//que de la respuesta que nos de qaueremosa obtener la data
    }

/*//try 2
    const deleteBlog = async (id) => {
        await axios.delete(`${URI}/${id}`); // Corrección aquí
        getBlogs();
    };
    
    */


    //procedimiento para eliminar un blog
    /*
    const deleteBlog = async (id) => {
        axios.delete('${URI}${id}')
        getBlogs()
    } */
    //HOOKS Significa ganchos es una appi que nos permite controllar los estados sde los componentes

    const deleteBlog = async (id) => {
        try {
            await axios.delete(`${URI}/${id}`);
            getBlogs();
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

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
    
    
                            {blogs.map (( blog) => (
        
                                <tr key={blog.id}>      
                                    <td>{blog.title}</td>            
                                    <td>{blog.content}</td>      
                                    <td>
                                    
                                        <Link to={`/edit/${blog.id}`} className='btn btn-info'>Editar</Link>

                                        <button onClick={() => deleteBlog(blog.id)} className='btn btn-danger'>delete</button>

                                    </td>        
                                </tr>
                            )
                            )
                            }
      
    </tbody>
</table>

                </div>

            </div>
            
        </div>
    )


}


export default CompShowBlogs