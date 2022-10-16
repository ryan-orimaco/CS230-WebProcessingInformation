-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 03, 2021 at 12:46 AM
-- Server version: 10.3.27-MariaDB-0+deb10u1
-- PHP Version: 7.3.27-1~deb10u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cs230_u200293`
--

-- --------------------------------------------------------

--
-- Table structure for table `Address`
--

CREATE TABLE `Address` (
  `Address_Line_1` varchar(255) NOT NULL,
  `Address_Line_2` varchar(255) DEFAULT NULL,
  `Town` varchar(255) NOT NULL,
  `County` varchar(255) NOT NULL,
  `Eircode` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Address`
--

INSERT INTO `Address` (`Address_Line_1`, `Address_Line_2`, `Town`, `County`, `Eircode`) VALUES
('44 Mercedes Street', 'Mercedes HQ', 'Brackley', 'Northamptonshire', 'EIMercedes');

-- --------------------------------------------------------

--
-- Table structure for table `Personal`
--

CREATE TABLE `Personal` (
  `Title` enum('Mx','Ms','Mr','Mrs','Miss','Dr') DEFAULT NULL,
  `Firstname` varchar(255) NOT NULL,
  `Surname` varchar(255) NOT NULL,
  `Mobile` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Personal`
--

INSERT INTO `Personal` (`Title`, `Firstname`, `Surname`, `Mobile`, `Email`) VALUES
('Dr', 'Lewis', 'Hamilton', '443444444', 'sirlhamilton44@f1.com'),
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
