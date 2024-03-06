import express  from 'express'
import Cors from 'cors'

import db from "./database/db.js";

import blogRoutes from './routes/routes.js'//si aqui se me buguea es que le deno poner .js a estas export


//ponerlo en cons
//const cors = require('cors');

const app = express()

//denuevo
app.use(Cors());



//vamos a configurar al cors
/*
app.use(cors({
    origin: "http://localhost:8000",
}))
*/

//copilot
/*
app.use(cors({
    origin: 'http://localhost:8000', // Cambia esto según tu configuración
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }))
*/
//un video dice que le haga esti


app.use(express.json())

app.use('/blogs', blogRoutes)

//////////////////////

//ahora vamos a definir nuestra conexion

try {
    await db.authenticate()
    console.log("Conexion concsitosa a la db")
} catch (error) {
    console.log('Conexion incositosa a la db porque me dio la gana que : ${error} ')

}
/*
app.get('/', (req, res) => {
    res.send('HOlanigger')
})
*/

app.listen(8000, () => {
    console.log('Nuestro hijo eta corriendo en el 8000/ in http://localhost:8000/')
})