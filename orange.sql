SET NAMES UTF8;
DROP DATABASE IF EXISTS orange;
CREATE DATABASE orange CHARSET=UTF8;
USE orange;

CREATE TABLE org_product(
	pid  INT PRIMARY KEY AUTO_INCREMENT,
	pname VARCHAR(32) NOT NULL DEFAULT '',
	price  DECIMAL(7,2) DEFAULT 0,
	pimg VARCHAR(100) NOT NULL DEFAULT ''
);

CREATE TABLE org_user(
  uid		INT PRIMARY KEY AUTO_INCREMENT,
  uname   VARCHAR(20) NOT NULL DEFAULT '',
  upwd    VARCHAR(32) NOT NULL DEFAULT '',
  email   VARCHAR(128) NOT NULL DEFAULT '',
  phone   VARCHAR(20) NOT NULL DEFAULT '',
  gender  INT,
  user_name  VARCHAR(20) NOT NULL DEFAULT ''
);

INSERT INTO org_user VALUES(null,'dingding','123456','790433787@qq.com','15826518175',1,'张丁丁');
INSERT INTO org_user VALUES(null,'qiangdong','123456','1564654@qq.com','15826518275',1,'刘强强');
INSERT INTO org_user VALUES(null,'naicha','123456','87212456@qq.com','15826548175',0,'刘花花');



