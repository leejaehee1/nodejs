let express = require('express');
let bodyParser = require('body-parser'); //body의 json을 파싱해주는 모듈
let dateFormat = require('dateformat'); //날짜형식을 원하는 형태로 바꿔주는 모듈
let empty = require('is-empty'); //빈값 체크 모듈 *.주의:0도 empty로 판단함

const bcrypt = require('bcrypt');
const saltRounds = 10;

const stringify = require("json-stringify-pretty-compact"); //json 값을 문자열로 (보기좋게)변환해주는 모듈

let router = express.Router();

const {User} = require('../models');

// testimport DB // king
const { authority } = require('../models');
const { PunchList } = require('../models');


router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.get('/loginCheck', (req, res) => {
    if (req.session.loginData) {
        res.send({loggedIn: true, loginData: req.session.loginData})
    } else {
        res.send({loggedIn: false})
    }
})




router.post('/login', async (req, res, next) => {
    let userID = req.body.userID;
    let password = req.body.password;
    if (!empty(userID) && !empty(password)) {
        User.findOne({where: {userID: userID}})
            .then(result => {
                bcrypt.compare(password, result.password, (error, result) => {
                    if (result) {
                        req.session.loginData = {userID: userID, password: password};
                        req.session.save(error => {
                            if (error) console.log(error)
                        })
                        res.json(result);
                    } else {
                        res.json(result);
                    }
                })
            })
            .catch(err => {
                console.error(err);
            });
    } else {
        res.json({result: false, error: null, data: null});
    }
});

router.post('/register', async (req, res, next) => {
    let userID = req.body.userID;
    let password = req.body.password;
    if (!empty(userID) && !empty(password)) {
        bcrypt.hash(password, saltRounds, (error, hash) => {
            password = hash;
            User.create({userID: userID, password: password})
                .then(result => {
                    res.json({result: result, error: null, data: null});
                })
                .catch(err => {
                    console.error(err);
                    res.json({result: false, error: err, data: null});
                });
        })
    } else {
        res.json({result: false, error: null, data: null});
    }
});

router.post('/update', async (req, res, next) => {
    let userID = req.body.userID;
    let password = req.body.password;
    if (!empty(userID) && !empty(password)) {
        User.update({password: password}, {where: {userID: userID}})
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                console.error(err);
            });
    } else {
        res.json({result: false, error: null, data: null});
    }
});

router.post('/delete', async (req, res, next) => {
    let userID = req.body.userID;
    if (!empty(userID)) {
        User.destroy({where: {userID: userID}})
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                console.error(err);
            });
    } else {
        res.json({result: false, error: null, data: null});
    }
});




// king test
// 따로 분리된 .js 파일을 만들어야함.

router.get('/authority', (req, res) => {
    authority.findAll({
        attributes: [ 'authority', 'authName', 'remarks']
        // where: { id: [1]}
    })
    .then(result => {
        // res.json({"data":result, test: "test", error: null})
        console.log(result.body)
        res.json(result)
    })
    .catch(err => {
        console.error(err);
        res.json({error: null}
    )});
})


router.get('/list', (req, res) => {
    const queyRangeString = req.query.range
    const startSetString = queyRangeString.indexOf('[')
    const midSetString = queyRangeString.indexOf(',')
    const endSetString = queyRangeString.indexOf(']')
    const offset = Number(queyRangeString.slice(startSetString+1, midSetString))
    const limit = Number(queyRangeString.slice(midSetString+1, endSetString))
    console.log(offset)
    console.log(limit)
    PunchList.findAll({
        PunchList: [ `projectID`, `punchID`, `category`, `system`, `subsystem`, `discipline`, `status`, `unit`, `area`, 
        `tagNumber`, `bulkItem`, `bulkName`, `department`, `targetDate`, `issuedDate`, `issuedBy`, `raisedBy`, `completedDate`, 
        `completedBy`, `confirmedDate`, `confirmedBy`, `closedDate`, `closedBy`, `scheduleKey`, `scheStartDate`, `scheFinishDate`,
         `designChgReq`, `materialReq`, `issueDescription`, `completeComment`, `notAcceptComment`, `difficulty`, `scheduleImpact`, 
         `costImpact`, `keyword2`, `keyword3`, `keyword4`, `drawingNo`, `awpCode`],
         offset: offset,
         limit: limit,
    })
    .then(result => {
        // res.header("Content-Range", `getProducts 0-4/${result.length}`);
        res.set('Content-Range', `getProducts 0-${result.length}/${result.length}`)
        res.set('Access-Control-Expose-Headers', 'Content-Range')
        res.send(result);
    })
    .catch(err => {
        res.json({error: null}
    )});
})




module.exports = router;