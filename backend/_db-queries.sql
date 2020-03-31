CREATE TABLE `archi_web`.`users` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  UNIQUE INDEX `id_user_UNIQUE` (`id_user` ASC) VISIBLE,
  PRIMARY KEY (`id_user`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE);

INSERT INTO `archi_web`.`users` (`id_user`, `username`, `password`) VALUES ('1', 'test', 'test');

CREATE TABLE `archi_web`.`categories` (
  `id_categorie` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id_categorie`));

CREATE TABLE `archi_web`.`products` (
  `id_product` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `cat_id` INT UNSIGNED NOT NULL,
  `name` VARCHAR(45) NULL,
  `quantity` INT NULL,
  `comment` VARCHAR(255) NULL,
  PRIMARY KEY (`id_product`),
  CONSTRAINT `cat_id`
	FOREIGN KEY (`cat_id`)
    REFERENCES `archi_web`.`categories` (`id_categorie`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


INSERT INTO `archi_web`.`categories` (`id_categorie`, `name`) VALUES ('1', 'Enfant');
INSERT INTO `archi_web`.`categories` (`id_categorie`, `name`) VALUES ('2', 'Homme');
INSERT INTO `archi_web`.`categories` (`id_categorie`, `name`) VALUES ('3', 'Femme');

INSERT INTO `archi_web`.`products` (`id_product`, `cat_id`, `name`, `quantity`) VALUES ('1', '1', 'Adiddas', '22');
