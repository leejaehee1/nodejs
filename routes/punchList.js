
let express = require('express');
let bodyParser = require('body-parser'); //body의 json을 파싱해주는 모듈
let dateFormat = require('dateformat'); //날짜형식을 원하는 형태로 바꿔주는 모듈
let empty = require('is-empty'); //빈값 체크 모듈 *.주의:0도 empty로 판단함

const stringify = require("json-stringify-pretty-compact"); //json 값을 문자열로 (보기좋게)변환해주는 모듈

let router = express.Router();

// testimport DB // king
const { project } = require('../models');
const { status } = require('../models');
const { authority } = require('../models');
const { discipline } = require('../models');
const { category } = require('../models');
const { department } = require('../models');
const { systems } = require('../models');
const { subsystem } = require('../models');
const { users } = require('../models');
const { unit } = require('../models');
const { area } = require('../models');
const { drawing } = require('../models');
const { vwPunchHis } = require('../models');
const { progress } = require('../models');


const { PunchList } = require('../models');

// file upload
const multer = require("multer");
let upload = multer({
    dest: "upload/"
})

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());


router.get('/project', (req, res) => {
    const queyRangeString = req.query.range
    const startSetString = queyRangeString.indexOf('[')
    const midSetString = queyRangeString.indexOf(',')
    const endSetString = queyRangeString.indexOf(']')
    const offset = Number(queyRangeString.slice(startSetString+1, midSetString))
    const limit = Number(queyRangeString.slice(midSetString+1, endSetString))
    project.findAll({
        attributes: [ 'projectID', 'projectName', 'startDate', 'endDate', 'activated'],
        offset: offset,
        limit: limit,
    })

    .then(result => {
        res.set('Content-Range', `getProducts 0-${result.length}/${result.length}`)
        res.set('Access-Control-Expose-Headers', 'Content-Range')
        res.json({result, resultID: "projectID", error: null})
    })
    .catch(err => {
        res.json({error: err}
    )});
})



router.get('/status', (req, res) => {
    const queyRangeString = req.query.range
    const startSetString = queyRangeString.indexOf('[')
    const midSetString = queyRangeString.indexOf(',')
    const endSetString = queyRangeString.indexOf(']')
    const offset = Number(queyRangeString.slice(startSetString+1, midSetString))
    const limit = Number(queyRangeString.slice(midSetString+1, endSetString))
    status.findAll({
        attributes: [ 'status', 'statusName', 'shortName', 'authority', 'remarks'],
        offset: offset,
        limit: limit,
    })

    .then(result => {
        res.set('Content-Range', `getProducts 0-${result.length}/${result.length}`)
        res.set('Access-Control-Expose-Headers', 'Content-Range')
        res.json({result, resultID: "status", error: null})
    })
    .catch(err => {
        res.json({error: err}
    )});
})

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


router.get('/discipline', (req, res) => {
    const queyRangeString = req.query.range
    const startSetString = queyRangeString.indexOf('[')
    const midSetString = queyRangeString.indexOf(',')
    const endSetString = queyRangeString.indexOf(']')
    const offset = Number(queyRangeString.slice(startSetString+1, midSetString))
    const limit = Number(queyRangeString.slice(midSetString+1, endSetString))
    discipline.findAll({
        attributes: [ 'discipline', 'disciplineName', 'shortName'],
        offset: offset,
        limit: limit,
    })

    .then(result => {
        res.set('Content-Range', `getProducts 0-${result.length}/${result.length}`)
        res.set('Access-Control-Expose-Headers', 'Content-Range')
        res.json({result, resultID: "discipline", error: null})
    })
    .catch(err => {
        res.json({error: err}
    )});
})


router.get('/category', (req, res) => {
    const queyRangeString = req.query.range
    const startSetString = queyRangeString.indexOf('[')
    const midSetString = queyRangeString.indexOf(',')
    const endSetString = queyRangeString.indexOf(']')
    const offset = Number(queyRangeString.slice(startSetString+1, midSetString))
    const limit = Number(queyRangeString.slice(midSetString+1, endSetString))
    category.findAll({
        attributes: [ 'category', 'categoryName', 'stage'],
        offset: offset,
        limit: limit,
    })

    .then(result => {
        res.set('Content-Range', `getProducts 0-${result.length}/${result.length}`)
        res.set('Access-Control-Expose-Headers', 'Content-Range')
        res.json({result, resultID: "category", error: null})
    })
    .catch(err => {
        res.json({error: err}
    )});
})


