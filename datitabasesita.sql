-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema database_app
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema database_app
-- -----------------------------------------------------
CREATE database `database_app` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `database_app` ;

-- -----------------------------------------------------
-- Table `database_app`.`blogs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `database_app`.`blogs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(105) NULL,
  `content` VARCHAR(450) NULL,
  `createdAt` DATE NULL,
  `updatedAt` DATE NULL)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
