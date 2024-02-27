/**
 * 
 * Esta databsase se kkanara blogs
 * 5 columnas
 * id au
 * title
 * content
 * createAt tipe date
 * updateAt igual tipo date
 */

import { Sequelize } from "sequelize";

const db = new Sequelize('database_app', 'root', 'Batiz2024'{
    host: 'localhost',
    dialect: 'mysql'
})

export default db