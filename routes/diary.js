let express = require('express');
let data = require('../model/diary'); //다이어리 모델 스키마를 가져온다
let bodyParser = require('body-parser'); //body의 json을 파싱해주는 모듈
let dateFormat = require('dateformat'); //날짜형식을 원하는 형태로 바꿔주는 모듈
let empty = require('is-empty'); //빈값 체크 모듈 *.주의:0도 empty로 판단함

const bcrypt = require('bcrypt');
const saltRounds = 10;

const stringify = require("json-stringify-pretty-compact"); //json 값을 문자열로 (보기좋게)변환해주는 모듈

let router = express.Router();

const {Test, User} = require('../models');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.post('/login', async (req, res, next) => {
    let id = req.body.id;
    let pw = req.body.pw;
    if (!empty(id) && !empty(pw)) {
        User.findOne({where: {id: id}})
            .then(result => {
                bcrypt.compare(pw, result.pw, (error, result) => {
                    if (result) {
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
    let id = req.body.id;
    let pw = req.body.pw;
    if (!empty(id) && !empty(pw)) {
        bcrypt.hash(pw, saltRounds, (error, hash) => {
            pw = hash;
            User.create({id: id, pw: pw})
                .then(result => {
                    res.json(result);
                })
                .catch(err => {
                    console.error(err);
                });
        })
    } else {
        res.json({result: false, error: null, data: null});
    }
});

router.post('/register2', async (req, res, next) => {
    let id = req.body.id;
    let pw = req.body.pw;
    if (!empty(id) && !empty(pw)) {
        User.create({id: id, pw: pw})
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

router.post('/update', async (req, res, next) => {
    let id = req.body.id;
    let pw = req.body.pw;
    if (!empty(id) && !empty(pw)) {
        User.update({pw: pw}, {where: {id: id}})
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
    let id = req.body.id;
    let pw = req.body.pw;
    if (!empty(id) && !empty(pw)) {
        User.destroy({where: {id: id}})
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

router.get('/test', async (req, res, next) => {
    try {
        const users = await Test.findAll();
        // res.render('userManager', {users});
        res.json({result: null, error: null, data: users});
    } catch (error) {
        console.error(error);
        next(error);
    }
});

//전체 데이터를 불러와서 항목별로 보기 : 실제 호출주소 http://~~/api/diary/
router.get('/', function (req, res) {
    data.find(function (error, dairy) {
        var resultData = "";
        //에러가 없고, 결과값이 있다면
        if (!error && !empty(dairy)) {
            resultData = dairy;
            // resultData = stringify(dairy);
        }
        res.json({result: empty(error), error: error, data: resultData});
    });
});

//id 기반으로 조회하여 데이터를 1건 불러오기 : 실제 호출주소 http://~~/api/diary/id값
router.get('/:id', function (req, res) {
    data.findOne({_id: req.params.id}, function (error, dairy) {
        var resultData = "";
        if (!error && !empty(dairy)) {
            resultData = dairy;
        }
        res.json({result: empty(error), error: error, data: resultData});
    });
});

//데이터를 추가하기 : 실제 호출주소 http://~~/api/diary/ + body데이터
router.post('/', function (req, res) {
    var title = req.body.title;
    var content = req.body.content;
    if (!empty(title) && !empty(content)) {
        var diaryData = new data();
        diaryData.title = title;
        diaryData.content = content;
        var now = new Date();
        diaryData.date = dateFormat(now, "yyyymmdd");
        diaryData.imgList = "";
        //콘솔창을 통해서 로그를 확인해볼 수 있다
        console.log("dairy content diaryData::" + diaryData);
        diaryData.save(function (error, resultData) {
            res.json({result: empty(error), error: error, data: resultData});
        });
    } else {
        res.json({result: false, error: null, data: null});
    }
});

//id로 데이터를 찾아서 수정 : 실제 호출주소 http://~~/api/diary/ + body데이터
router.put('/:id', function (req, res) {
    var title = req.body.title;
    var content = req.body.content;
    const id = req.params.id;
    if (!empty(id)) {
        data.findOneAndUpdate({_id: id}, {
            $set: {
                title: title,
                content: content
            }
        }, {returnNewDocument: true}, (error, doc) => {
            res.json({result: !error, error: error});
        });
    } else {
        res.json({result: false, error: null, data: null});
    }
});

//id로 찾아서 삭제 : 실제 호출주소 http://~~/api/diary/id값
router.delete('/:id', function (req, res) {
    const id = req.params.id;
    if (!empty(id)) {
        data.remove({_id: id}, function (error, resultData) {
            res.json({result: empty(error), error: error, data: resultData});
        });
    } else {
        res.json({result: false, error: null, data: null});
    }
});
module.exports = router;