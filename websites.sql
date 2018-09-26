-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 2018-09-26 04:27:07
-- 服务器版本： 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `websites`
--

-- --------------------------------------------------------

--
-- 表的结构 `link_class`
--

DROP TABLE IF EXISTS `link_class`;
CREATE TABLE IF NOT EXISTS `link_class` (
  `classId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `className` varchar(40) NOT NULL,
  PRIMARY KEY (`classId`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `link_class`
--

INSERT INTO `link_class` (`classId`, `className`) VALUES
(101, 'Vue'),
(102, 'React'),
(103, 'Angular'),
(104, 'Webpack'),
(105, 'Node'),
(106, 'HTML5'),
(107, 'CSS3'),
(108, 'JavaScript'),
(109, 'ES6'),
(110, 'Go'),
(111, 'Git'),
(112, 'JQuery'),
(113, 'JAVA'),
(114, '数据库');

-- --------------------------------------------------------

--
-- 表的结构 `link_list`
--

DROP TABLE IF EXISTS `link_list`;
CREATE TABLE IF NOT EXISTS `link_list` (
  `linkId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `linkTitle` varchar(40) NOT NULL,
  `linkUrl` varchar(100) NOT NULL,
  `linkPwa` varchar(40) DEFAULT NULL,
  `linkClass` varchar(100) NOT NULL,
  `userId` int(10) NOT NULL,
  `linkAuthor` varchar(40) NOT NULL,
  `linkPraise` varchar(40) NOT NULL,
  `linkReport` varchar(40) NOT NULL,
  `linkShow` int(10) NOT NULL,
  `linkTime` bigint(16) DEFAULT NULL,
  PRIMARY KEY (`linkId`)
) ENGINE=InnoDB AUTO_INCREMENT=10001 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `link_list`
--

INSERT INTO `link_list` (`linkId`, `linkTitle`, `linkUrl`, `linkPwa`, `linkClass`, `userId`, `linkAuthor`, `linkPraise`, `linkReport`, `linkShow`, `linkTime`) VALUES
(10001, 'Vue.js 源码全方位深入解析', 'https://pan.baidu.com/s/1M11eMos98td7QBjusA6wiQ', '', 'HTML5,Vue,Webpack', 100007, '冬梅', '0', '0', 1, 1537428097635),
(10002, '前端完整学习资料', 'https://pan.baidu.com/s/1NFGRdOx9lDTwCZQdh1raAA', 'q0a3', 'Vue,CSS3,HTML5,Node', 100005, 'scz', '0', '0', 1, 1537430585456),
(10003, '打造扛得住的MySQL数据库架构', 'https://pan.baidu.com/s/16b_bfqeSGyLimqjXV-8UwA', '', 'CSS3,HTML5,Vue,Node', 100005, 'scz', '56', '5', 1, 1537430657621),
(10004, 'BAT各大公司面试题', 'https://pan.baidu.com/s/1JD3_68LRBRBGsiycUrx3MQ', '', 'CSS3,HTML5,Vue,Node', 100005, 'scz', '0', '0', 1, 1537430677177),
(10005, 'Google资深工程师深度讲解Go语言', 'https://pan.baidu.com/s/1S9iN47ijRcHQhJIH7egirw', '', 'Webpack,Angular,React', 100005, 'scz', '99', '5', 1, 1537430730918),
(10006, 'Angular4.0从入门到实践', 'https://pan.baidu.com/s/1Cz8M4T0SAuKZAN4et3JXVw', 'kol3', 'Webpack,Angular', 100005, 'scz', '32', '12', 1, 1537430759384),
(10007, 'HTML5与CSS3实现动态网页系列课程', 'https://pan.baidu.com/s/13wrlboqorOMjjaI0dZDTwQ', '', 'Webpack,Vue,CSS3,HTML5', 100002, '小明3', '0', '0', 1, 1537430802789),
(10008, 'Vue2.0+Node.js+MongoDB全栈打造商城系统', 'https://pan.baidu.com/s/14snUMWqnzRZNWBJGi-pHQA', '', 'Webpack,Vue,CSS3', 100002, '小明3', '128', '15', 1, 1537430827633),
(10009, 'Vue.js 源码全方位深入解析', 'https://pan.baidu.com/s/1M11eMos98td7QBjusA6wiQ', '', 'HTML5,Vue,Webpack', 100007, '冬梅', '7', '1', 1, 1537428097635),
(10010, 'scz', 'scz', 'scz', 'HTML5,CSS3,Vue', 100018, '小明', '0', '0', 1, 1537509830030),
(10011, '王庆', '123', '1234', 'HTML5,Vue,Node', 100022, '王庆', '0', '0', 1, 1537525483714);

-- --------------------------------------------------------

--
-- 表的结构 `reg_user`
--

DROP TABLE IF EXISTS `reg_user`;
CREATE TABLE IF NOT EXISTS `reg_user` (
  `userId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `userName` varchar(40) NOT NULL,
  `userAge` varchar(40) NOT NULL,
  `userSex` varchar(40) NOT NULL,
  `userPwa` varchar(40) NOT NULL,
  `regTime` bigint(16) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=100001 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `reg_user`
--

INSERT INTO `reg_user` (`userId`, `userName`, `userAge`, `userSex`, `userPwa`, `regTime`) VALUES
(100016, '小红', '21', '女', '46f94c8de14fb36680850768ff1b7f2a', 1537508425288),
(100017, 'scz', '23', '男', 'c8837b23ff8aaa8a2dde915473ce0991', 1537509253222),
(100018, '小明', '22', '男', '202cb962ac59075b964b07152d234b70', 1537509742635),
(100019, '123', '21', '女', '202cb962ac59075b964b07152d234b70', 1537510546689),
(100020, '学习前端哈', '22', '男', '202cb962ac59075b964b07152d234b70', 1537515518692),
(100021, '12345678', '11', '女', 'caf1a3dfb505ffed0d024130f58c5cfa', 1537515815152),
(100022, '王庆', '18', '女', 'e10adc3949ba59abbe56e057f20f883e', 1537525444749);

-- --------------------------------------------------------

--
-- 表的结构 `study_tbl`
--

DROP TABLE IF EXISTS `study_tbl`;
CREATE TABLE IF NOT EXISTS `study_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `age` int(4) NOT NULL,
  `time_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10001 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `study_tbl`
--

INSERT INTO `study_tbl` (`id`, `name`, `age`, `time_date`) VALUES
(10001, '小明', 23, NULL),
(10002, '小红', 21, NULL),
(10003, '大爱', 12, NULL),
(10006, '大付', 21, NULL),
(10037, '发过火', 123, NULL),
(10038, '发过火', 33, NULL),
(10039, '是是是', 33, NULL),
(10040, 'scz', 19, NULL),
(10041, '冬梅', 21, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
