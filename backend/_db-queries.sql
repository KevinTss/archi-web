CREATE TABLE `archi_web`.`users` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  UNIQUE INDEX `id_user_UNIQUE` (`id_user` ASC) VISIBLE,
  PRIMARY KEY (`id_user`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE);