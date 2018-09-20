-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 2018-09-20 07:24:41
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
) ENGINE=InnoDB AUTO_INCREMENT=10002 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `link_list`
--

INSERT INTO `link_list` (`linkId`, `linkTitle`, `linkUrl`, `linkPwa`, `linkClass`, `userId`, `linkAuthor`, `linkPraise`, `linkReport`, `linkShow`, `linkTime`) VALUES
(10001, 'Vue.js 源码全方位深入解析', 'https://pan.baidu.com/s/1M11eMos98td7QBjusA6wiQ', '', 'HTML5,Vue,Webpack', 100007, '冬梅', '0', '0', 1, 1537428097635);

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
) ENGINE=InnoDB AUTO_INCREMENT=100016 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `reg_user`
--

INSERT INTO `reg_user` (`userId`, `userName`, `userAge`, `userSex`, `userPwa`, `regTime`) VALUES
(100002, '小明3', '23', '女', '123456', 1537264387093),
(100005, 'scz', '23', '男', 'aabbCC', 1537341333834),
(100007, '冬梅', '24', '女', '123', 1537342080823),
(100012, 'scz11', '22', '男', 'qwe', 1537342593358),
(100013, 'scz3', '22', '男', 'qwe', 1537342601901),
(100014, 'adad', '21', '女', 'qaz', 1537345158510),
(100015, ' d打我', '21', '女', 'ert123', 1537345455095);

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
) ENGINE=InnoDB AUTO_INCREMENT=10042 DEFAULT CHARSET=utf8;

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
