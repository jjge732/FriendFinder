require("@babel/register");
const mysql = require('mysql');

let connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port : 3307,
        user: 'root',
        password: 'root',
        database: 'friend_finder'
    });
};

class PossibleFriend {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // this.photo = photo;
        this.scores = [];
    }
    populateScores(scores) {
        for (let j = 1; j <= 10; j++) {
            // https://www.tutorialspoint.com/How-do-I-create-dynamic-variable-names-inside-a-JavaScript-loop
            this.scores.push(parseFloat(scores['score' + j]));
        }
    }
}

let possibleFriends = [];

const getFriendData = () => {
    connection.query('SELECT * FROM friend_scores LEFT JOIN friend_information ON friend_information.id = friend_scores.id', (err, res) => {
        if (err) throw err;
        possibleFriends = [];
        for (let i = 0; i < res.length; i++) {
            possibleFriends.push(new PossibleFriend(res[i].id, res[i].name));
            possibleFriends[i].populateScores(res[i]);
        }
    });
};

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId + '\n');
    getFriendData()
});

module.exports = app => {
    const findFriend = () => {
        getFriendData();
        let differences = [];
        possibleFriends = possibleFriends.reverse();
            for (let j = 0; j < possibleFriends.length; j++) {
                let indivDifferences = 0;
                for (let i = 0; i < possibleFriends[j].scores.length; i++) {
                    indivDifferences += possibleFriends[0].scores[i] - possibleFriends[j].scores[i];
                }
            differences.push(indivDifferences);
        }
        differences.shift();
        differences = differences.reverse();
        let leastDifference =  {
            id: 0,
            index: -1,
            nbrOfDifferences: 100
        };
        for (let i = 1; i < differences.length; i++) {
            if (differences[i] < leastDifference.nbrOfDifferences) {
                leastDifference.id = i - 1;
                leastDifference.index = i;
                leastDifference.nbrOfDifferences = differences[i];
            }
        }
        console.log(leastDifference.id);
        return leastDifference.id;
    }

    app.get('/api/friends/', (req, res) => {
        res.json(possibleFriends);
    });

    app.post('/api/friends/', (req, res) => {
        connection.query('INSERT INTO friend_information (name) VALUES (?)', [req.body.name], (err, res) => {
            if (err) throw err;
        });
        let scoreNbrArr = [];
        let scoresAsString = '';
        for (let i = 1; i <= 10; i++) {
            scoreNbrArr.push('score' + i);
            scoresAsString += req.body['score' + i];
            if (i !== 10) {
                scoresAsString += ', ';
            };
        }
        connection.query(`INSERT INTO friend_scores (${scoreNbrArr.toString().replace(/,/g, ', ')}) VALUES (${scoresAsString})`, (err, res) => {
            if (err) throw err;
        });
        let length = possibleFriends.length + 1;
        possibleFriends.push(new PossibleFriend(length, req.body.name));
        possibleFriends[length - 1].populateScores(req.body);
        res.json(findFriend());
    });
}