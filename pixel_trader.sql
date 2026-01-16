-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : jeu. 15 jan. 2026 à 15:36
-- Version du serveur : 8.4.3
-- Version de PHP : 8.3.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pixel_trader`
--

-- --------------------------------------------------------

--
-- Structure de la table `jeu`
--

CREATE TABLE `jeu` (
  `id_jeu` int NOT NULL,
  `titre` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `plateforme` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `annee_sortie` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `jeu`
--

INSERT INTO `jeu` (`id_jeu`, `titre`, `plateforme`, `annee_sortie`) VALUES
(1, 'Super Mario 64', 'Nintendo 64', 1996),
(2, 'The Legend of Zelda: Ocarina of Time', 'Nintendo 64', 1998),
(3, 'Sonic The Hedgehog', 'Sega Mega Drive', 1991),
(4, 'Final Fantasy VII', 'PlayStation 1', 1997),
(5, 'Super Mario 64', 'Nintendo 64', 1996),
(6, 'Street Fighter II', 'Super Nintendo', 1992),
(7, 'Tetris', 'Game Boy', 1989),
(8, 'Metal Gear Solid', 'PlayStation 1', 1998),
(9, 'Chrono Trigger', 'Super Nintendo', 1995),
(10, 'Castlevania: Symphony of the Night', 'PlayStation 1', 1997),
(11, 'Alex Kidd in Miracle World', 'Sega Master System', 1986),
(12, 'Pokemon Rouge', 'Game Boy', 1996),
(13, 'GoldenEye 007', 'Nintendo 64', 1997),
(14, 'Shenmue', 'Dreamcast', 1999),
(15, 'Half-Life', 'PC', 1998),
(16, 'Super Mario Bros 3', 'NES', 1988),
(17, 'Resident Evil', 'PlayStation 1', 1996),
(18, 'Sonic The Hedgehog', 'Sega Mega Drive', 1991),
(19, 'Donkey Kong Country', 'Super Nintendo', 1994),
(20, 'Pac-Man', 'Arcade', 1980),
(21, 'Grand Theft Auto', 'PlayStation 1', 1997),
(22, 'Halo: Combat Evolved', 'Xbox', 2001),
(23, 'Super Metroid', 'Super Nintendo', 1994),
(24, 'Final Fantasy VII', 'PlayStation 1', 1997),
(25, 'Crash Bandicoot', 'PlayStation 1', 1996),
(26, 'Pokemon Bleu', 'Game Boy', 1999),
(27, 'Zelda: A Link to the Past', 'Super Nintendo', 1992),
(28, 'Earthworm Jim', 'Sega Mega Drive', 1994),
(29, 'Silent Hill', 'PlayStation 1', 1999),
(30, 'Super Smash Bros Melee', 'GameCube', 2001),
(31, 'Ico', 'PlayStation 2', 2001),
(32, 'Shadow of the Colossus', 'PlayStation 2', 2005),
(33, 'Street Fighter 2', 'Super Nintendo', 1992),
(34, 'Conker\'s Bad Fur Day', 'Nintendo 64', 2001),
(35, 'Tomb Raider', 'Saturn', 1996),
(36, 'Crazy Taxi', 'Dreamcast', 1999),
(37, 'Mario Kart 64', 'Nintendo 64', 1997),
(38, 'Pokemon Or', 'Game Boy Color', 2000),
(39, 'Duck Hunt', 'NES', 1984),
(40, 'Mega Man 2', 'NES', 1988),
(41, 'Gran Turismo', 'PlayStation 1', 1997),
(42, 'SoulCalibur', 'Dreamcast', 1999),
(43, 'Diablo II', 'PC', 2000),
(44, 'Portal 2', 'PlayStation 3', 2011),
(45, 'The Last of Us', 'PlayStation 3', 2013),
(46, 'Zelda Breath of the Wild', 'Nintendo Switch', 2017),
(47, 'Tetris', 'Game Boy', 1984),
(48, 'Spyro the Dragon', 'PlayStation 1', 1998),
(49, 'F-Zero X', 'Nintendo 64', 1998),
(50, 'Earthbound', 'Super Nintendo', 1994),
(51, 'Final Fantasy X', 'PlayStation 2', 2001),
(52, 'Super Mario Sunshine', 'GameCube', 2002),
(53, 'Luigi\'s Mansion', 'GameCube', 2001),
(54, 'Zelda Wind Waker', 'GameCube', 2002),
(55, 'Metroid Prime', 'GameCube', 2002),
(56, 'Sonic Adventure 2', 'Dreamcast', 2001),
(57, 'Kingdom Hearts', 'PlayStation 2', 2002),
(58, 'Okami', 'PlayStation 2', 2006),
(59, 'Metal Gear Solid 3', 'PlayStation 2', 2004),
(60, 'Sim City 2000', 'PC', 1993),
(61, 'Pokemon Emeraude', 'Game Boy Advance', 2004),
(62, 'Castlevania Aria of Sorrow', 'Game Boy Advance', 2003),
(63, 'Advance Wars', 'Game Boy Advance', 2001),
(64, 'Super Mario World', 'Super Nintendo', 1990),
(65, 'Chrono Cross', 'PlayStation 1', 1999),
(66, 'Super Mario 64', 'Nintendo 64', 1996),
(67, 'The Legend of Zelda: Ocarina of Time', 'Nintendo 64', 1998),
(68, 'Sonic The Hedgehog', 'Sega Mega Drive', 1991),
(69, 'Final Fantasy VII', 'PlayStation 1', 1997),
(70, 'Super Mario 64', 'Nintendo 64', 1996),
(71, 'Street Fighter II', 'Super Nintendo', 1992),
(72, 'Tetris', 'Game Boy', 1989),
(73, 'Metal Gear Solid', 'PlayStation 1', 1998),
(74, 'Chrono Trigger', 'Super Nintendo', 1995),
(75, 'Castlevania: Symphony of the Night', 'playstation', 1997),
(76, 'Alex Kidd in Miracle World', 'master system', 1986),
(77, 'Pokemon Rouge', 'Game Boy', 1996),
(78, 'GoldenEye 007', 'Nintendo 64', 1997),
(79, 'Shenmue', 'dreamcast', 1999),
(80, 'Half-Life', 'pc', 1998),
(81, 'Super Mario Bros 3', 'NES', 1988),
(82, 'Resident Evil', 'PlayStation 1', 1996),
(83, 'Sonic The Hedgehog', 'Sega Mega Drive', 1991),
(84, 'Donkey Kong Country', 'Super Nintendo', 1994),
(85, 'Pac-Man', 'arcade', 1980),
(86, 'Grand Theft Auto', 'PlayStation 1', 1997),
(87, 'Halo: Combat Evolved', 'xbox', 2001),
(88, 'Super Metroid', 'Super Nintendo', 1994),
(89, 'Final Fantasy VII', 'PlayStation 1', 1997),
(90, 'Crash Bandicoot', 'playstation', 1996),
(91, 'Pokemon Bleu', 'Game Boy', 1999),
(92, 'Zelda: A Link to the Past', 'Super Nintendo', 1992),
(93, 'Earthworm Jim', 'Sega Mega Drive', 1994),
(94, 'Silent Hill', 'PlayStation 1', 1999),
(95, 'Super Smash Bros Melee', 'GameCube', 2001),
(96, 'Ico', 'PlayStation 2', 2001),
(97, 'Shadow of the Colossus', 'PlayStation 2', 2005),
(98, 'Street Fighter 2', 'super famicom', 1992),
(99, 'Conker\'s Bad Fur Day', 'Nintendo 64', 2001),
(100, 'Tomb Raider', 'saturn', 1996),
(101, 'Crazy Taxi', 'dreamcast', 1999),
(102, 'Mario Kart 64', 'Nintendo 64', 1997),
(103, 'Pokemon Or', 'gameboy color', 2000),
(104, 'Duck Hunt', 'NES', 1984),
(105, 'Mega Man 2', 'NES', 1988),
(106, 'Gran Turismo', 'PlayStation 1', 1997),
(107, 'SoulCalibur', 'dreamcast', 1999),
(108, 'Diablo II', 'pc', 2000),
(109, 'Portal 2', 'ps3', 2011),
(110, 'The Last of Us', 'ps3', 2013),
(111, 'Zelda Breath of the Wild', 'switch', 2017),
(112, 'Tetris', 'Game Boy', 1984),
(113, 'Spyro the Dragon', 'PlayStation 1', 1998),
(114, 'F-Zero X', 'Nintendo 64', 1998),
(115, 'Earthbound', 'Super Nintendo', 1994),
(116, 'Final Fantasy X', 'PlayStation 2', 2001),
(117, 'Super Mario Sunshine', 'GameCube', 2002),
(118, 'Luigi\'s Mansion', 'GameCube', 2001),
(119, 'Zelda Wind Waker', 'GameCube', 2002),
(120, 'Metroid Prime', 'GameCube', 2002),
(121, 'Sonic Adventure 2', 'dreamcast', 2001),
(122, 'Kingdom Hearts', 'PlayStation 2', 2002),
(123, 'Okami', 'PlayStation 2', 2006),
(124, 'Metal Gear Solid 3', 'PlayStation 2', 2004),
(125, 'Sim City 2000', 'pc', 1993),
(126, 'Pokemon Emeraude', 'Game Boy Advance', 2004),
(127, 'Castlevania Aria of Sorrow', 'Game Boy Advance', 2003),
(128, 'Advance Wars', 'Game Boy Advance', 2001),
(129, 'Super Mario World', 'Super Nintendo', 1990),
(130, 'Chrono Cross', 'PlayStation 1', 1999);

-- --------------------------------------------------------

--
-- Structure de la table `stock`
--

CREATE TABLE `stock` (
  `id_jeu` int NOT NULL,
  `etat` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `emplacement` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `valeur_estime` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `prix_achat` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `stock`
--

INSERT INTO `stock` (`id_jeu`, `etat`, `emplacement`, `valeur_estime`, `prix_achat`) VALUES
(1, 'Excellent', 'Etagere A', '50.00 €', '15.00 €'),
(2, 'Moyen', 'Etagere A', '75.00 €', '20.00 €'),
(3, 'Bon', 'Etagere B', '30.00 €', '5.00 €'),
(4, 'Excellent', 'Vitrine 1', '120.00 €', '45.00 €'),
(5, 'Excellent', 'Stock', '50.00 €', '15.00 €'),
(6, 'Moyen', 'Etagere D', '45.00 €', '10.00 €'),
(7, 'Bon', 'Caisse 2', '5.00 €', '5.00 €'),
(8, 'Excellent', 'Vitrine 1', '60.00 €', '20.00 €'),
(9, 'Excellent', 'Coffre-fort', '300.00 €', '80.00 €'),
(10, 'Bon', 'Etagere A', '150.00 €', '50.00 €'),
(11, 'Moyen', 'Etagere B', '20.00 €', '5.00 €'),
(12, 'Bon', 'Caisse 2', '40.00 €', '15.00 €'),
(13, 'Excellent', 'Etagere F', '55.00 €', '20.00 €'),
(14, 'Excellent', 'Vitrine 2', '80.00 €', '30.00 €'),
(15, 'Bon', 'Reserve', '15.00 €', '2.00 €'),
(16, 'Mauvais', 'Etagere A', '35.00 €', '10.00 €'),
(17, 'Bon', 'Etagere G', '45.00 €', '15.00 €'),
(18, 'Bon', 'Etagere B', '30.00 €', '8.00 €'),
(19, 'Excellent', 'Etagere A', '40.00 €', '15.00 €'),
(20, 'Moyen', 'Entrée', '1349.50 €', '269.90 €'),
(21, 'Mauvais', 'Stock', '25.00 €', '5.00 €'),
(22, 'Excellent', 'Etagere H', '15.00 €', '5.00 €'),
(23, 'Moyen', 'Etagere A', '120.00 €', '40.00 €'),
(24, 'Excellent', 'Stock', '120.00 €', '40.00 €'),
(25, 'Bon', 'Etagere C', '30.00 €', '10.00 €'),
(26, 'Moyen', 'Caisse 2', '35.00 €', '10.00 €'),
(27, 'Moyen', 'Etagere A', '10.00 €', '10.00 €'),
(28, 'Bon', 'Etagere B', '40.00 €', '15.00 €'),
(29, 'Excellent', 'Vitrine 1', '80.00 €', '25.00 €'),
(30, 'Mauvais', 'Etagere H', '35.00 €', '10.00 €'),
(31, 'Excellent', 'Etagere C', '40.00 €', '15.00 €'),
(32, 'Excellent', 'Etagere C', '35.00 €', '12.00 €'),
(33, 'Bon', 'Stock', '18.89 €', '2.70 €'),
(34, 'Excellent', 'Coffre-fort', '200.00 €', '60.00 €'),
(35, 'Bon', 'Etagere B', '30.00 €', '10.00 €'),
(36, 'Excellent', 'Etagere F', '40.00 €', '15.00 €'),
(37, 'Moyen', 'Etagere A', '35.00 €', '12.00 €'),
(38, 'Moyen', 'Caisse 2', '45.00 €', '15.00 €'),
(39, 'Bon', 'Stock', '10.00 €', '2.00 €'),
(40, 'Mauvais', 'Etagere A', '50.00 €', '15.00 €'),
(41, 'Excellent', 'Etagere C', '10.00 €', '2.00 €'),
(42, 'Excellent', 'Vitrine 2', '40.00 €', '15.00 €'),
(43, 'Excellent', 'Reserve', '60.00 €', '10.00 €'),
(44, 'Excellent', 'Stock', '20.00 €', '5.00 €'),
(45, 'Excellent', 'Etagere C', '25.00 €', '10.00 €'),
(46, 'Moyen', 'Comptoir', '40.00 €', '25.00 €'),
(47, 'Bon', 'Caisse 2', '15.00 €', '5.00 €'),
(48, 'Mauvais', 'Etagere C', '25.00 €', '8.00 €'),
(49, 'Excellent', 'Stock', '45.00 €', '15.00 €'),
(50, 'Excellent', 'Coffre-fort', '858.30 €', '171.66 €'),
(51, 'Bon', 'Etagere C', '15.00 €', '5.00 €'),
(52, 'Mauvais', 'Stock', '30.00 €', '10.00 €'),
(53, 'Excellent', 'Etagere H', '45.00 €', '15.00 €'),
(54, 'Excellent', 'Vitrine 1', '80.00 €', '30.00 €'),
(55, 'Excellent', 'Etagere H', '25.00 €', '8.00 €'),
(56, 'Bon', 'Etagere F', '45.00 €', '15.00 €'),
(57, 'Bon', 'Etagere C', '15.00 €', '5.00 €'),
(58, 'Excellent', 'Etagere C', '30.00 €', '10.00 €'),
(59, 'Excellent', 'Vitrine 2', '50.00 €', '20.00 €'),
(60, 'Moyen', 'Reserve', '20.00 €', '2.00 €'),
(61, 'Moyen', 'Caisse 2', '60.00 €', '20.00 €'),
(62, 'Excellent', 'Vitrine 1', '120.00 €', '40.00 €'),
(63, 'Bon', 'Etagere D', '35.00 €', '10.00 €'),
(64, 'Mauvais', 'Stock', '25.00 €', '5.00 €'),
(65, 'Bon', 'Stock', '21.59 €', '5.40 €'),
(66, 'Excellent', 'Etagere A', '50.00 €', '15.00 €'),
(67, 'Moyen', 'Etagere A', '75.00 €', '20.00 €'),
(68, 'Bon', 'Etagere B', '30.00 €', '5.00 €'),
(69, 'Excellent', 'Vitrine 1', '120.00 €', '45.00 €'),
(70, 'Excellent', 'Stock', '50.00 €', '15.00 €'),
(71, 'Moyen', 'Etagere D', '45.00 €', '10.00 €'),
(72, 'Bon', 'Caisse 2', '5.00 €', '5.00 €'),
(73, 'Excellent', 'Vitrine 1', '60.00 €', '20.00 €'),
(74, 'Excellent', 'Coffre-fort', '300.00 €', '80.00 €'),
(75, 'Bon', 'Etagere A', '150.00 €', '50.00 €'),
(76, 'Moyen', 'Etagere B', '20.00 €', '5.00 €'),
(77, 'Bon', 'Caisse 2', '40.00 €', '15.00 €'),
(78, 'Excellent', 'Etagere F', '55.00 €', '20.00 €'),
(79, 'Excellent', 'Vitrine 2', '80.00 €', '30.00 €'),
(80, 'Bon', 'Reserve', '15.00 €', '2.00 €'),
(81, 'Mauvais', 'Etagere A', '35.00 €', '10.00 €'),
(82, 'Bon', 'Etagere G', '45.00 €', '15.00 €'),
(83, 'Bon', 'Etagere B', '30.00 €', '8.00 €'),
(84, 'Excellent', 'Etagere A', '40.00 €', '15.00 €'),
(85, 'Moyen', 'Entrée', '1349.50 €', '269.90 €'),
(86, 'Mauvais', 'Stock', '25.00 €', '5.00 €'),
(87, 'Excellent', 'Etagere H', '15.00 €', '5.00 €'),
(88, 'Moyen', 'Etagere A', '120.00 €', '40.00 €'),
(89, 'Excellent', 'Stock', '120.00 €', '40.00 €'),
(90, 'Bon', 'Etagere C', '30.00 €', '10.00 €'),
(91, 'Moyen', 'Caisse 2', '35.00 €', '10.00 €'),
(92, 'Moyen', 'Etagere A', '10.00 €', '10.00 €'),
(93, 'Bon', 'Etagere B', '40.00 €', '15.00 €'),
(94, 'Excellent', 'Vitrine 1', '80.00 €', '25.00 €'),
(95, 'Mauvais', 'Etagere H', '35.00 €', '10.00 €'),
(96, 'Excellent', 'Etagere C', '40.00 €', '15.00 €'),
(97, 'Excellent', 'Etagere C', '35.00 €', '12.00 €'),
(98, 'Bon', 'Stock', '18.89 €', '2.70 €'),
(99, 'Excellent', 'Coffre-fort', '200.00 €', '60.00 €'),
(100, 'Bon', 'Etagere B', '30.00 €', '10.00 €'),
(101, 'Excellent', 'Etagere F', '40.00 €', '15.00 €'),
(102, 'Moyen', 'Etagere A', '35.00 €', '12.00 €'),
(103, 'Moyen', 'Caisse 2', '45.00 €', '15.00 €'),
(104, 'Bon', 'Stock', '10.00 €', '2.00 €'),
(105, 'Mauvais', 'Etagere A', '50.00 €', '15.00 €'),
(106, 'Excellent', 'Etagere C', '10.00 €', '2.00 €'),
(107, 'Excellent', 'Vitrine 2', '40.00 €', '15.00 €'),
(108, 'Excellent', 'Reserve', '60.00 €', '10.00 €'),
(109, 'Excellent', 'Stock', '20.00 €', '5.00 €'),
(110, 'Excellent', 'Etagere C', '25.00 €', '10.00 €'),
(111, 'Moyen', 'Comptoir', '40.00 €', '25.00 €'),
(112, 'Bon', 'Caisse 2', '15.00 €', '5.00 €'),
(113, 'Mauvais', 'Etagere C', '25.00 €', '8.00 €'),
(114, 'Excellent', 'Stock', '45.00 €', '15.00 €'),
(115, 'Excellent', 'Coffre-fort', '858.30 €', '171.66 €'),
(116, 'Bon', 'Etagere C', '15.00 €', '5.00 €'),
(117, 'Mauvais', 'Stock', '30.00 €', '10.00 €'),
(118, 'Excellent', 'Etagere H', '45.00 €', '15.00 €'),
(119, 'Excellent', 'Vitrine 1', '80.00 €', '30.00 €'),
(120, 'Excellent', 'Etagere H', '25.00 €', '8.00 €'),
(121, 'Bon', 'Etagere F', '45.00 €', '15.00 €'),
(122, 'Bon', 'Etagere C', '15.00 €', '5.00 €'),
(123, 'Excellent', 'Etagere C', '30.00 €', '10.00 €'),
(124, 'Excellent', 'Vitrine 2', '50.00 €', '20.00 €'),
(125, 'Moyen', 'Reserve', '20.00 €', '2.00 €'),
(126, 'Moyen', 'Caisse 2', '60.00 €', '20.00 €'),
(127, 'Excellent', 'Vitrine 1', '120.00 €', '40.00 €'),
(128, 'Bon', 'Etagere D', '35.00 €', '10.00 €'),
(129, 'Mauvais', 'Stock', '25.00 €', '5.00 €'),
(130, 'Bon', 'Stock', '21.59 €', '5.40 €');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `jeu`
--
ALTER TABLE `jeu`
  ADD PRIMARY KEY (`id_jeu`);

--
-- Index pour la table `stock`
--
ALTER TABLE `stock`
  ADD KEY `id_jeu` (`id_jeu`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `jeu`
--
ALTER TABLE `jeu`
  MODIFY `id_jeu` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=131;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `stock_ibfk_1` FOREIGN KEY (`id_jeu`) REFERENCES `jeu` (`id_jeu`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
