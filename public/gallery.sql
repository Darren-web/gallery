/*
SQLyog Enterprise - MySQL GUI v6.15
MySQL - 5.5.5-10.1.38-MariaDB : Database - gallery
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

create database if not exists `gallery`;

USE `gallery`;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

/*Table structure for table `tadmin` */

DROP TABLE IF EXISTS `tadmin`;

CREATE TABLE `tadmin` (
  `adminName` varchar(10) COLLATE utf8_unicode_ci NOT NULL COMMENT '管理员用户名',
  `adminPwd` varchar(50) COLLATE utf8_unicode_ci NOT NULL COMMENT '管理员密码',
  `daminId` int(11) NOT NULL AUTO_INCREMENT COMMENT '管理员id',
  PRIMARY KEY (`adminName`,`adminPwd`,`daminId`),
  UNIQUE KEY `daminId` (`daminId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `tadmin` */

insert  into `tadmin`(`adminName`,`adminPwd`,`daminId`) values ('darren','202cb962ac59075b964b07152d234b70',2),('tom11','202cb962ac59075b964b07152d234b70',1);

/*Table structure for table `timg` */

DROP TABLE IF EXISTS `timg`;

CREATE TABLE `timg` (
  `imgId` int(50) NOT NULL AUTO_INCREMENT COMMENT '图片id',
  `imgTitle` varchar(50) COLLATE utf8_unicode_ci DEFAULT '图片展示' COMMENT '图片标题',
  `imgDetail` varchar(50) COLLATE utf8_unicode_ci DEFAULT 'I love photo' COMMENT '图片详情介绍',
  `imgName` varchar(50) COLLATE utf8_unicode_ci NOT NULL COMMENT '图片名称',
  PRIMARY KEY (`imgId`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `timg` */

insert  into `timg`(`imgId`,`imgTitle`,`imgDetail`,`imgName`) values (1,'图片展示','I love photo','1.png'),(2,'图片展示','I love photo','2.png'),(3,'图片展示','I love photo','3.png'),(4,'图片展示','I love photo','4.png'),(5,'图片展示','I love photo','5.png'),(6,'图片展示','I love photo','6.png'),(7,'图片展示','I love photo','7.png'),(8,'图片展示','I love photo','8.png'),(9,'图片展示','I love photo','9.png'),(10,'图片展示','I love photo','10.png'),(11,'图片展示','I love photo','11.png'),(12,'图片展示','I love photo','12.png'),(13,'图片展示','I love photo','13.png'),(14,'图片展示','I love photo','14.png'),(15,'图片展示','I love photo','15.png'),(16,'图片展示','I love photo','16.png'),(17,'图片展示','I love photo','17.png'),(18,'图片展示','I love photo','18.png'),(19,'图片展示','I love photo','19.png'),(20,'图片展示','I love photo','20.png'),(21,'图片展示','I love photo','21.png'),(22,'图片展示','I love photo','22.png'),(23,'图片展示','I love photo','23.png'),(24,'图片展示','I love photo','24.png'),(25,'图片展示','I love photo','25.png');

/*Table structure for table `tmsg` */

DROP TABLE IF EXISTS `tmsg`;

CREATE TABLE `tmsg` (
  `userName` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `time` datetime NOT NULL,
  `content` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `status` int(1) NOT NULL DEFAULT '0',
  `msgId` int(20) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`msgId`)
) ENGINE=InnoDB AUTO_INCREMENT=20005 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `tmsg` */

insert  into `tmsg`(`userName`,`time`,`content`,`status`,`msgId`) values ('Han Solo','0000-00-00 00:00:00','网站真好看，谢谢分享',1,20002),('Darren Web','0000-00-00 00:00:00','啊哈哈哈哈',0,20003),('Ton Hanks','0000-00-00 00:00:00','嘻嘻嘻嘻嘻',0,20004);

/*Table structure for table `tuser` */

DROP TABLE IF EXISTS `tuser`;

CREATE TABLE `tuser` (
  `userId` int(12) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `userPwd` varchar(50) COLLATE utf8_unicode_ci NOT NULL COMMENT '用户密码',
  `userName` varchar(12) COLLATE utf8_unicode_ci NOT NULL COMMENT '用户名称',
  `phone` varchar(15) COLLATE utf8_unicode_ci NOT NULL COMMENT '用户电话',
  `mail` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT '用户邮箱',
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=1005 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `tuser` */

insert  into `tuser`(`userId`,`userPwd`,`userName`,`phone`,`mail`) values (1001,'202cb962ac59075b964b07152d234b70','tom32','15132747491','15132747491@163.com'),(1002,'202cb962ac59075b964b07152d234b70','darren32','15111111111','11111111111@163.com'),(1003,'202cb962ac59075b964b07152d234b70','tom66','13333333333','13333333333@163.com'),(1004,'202cb962ac59075b964b07152d234b70','darren99','17777777777','17777777777@163.com');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