router.get('/department', (req, res) => {
    const queyRangeString = req.query.range
    const startSetString = queyRangeString.indexOf('[')
    const midSetString = queyRangeString.indexOf(',')
    const endSetString = queyRangeString.indexOf(']')
    const offset = Number(queyRangeString.slice(startSetString+1, midSetString))
    const limit = Number(queyRangeString.slice(midSetString+1, endSetString))
    department.findAll({
        attributes: [ 'department', 'deptName', 'shortName'],
        // offset: offset,
        // limit: limit,
    })

    .then(result => {
        res.set('Content-Range', `getProducts 0-1000/1000`)
        res.set('Access-Control-Expose-Headers', 'Content-Range')
        res.json({result, resultID: "department", error: null})
    })
    .catch(err => {
        res.json({error: err}
    )});
})


router.get('/systems', (req, res) => {
    const queyRangeString = req.query.range
    const startSetString = queyRangeString.indexOf('[')
    const midSetString = queyRangeString.indexOf(',')
    const endSetString = queyRangeString.indexOf(']')
    const offset = Number(queyRangeString.slice(startSetString+1, midSetString))
    const limit = Number(queyRangeString.slice(midSetString+1, endSetString))
    systems.findAll({
        attributes: [ 'systemID', 'systemName'],
        // offset: 1000,
        // limit: 1000,
    })

    .then(result => {
        res.set('Content-Range', `getProducts 0-1000/1000`)
        res.set('Access-Control-Expose-Headers', 'Content-Range')
        res.json({result, resultID: "systemID", error: null})
    })
    .catch(err => {
        res.json({error: err}
    )});
})


router.get('/subsystem', (req, res) => {
    const queyRangeString = req.query.range
    const startSetString = queyRangeString.indexOf('[')
    const midSetString = queyRangeString.indexOf(',')
    const endSetString = queyRangeString.indexOf(']')
    const offset = Number(queyRangeString.slice(startSetString+1, midSetString))
    const limit = Number(queyRangeString.slice(midSetString+1, endSetString))
    subsystem.findAll({
        attributes: [ 'subsystem', 'subsystemName'],
        // offset: offset,
        // limit: limit,
    })

    .then(result => {
        res.set('Content-Range', `getProducts 0-1000/1000`)
        res.set('Access-Control-Expose-Headers', 'Content-Range')
        res.json({result, resultID: "subsystem", error: null})
    })
    .catch(err => {
        res.json({error: err}
    )});
})

router.get('/progress', (req, res) => {
    const queyRangeString = req.query.range
    const startSetString = queyRangeString.indexOf('[')
    const midSetString = queyRangeString.indexOf(',')
    const endSetString = queyRangeString.indexOf(']')
    const offset = Number(queyRangeString.slice(startSetString+1, midSetString))
    const limit = Number(queyRangeString.slice(midSetString+1, endSetString))
    progress.findAll({
        attributes: [ 'projectID', 
                        'predDate',
                        'RemainYday',
                        'IssuedYday',
                        'IssuedToday',
                        'IssuedTotal',
                        'ClosedYday',
                        'ClosedToday',
                        'ClosedTotal',
                        'RemainToday',
                        'Pending',
                        'trendIssued',
                        'trendCompleted',
                        'trendClosed',
                        'predict'



                    ],
        // offset: offset,
        // limit: limit,
    })

    .then(result => {
        res.set('Content-Range', `getProducts 0-1000/1000`)
        res.set('Access-Control-Expose-Headers')
        res.json({result, resultID: "progress", error: null})
    })
    .catch(err => {
        res.json({error: err}
    )});
})


router.get('/usercode', (req, res) => {
    const queyRangeString = req.query.range
    const startSetString = queyRangeString.indexOf('[')
    const midSetString = queyRangeString.indexOf(',')
    const endSetString = queyRangeString.indexOf(']')
    const offset = Number(queyRangeString.slice(startSetString+1, midSetString))
    const limit = Number(queyRangeString.slice(midSetString+1, endSetString))
    users.findAll({
        attributes: [ 'userID', 'password', 'userName', 'email', 'company', 'authority', 'personalID', 'department', 'active'],
        // offset: offset,
        // limit: limit,
    })
    .then(result => {
        res.set('Content-Range', `getProducts 0-1000/1000`)
        res.set('Access-Control-Expose-Headers', 'Content-Range')
        res.json({result, resultID: "userID", error: null})
    })
    .catch(err => {
        res.json({error: err}
    )});
})


router.get('/unit', (req, res) => {
    const queyRangeString = req.query.range
    const startSetString = queyRangeString.indexOf('[')
    const midSetString = queyRangeString.indexOf(',')
    const endSetString = queyRangeString.indexOf(']')
    const offset = Number(queyRangeString.slice(startSetString+1, midSetString))
    const limit = Number(queyRangeString.slice(midSetString+1, endSetString))
    unit.findAll({
        attributes: [ 'unit', 'unitName'],
        // offset: offset,
        // limit: limit,
    })
    .then(result => {
        res.set('Content-Range', `getProducts 0-1000/1000`)
        res.set('Access-Control-Expose-Headers', 'Content-Range')
        res.json({result, resultID: "unit", error: null})
    })
    .catch(err => {
        res.json({error: err}
    )});
})