INSERT INTO org_product VALUES (NULL,'Radish',99.99,'img/product/img01.jpg');
INSERT INTO org_product VALUES (NULL,'Orange',199.99,'img/product/img02.jpg');
INSERT INTO org_product VALUES (NULL,'Mealie',89.99,'img/product/img03.jpg');
INSERT INTO org_product VALUES (NULL,'pear',19.99,'img/product/img04.jpg');
INSERT INTO org_product VALUES (NULL,'Grape',299.99,'img/product/img05.jpg');
INSERT INTO org_product VALUES (NULL,'Ipuranol',199.99,'img/product/img06.jpg');
INSERT INTO org_product VALUES (NULL,'Garlic',78.99,'img/product/img07.jpg');
INSERT INTO org_product VALUES (NULL,'Tomato',99.99,'img/product/img10.jpg');
INSERT INTO org_product VALUES (NULL,'Ternip',66.66,'img/product/img11.jpg');
INSERT INTO org_product VALUES (NULL,'Scallion',123.23,'img/product/img12.jpg');
INSERT INTO org_product VALUES (NULL,'Pimiento',98.14,'img/product/img13.jpg');
INSERT INTO org_product VALUES (NULL,'Apple',111.21,'img/product/img14.jpg');
INSERT INTO org_product VALUES (NULL,'Mushroom',32.00,'img/product/img15.jpg');
INSERT INTO org_product VALUES (NULL,'Radish',99.99,'img/product/img01.jpg');
INSERT INTO org_product VALUES (NULL,'Orange',199.99,'img/product/img02.jpg');
INSERT INTO org_product VALUES (NULL,'Mealie',89.99,'img/product/img03.jpg');
INSERT INTO org_product VALUES (NULL,'pear',19.99,'img/product/img04.jpg');
INSERT INTO org_product VALUES (NULL,'Grape',299.99,'img/product/img05.jpg');
INSERT INTO org_product VALUES (NULL,'Ipuranol',199.99,'img/product/img06.jpg');
INSERT INTO org_product VALUES (NULL,'Garlic',78.99,'img/product/img07.jpg');
INSERT INTO org_product VALUES (NULL,'Tomato',99.99,'img/product/img10.jpg');
INSERT INTO org_product VALUES (NULL,'Ternip',66.66,'img/product/img11.jpg');
INSERT INTO org_product VALUES (NULL,'Scallion',123.23,'img/product/img12.jpg');
INSERT INTO org_product VALUES (NULL,'Pimiento',98.14,'img/product/img13.jpg');
INSERT INTO org_product VALUES (NULL,'Apple',111.21,'img/product/img14.jpg');
INSERT INTO org_product VALUES (NULL,'Mushroom',32.00,'img/product/img15.jpg');
INSERT INTO org_product VALUES (NULL,'Radish',99.99,'img/product/img01.jpg');
INSERT INTO org_product VALUES (NULL,'Orange',199.99,'img/product/img02.jpg');
INSERT INTO org_product VALUES (NULL,'Mealie',89.99,'img/product/img03.jpg');
INSERT INTO org_product VALUES (NULL,'pear',19.99,'img/product/img04.jpg');
INSERT INTO org_product VALUES (NULL,'Grape',299.99,'img/product/img05.jpg');
INSERT INTO org_product VALUES (NULL,'Ipuranol',199.99,'img/product/img06.jpg');
INSERT INTO org_product VALUES (NULL,'Garlic',78.99,'img/product/img07.jpg');
INSERT INTO org_product VALUES (NULL,'Tomato',99.99,'img/product/img10.jpg');
INSERT INTO org_product VALUES (NULL,'Ternip',66.66,'img/product/img11.jpg');
INSERT INTO org_product VALUES (NULL,'Scallion',123.23,'img/product/img12.jpg');
INSERT INTO org_product VALUES (NULL,'Pimiento',98.14,'img/product/img13.jpg');
INSERT INTO org_product VALUES (NULL,'Apple',111.21,'img/product/img14.jpg');
INSERT INTO org_product VALUES (NULL,'Mushroom',32.00,'img/product/img15.jpg');
INSERT INTO org_product VALUES (NULL,'Radish',99.99,'img/product/img01.jpg');
INSERT INTO org_product VALUES (NULL,'Orange',199.99,'img/product/img02.jpg');
INSERT INTO org_product VALUES (NULL,'Mealie',89.99,'img/product/img03.jpg');
INSERT INTO org_product VALUES (NULL,'pear',19.99,'img/product/img04.jpg');
INSERT INTO org_product VALUES (NULL,'Grape',299.99,'img/product/img05.jpg');
INSERT INTO org_product VALUES (NULL,'Ipuranol',199.99,'img/product/img06.jpg');
INSERT INTO org_product VALUES (NULL,'Garlic',78.99,'img/product/img07.jpg');
INSERT INTO org_product VALUES (NULL,'Tomato',99.99,'img/product/img10.jpg');
INSERT INTO org_product VALUES (NULL,'Ternip',66.66,'img/product/img11.jpg');
INSERT INTO org_product VALUES (NULL,'Scallion',123.23,'img/product/img12.jpg');
INSERT INTO org_product VALUES (NULL,'Pimiento',98.14,'img/product/img13.jpg');
INSERT INTO org_product VALUES (NULL,'Apple',111.21,'img/product/img14.jpg');
INSERT INTO org_product VALUES (NULL,'Mushroom',32.00,'img/product/img15.jpg');
INSERT INTO org_product VALUES (NULL,'Radish',99.99,'img/product/img01.jpg');
INSERT INTO org_product VALUES (NULL,'Orange',199.99,'img/product/img02.jpg');
INSERT INTO org_product VALUES (NULL,'Mealie',89.99,'img/product/img03.jpg');
INSERT INTO org_product VALUES (NULL,'pear',19.99,'img/product/img04.jpg');
INSERT INTO org_product VALUES (NULL,'Grape',299.99,'img/product/img05.jpg');
INSERT INTO org_product VALUES (NULL,'Ipuranol',199.99,'img/product/img06.jpg');
INSERT INTO org_product VALUES (NULL,'Garlic',78.99,'img/product/img07.jpg');
INSERT INTO org_product VALUES (NULL,'Tomato',99.99,'img/product/img10.jpg');
INSERT INTO org_product VALUES (NULL,'Ternip',66.66,'img/product/img11.jpg');
INSERT INTO org_product VALUES (NULL,'Scallion',123.23,'img/product/img12.jpg');
INSERT INTO org_product VALUES (NULL,'Pimiento',98.14,'img/product/img13.jpg');
INSERT INTO org_product VALUES (NULL,'Apple',111.21,'img/product/img14.jpg');
INSERT INTO org_product VALUES (NULL,'Mushroom',32.00,'img/product/img15.jpg');
INSERT INTO org_product VALUES (NULL,'Radish',99.99,'img/product/img01.jpg');
INSERT INTO org_product VALUES (NULL,'Orange',199.99,'img/product/img02.jpg');
INSERT INTO org_product VALUES (NULL,'Mealie',89.99,'img/product/img03.jpg');
INSERT INTO org_product VALUES (NULL,'pear',19.99,'img/product/img04.jpg');
INSERT INTO org_product VALUES (NULL,'Grape',299.99,'img/product/img05.jpg');
INSERT INTO org_product VALUES (NULL,'Ipuranol',199.99,'img/product/img06.jpg');
INSERT INTO org_product VALUES (NULL,'Garlic',78.99,'img/product/img07.jpg');
INSERT INTO org_product VALUES (NULL,'Tomato',99.99,'img/product/img10.jpg');
INSERT INTO org_product VALUES (NULL,'Ternip',66.66,'img/product/img11.jpg');
INSERT INTO org_product VALUES (NULL,'Scallion',123.23,'img/product/img12.jpg');
INSERT INTO org_product VALUES (NULL,'Pimiento',98.14,'img/product/img13.jpg');
INSERT INTO org_product VALUES (NULL,'Apple',111.21,'img/product/img14.jpg');
INSERT INTO org_product VALUES (NULL,'Mushroom',32.00,'img/product/img15.jpg');
