//escencia de squelizxe abstraccion de la base d e datos

import db from "../database/db.js"

/**
 * modelo nombre singular en mayusculas
 * las tablas nombre plural y minusculas
 */

User
/**
 * dos formas de definir, squerlize . define o extenfiendo de modelo usando init
 */
//importamos la copnexion
import { Sequelize, DataTypes } from "sequelize";

const BlogModel = db.define('blogs', {
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    
})

export default BlogModel    