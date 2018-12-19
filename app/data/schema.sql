CREATE DATABASE friend_finder;

USE friend_finder;

CREATE TABLE friend_information (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    -- photo VARCHAR(30) NOT NULL, 
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

INSERT INTO friend_information (name) VALUE ('kai');

INSERT INTO friend_scores (score1, score2, score3, score4, score5, score6, score7, score8, score9, score10)
VALUES ("5", "3", "4", "4", "4", "2", "3", "2", "1", "2");