

let express = require('express');
let bodyParser = require('body-parser'); //body의 json을 파싱해주는 모듈
let dateFormat = require('dateformat'); //날짜형식을 원하는 형태로 바꿔주는 모듈
let empty = require('is-empty'); //빈값 체크 모듈 *.주의:0도 empty로 판단함


const stringify = require("json-stringify-pretty-compact"); //json 값을 문자열로 (보기좋게)변환해주는 모듈

let router = express.Router();

const { authority } = require('../models');
const { PunchList } = require('../models');


router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());


router.get('/authority', (req, res) => {
    authority.findAll({
        attributes: [ 'authority', 'authName', 'remarks']
    })
    .then(result => {
        // res.json({"data":result, test: "test", error: null})
        res.json(result)
    })
    .catch(err => {
        console.error(err);
        res.json({error: null}
    )});
})


module.exports = router;