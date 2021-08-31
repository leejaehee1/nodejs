
let express = require('express');
let bodyParser = require('body-parser'); //body의 json을 파싱해주는 모듈
let dateFormat = require('dateformat'); //날짜형식을 원하는 형태로 바꿔주는 모듈
let empty = require('is-empty'); //빈값 체크 모듈 *.주의:0도 empty로 판단함


const stringify = require("json-stringify-pretty-compact"); //json 값을 문자열로 (보기좋게)변환해주는 모듈

let router = express.Router();

// testimport DB // king
const { authority } = require('../models');
const { PunchList } = require('../models');
const { status } = require('../models');
// const status = require('../models/status');


router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());


// king test
// 따로 분리된 .js 파일을 만들어야함.

router.get('/authority', (req, res) => {
    const queyRangeString = req.query.range
    const startSetString = queyRangeString.indexOf('[')
    const midSetString = queyRangeString.indexOf(',')
    const endSetString = queyRangeString.indexOf(']')
    const offset = Number(queyRangeString.slice(startSetString+1, midSetString))
    const limit = Number(queyRangeString.slice(midSetString+1, endSetString))
    authority.findAll({
        attributes: [ 'authority', 'authName', 'remarks'],
        offset: offset,
        limit: limit,
    })

    .then(result => {
        res.set('Content-Range', `getProducts 0-${result.length}/${result.length}`)
        res.set('Access-Control-Expose-Headers', 'Content-Range')
        res.json({result, resultID: "authority", error: null})
    })
    .catch(err => {
        res.json({error: err}
    )});
})


router.get('/status', (req, res) => {
    status.findAll({
        attributes: [ 'status', 'statusName', 'shortName', 'authority', 'remarks']
    })
    .then(result => {
        // res.json({"data":result, test: "test", error: null})
        // console.log(result.body)
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
    // .then(result => {
    //     console.log(result)

    // })
    .then(result => {
        // res.header("Content-Range", `getProducts 0-4/${result.length}`);
        res.set('Content-Range', `getProducts 0-${result.length}/${result.length}`)
        res.set('Access-Control-Expose-Headers', 'Content-Range')
        // res.send(result);
        res.json({result, resultID: "punchID", error: null})

    })
    .catch(err => {
        res.json({error: null}
    )});
})




module.exports = router;