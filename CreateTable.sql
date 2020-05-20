create database ecommerce

use ecommerce


	CREATE TABLE PRODUCT
	(
	  ID         int NOT NULL AUTO_INCREMENT,
	  CREATED    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	  IMAGE varchar(256),
	  NAME       varchar(256),
	  PRICE int,
	  DESCRIPTION   varchar(256),
	  CATEGORY              varchar(256),
	  PRODUCTINFO int,
      PRIMARY KEY (ID),
	  FOREIGN KEY (PRODUCTINFO) REFERENCES PRODUCTINFO(ID) ON DELETE CASCADE
	  
	);

CREATE TABLE PRODUCTINFO
(
	ID int  NOT NULL AUTO_INCREMENT,
    CREATED    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    WIDTH varchar(256),
    HEIGHT varchar(256),
    WEIGHT varchar(256),
    PRICE INT,
    QUANTITY INT,
    SHIPPING_FEE INT,
    PRIMARY KEY (ID)
);

CREATE TABLE ROLES
(
	ID int  NOT NULL AUTO_INCREMENT,
    ROLE varchar(256),
    USERNAME varchar(256),
    PASSWORD varchar(256),
    PRIMARY KEY (ID)
    
);
select * from product
select * from productinfo
select * from roles

-- drop table PRODUCT;
-- drop table PRODUCTINFO;
-- drop table roles