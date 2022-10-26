SHOW DATABASES;

CREATE DATABASE `minestore`;

USE `minestore`;

CREATE TABLE `product`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(20),
    `price` INT,
    `location` VARCHAR(20),
    `sort` varchar(20)
);

SHOW TABLES;

SELECT * FROM `product`;
SET SQL_SAFE_UPDATES = 1;
DELETE FROM `product`;

INSERT INTO `product` VALUES(NULL, 'Wooden Pickaxe', 1000, 'Wooden_Pickaxe.webp', 'pickaxe');
INSERT INTO `product` VALUES(NULL, 'Stone Pickaxe', 2000, 'Stone_Pickaxe.webp', 'pickaxe');
INSERT INTO `product` VALUES(NULL, 'Iron Pickaxe', 3000, 'Iron_Pickaxe.webp', 'pickaxe');
INSERT INTO `product` VALUES(NULL, 'Golden Pickaxe', 4000, 'Golden_Pickaxe.webp', 'pickaxe');
INSERT INTO `product` VALUES(NULL, 'Diamond Pickaxe', 5000, 'Diamond_Pickaxe.webp', 'pickaxe');
INSERT INTO `product` VALUES(NULL, 'Wooden Sword', 1000, 'Wooden_Sword.webp', 'sword');
INSERT INTO `product` VALUES(NULL, 'Stone Sword', 2000, 'Stone_Sword.webp', 'sword');
INSERT INTO `product` VALUES(NULL, 'Iron Sword', 3000, 'Iron_Sword.webp', 'sword');
INSERT INTO `product` VALUES(NULL, 'Golden Sword', 4000, 'Golden_Sword.webp', 'sword');
INSERT INTO `product` VALUES(NULL, 'Diamond Sword', 5000, 'Diamond_Sword.webp', 'sword');
INSERT INTO `product` VALUES(NULL, 'Bottle Enchanting', 300, 'Bottle_Enchanting.webp', 'other');
INSERT INTO `product` VALUES(NULL, 'Ender Pearl', 72000, 'Ender_Pearl.webp', 'other');
INSERT INTO `product` VALUES(NULL, 'Carrot', 50, 'Carrot.webp', 'other');
INSERT INTO `product` VALUES(NULL, 'Arrow', 200, 'Arrow.webp', 'other');
INSERT INTO `product` VALUES(NULL, 'Shears', 150, 'Shears.webp', 'other');
INSERT INTO `product` VALUES(NULL, 'Bow', 500, 'Bow.webp', 'other');
INSERT INTO `product` VALUES(NULL, 'Bucket', 100, 'Bucket.webp', 'other');

SELECT * FROM `shoppingcart`;

CREATE TABLE `shoppingcart`(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(20),
    `price` INT,
    `location` VARCHAR(20),
    `sort` varchar(20)
);