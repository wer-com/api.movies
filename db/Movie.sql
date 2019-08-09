-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 07, 2019 at 06:21 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Movie`
--

-- --------------------------------------------------------

--
-- Table structure for table `actor`
--

CREATE TABLE `actor` (
  `ActorID` int(11) NOT NULL,
  `firstName` varchar(50) COLLATE utf32_polish_ci NOT NULL,
  `secondName` varchar(50) COLLATE utf32_polish_ci NOT NULL,
  `gender` varchar(50) COLLATE utf32_polish_ci NOT NULL,
  `image` varchar(1000) COLLATE utf32_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_polish_ci;

--
-- Dumping data for table `actor`
--

INSERT INTO `actor` (`ActorID`, `firstName`, `secondName`, `gender`, `image`) VALUES
(1, 'Margot ', 'Robbie', 'Female', 'https://gfx.antyradio.pl/var/antyradio/storage/images/film/duperele/najlepsze-filmy-z-margot-robbie-wyniki-sondy-27550/1945080-1-pol-PL/Najlepsze-filmy-z-Margot-Robbie-WYNIKI-SONDY_article.jpg'),
(3, 'Leo', 'DiCaprio', 'Male', 'https://ssl-gfx.filmweb.pl/p/00/30/30/449647.2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `cast`
--

CREATE TABLE `cast` (
  `ActorID` int(11) NOT NULL,
  `MovieID` int(11) NOT NULL,
  `role` varchar(50) COLLATE utf32_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_polish_ci;

--
-- Dumping data for table `cast`
--

INSERT INTO `cast` (`ActorID`, `MovieID`, `role`) VALUES
(1, 1, 'Sharon Tate');

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `movie` (
  `MovieID` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf32_polish_ci NOT NULL,
  `year` varchar(100) COLLATE utf32_polish_ci NOT NULL,
  `country` varchar(100) COLLATE utf32_polish_ci NOT NULL,
  `category` varchar(100) COLLATE utf32_polish_ci NOT NULL,
  `image` varchar(1000) COLLATE utf32_polish_ci NOT NULL,
  `length` varchar(100) COLLATE utf32_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_polish_ci;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`MovieID`, `name`, `year`, `country`, `category`, `image`, `length`) VALUES
(1, 'Once Upon a Time... in Hollywood', '2019', 'USA', 'Comedy, Drama ', 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Once_Upon_a_Time_in_Hollywood_poster.png/220px-Once_Upon_a_Time_in_Hollywood_poster.png', '2h 41min ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actor`
--
ALTER TABLE `actor`
  ADD PRIMARY KEY (`ActorID`);

--
-- Indexes for table `cast`
--
ALTER TABLE `cast`
  ADD KEY `ActorID` (`ActorID`),
  ADD KEY `MovieID` (`MovieID`);

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`MovieID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actor`
--
ALTER TABLE `actor`
  MODIFY `ActorID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `movie`
--
ALTER TABLE `movie`
  MODIFY `MovieID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cast`
--
ALTER TABLE `cast`
  ADD CONSTRAINT `cast_ibfk_1` FOREIGN KEY (`ActorID`) REFERENCES `actor` (`ActorID`) ON DELETE CASCADE,
  ADD CONSTRAINT `cast_ibfk_3` FOREIGN KEY (`MovieID`) REFERENCES `movie` (`MovieID`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;