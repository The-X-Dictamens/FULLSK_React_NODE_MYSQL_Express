import BlogModel from "../models/BlogModel.js";

/**metodos para el crud
 * osae la picha del proyecto
 * 5 metoditos, los generiquitos
 * mostrar todos los registros, mostrar un registro
 * eliminar registrp
 * crear y editar
 * 
 */

//pa mostrar los registros

export const getAllBlogs = async(req, res) => {
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
        
    } catch (error) {
        res.json({message:error.message})
        
    }
}

//mostra un registro en particular

export const getBlog = async (req, res) => {
    try {
       const blog = BlogModel.findAll({
            where: {
                id:req.params.id
            }
        })
        res.json(blog)
    } catch (error) {
        res.json({message: error.message})
        
    }
    
}

//ahora para crear un registro

export const createBlog = async (req, res) => {

    try {
        await BlogModel.create(req.body)
        res.json({
            //este formato es "clabe" : "valor"
            "message" : "Registro cock"
        })
    } catch (error) {
        res.json({message: error.message})

        
    }
    
}


//Procedimiento par aactualizar un registro

export const updateBlog = async (rec, res) => {
    try {
        await BlogModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            //este formato es "clabe" : "valor"
            "message" : "Registro actualizado cock"
        })
    } catch (error) {
        res.json({message: error.message})

        
    }
}

//el ultimo para eliminar un registro
export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy({
            where: { id: req.params.is }
        })
        res.json({
            //este formato es "clabe" : "valor"
            "message": "Registro actualizado cock"
        })
    } catch (error) {
        res.json({ message: error.message })

        
    }
    }
    //como aqui ya acabamos pues vamos a sacar nuestro router