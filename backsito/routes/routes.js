import express  from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/BlogControllers.js'

const router = express.Router()

//primer metodo, trarer todos los blogs

router.get('/', getAllBlogs)
//pamostrar uno
router.get('/:id', getBlog)

//ruta para crear . pero aqui con post

router.post('/', createBlog)
//actualizar

router.put('/:id', updateBlog)

//nuestro last router , dilite
router.delete('/:id', deleteBlog)

//lo exportamos

export default router

//vamos a config nuestra app pricipal en app.js