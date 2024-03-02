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

const db = new Sequelize('database_app', 'root', 'Batiz2024',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db


/**


 * -- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';



CREATE database `database_app`;
USE `database_app` ;


CREATE TABLE IF NOT EXISTS `database_app`.`blogs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(105) NULL,
  `content` VARCHAR(450) NULL,
  `createAt` DATE NULL,
  `updateAt` DATE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

 */