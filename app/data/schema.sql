CREATE DATABASE friend_finder;

USE friend_finder;

CREATE TABLE friend_information (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    -- photo NOT NULL, 
    PRIMARY KEY(id)
);

CREATE TABLE friend_scores (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    score1 INTEGER(11) NOT NULL,    
    score2 INTEGER(11) NOT NULL,
    score3 INTEGER(11) NOT NULL,
    score4 INTEGER(11) NOT NULL,
    score5 INTEGER(11) NOT NULL,
    score6 INTEGER(11) NOT NULL,
    score7 INTEGER(11) NOT NULL,
    score8 INTEGER(11) NOT NULL,
    score9 INTEGER(11) NOT NULL,
    score10 INTEGER(11) NOT NULL,
    PRIMARY KEY(id)
);