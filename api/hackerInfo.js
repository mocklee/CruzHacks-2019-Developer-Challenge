// Values stored for hacker object:
// name : text
// school : text
// major : text
// age : int
// attendedPreviously : bool
// previousHackathons : int
// email : text
// id : int
// receivedHack : bool

var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var queries = require('../server/db/queries');

function isValidID(req, res, next) {
    if(!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

function validhackerInfo(hackerInfo) {
    var checkName = typeof hackerInfo.name == 'string' && isNaN(hackerInfo.name);
    var checkSchool = typeof hackerInfo.school == 'string';
    var checkMajor = typeof hackerInfo.major == 'string';
    var checkAge = typeof hackerInfo.age == 'number';
    var checkattendedPreviously = typeof hackerInfo.attendedPreviously == 'boolean';
    var checkpreviousHackathons = typeof hackerInfo.previousHackathons == 'number';
    var checkEmail = typeof hackerInfo.email == 'string';
    var checkreceivedHack = typeof hackerInfo.receivedHack == 'boolean';
    return checkName && checkSchool && checkMajor && checkAge && checkattendedPreviously && checkpreviousHackathons && checkEmail && checkreceivedHack;
}

function validUpdatedhackerInfo(hackerInfo) {
    var validUpdate = true;
    if(hackerInfo.name !== null && hackerInfo.name !== undefined) {
        var checkName = typeof hackerInfo.name == 'string' && isNaN(hackerInfo.name);
        if(checkName === false) {
            validUpdate = false;
        };
      };
    if(hackerInfo.school !== null && hackerInfo.school !== undefined) {
        var checkSchool = typeof hackerInfo.school == 'string';
        if(checkSchool === false) {
            validUpdate = false;
        };
      };
    if(hackerInfo.major !== null && hackerInfo.major !== undefined) {
        var checkMajor = typeof hackerInfo.major == 'string';
        if(checkMajor === false) {
            validUpdate = false;
        };
      };
    if(hackerInfo.age !== null && hackerInfo.age !== undefined) {
        var checkAge = typeof hackerInfo.age == 'number';
        if(checkAge === false) {
            validUpdate = false;
        };
      };
    if(hackerInfo.attendedPreviously !== null && hackerInfo.attendedPreviously !== undefined) {
        var checkattendedPreviously = typeof hackerInfo.attendedPreviously == 'boolean';
        if(checkattendedPreviously === false) {
            validUpdate = false;
        };
      };
    if(hackerInfo.previousHackathons !== null && hackerInfo.previousHackathons !== undefined) {
        var checkpreviousHackathons = typeof hackerInfo.previousHackathons == 'number';
        if(checkpreviousHackathons === false) {
            validUpdate = false;
        };
      };
    if(hackerInfo.email !== null && hackerInfo.email !== undefined) {
        var checkEmail = typeof hackerInfo.email == 'string';
        if(checkEmail === false) {
            validUpdate = false;
        };
      }; 
    if(hackerInfo.receivedHack !== null && hackerInfo.receivedHack !== undefined) {
        var checkreceivedHack = typeof hackerInfo.receivedHack == 'boolean';
        if(checkreceivedHack === false) {
            validUpdate = false;
        };
      };
      return validUpdate;
}

// C - Create
router.post('/', (req, res, next) => { 
    if(Object.keys(req.body).length === 0) {
        next(new Error('No data submitted'));
      }
    
    if(validhackerInfo(req.body)) {
        queries.create(req.body).then(newHackerInfo => {
            res.json(newHackerInfo[0]);
        }); 
    } else {
       next(new Error('Invalid fields'));
   }
});

// R - Respond
router.get('/', (req, res) => {
    queries.getAll().then(hackerInfo => {
        res.json(hackerInfo);
    });
});

router.get('/:id', isValidID, (req, res, next) => {
    queries.getOne(req.params.id).then(hackerInfo => {
        if (hackerInfo == null) {
            next();
        }
        else {
            res.json(hackerInfo);
        }
    });
});

// U - Update
router.put('/:id', isValidID, (req, res, next) => {
    if(validUpdatedhackerInfo(req.body)) {
        queries.update(req.params.id, req.body).then(newHackerInfo => {
            res.json(newHackerInfo[0]);
        });
    } else {
        next(new Error("Invalid fields"));
    };
});

//D - Delete
router.delete('/:id', isValidID, (req, res, next) => {
    queries.delete(req.params.id).then(() => {
        res.json({
            deleted: true
        });
    });
});
module.exports = router;