router.get('/area', (req, res) => {
    const queyRangeString = req.query.range
    const startSetString = queyRangeString.indexOf('[')
    const midSetString = queyRangeString.indexOf(',')
    const endSetString = queyRangeString.indexOf(']')
    const offset = Number(queyRangeString.slice(startSetString+1, midSetString))
    const limit = Number(queyRangeString.slice(midSetString+1, endSetString))
    area.findAll({
        attributes: [ 'area', 'areaName'],
        offset: offset,
        limit: limit,
    })
    .then(result => {
        res.set('Content-Range', `getProducts 0-${result.length}/${result.length}`)
        res.set('Access-Control-Expose-Headers', 'Content-Range')
        res.json({result, resultID: "area", error: null})
    })
    .catch(err => {
        res.json({error: err}
    )});
})


router.get('/drawing', (req, res) => {
    const queyRangeString = req.query.range
    const startSetString = queyRangeString.indexOf('[')
    const midSetString = queyRangeString.indexOf(',')
    const endSetString = queyRangeString.indexOf(']')
    const offset = Number(queyRangeString.slice(startSetString+1, midSetString))
    const limit = Number(queyRangeString.slice(midSetString+1, endSetString))
    drawing.findAll({
        attributes: [ 'projectID', 'system', 'subsystem', 'seq', 'drawingNo', 'uploadDate', 'imagePath', 'xSize', 'ySize'],
        // offset: offset,
        // limit: limit,
    })
    .then(result => {
        res.set('Content-Range', `getProducts 0-${result.length}/${result.length}`)
        res.set('Access-Control-Expose-Headers', 'Content-Range')
        res.json({result, resultID: "drawingNo", error: null})
    })
    .catch(err => {
        res.json({error: err}
    )});
})

router.put('/list/:id', (req, res) => {
    const targetID = req.params.id // url을 넣는다.
    const cateData = req.body.status
    PunchList.update(
        { status: cateData },
        { where: {punchID: targetID} }
    ).then(res.json({result:"succ!"}))
})

router.post('/list/create', (req, res) => {
    const allData = req.body['data'];
    const targetColumn = req.body['colDefs'];
    console.log(allData)
    console.log(targetColumn)
    PunchList.bulkCreate(
        allData,
    //     [{projectID: "aaaaa", 
    // punchID: "vvvvv"},{projectID: "aaaad", 
    // punchID: "vvvvd"}  ],
        {
            fields: targetColumn
            // fields: ["projectID", "punchID"]
        }).then(  res.json({result:"succ!"}))
        .catch((e)=> (console.log(e)))

})

router.get('/vwpunchhis', (req, res) => {
    const queyRangeString = req.query.range
    const startSetString = queyRangeString.indexOf('[')
    const midSetString = queyRangeString.indexOf(',')
    const endSetString = queyRangeString.indexOf(']')
    const offset = Number(queyRangeString.slice(startSetString+1, midSetString))
    const limit = Number(queyRangeString.slice(midSetString+1, endSetString))
    vwPunchHis.findAll({
        attributes: [ 
                        'projectID', 
                        'punchID', 
                        'status', 
                        'statusName', 
                        'createdBy', 
                        'createdDate', 
                        'description'
                    ],
        offset: offset,
        limit: limit,
    })
    .then(result => {
        console.log(1)
        // res.set('Content-Range', `getProducts 0-${result.length}/${result.length}`)
        // res.set('Access-Control-Expose-Headers', 'Content-Range')
        // res.json({result, resultID: "vwPunchHis", error: null})
    })
    .catch(err => {
        res.json({error: err}
    )});
})

// router.get('/vwpunchhis', (req, res) => {
//     console.log('ㅁㅁ들어옴aa')
//     vwpunchhis.findAll(
//         {
//           attributes: [ 
//                         'projectID', 
//                         'punchID', 
//                         'status', 
//                         'statusName', 
//                         'createdBy', 
//                         'createdDate', 
//                         'description'
//                     ],
//         }
//     )
//     .then(result => {
//         // res.set('Content-Range', `getProducts 0-${result.length}/${result.length}`)
//         // res.set('Access-Control-Expose-Headers', 'Content-Range')
//         console.log(result);
//         // res.json({result, resultID: "vwpunchhis", error: null})
//         res.json({noterror: 'not ero'});
//     })
//     .catch(err => {
//         // res.json({error: err})
//         console.log('errarea');
//         res.json({error: 'errrrrrrr'});
//     });
// })

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


router.post('/uploadfile', upload.single("pdffile"), function(req, res, next) {
    let file = req.file

    // 4. 파일 정보
    let result = {
        originalName : file.originalname,
        size : file.size,
    }

    res.json(result);
})




module.exports = router;