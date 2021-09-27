

let express = require('express');
let bodyParser = require('body-parser'); //body의 json을 파싱해주는 모듈
let dateFormat = require('dateformat'); //날짜형식을 원하는 형태로 바꿔주는 모듈
let empty = require('is-empty'); //빈값 체크 모듈 *.주의:0도 empty로 판단함


const bcrypt = require('bcrypt');
const saltRounds = 10;


const {User, Category} = require('../models');




const stringify = require("json-stringify-pretty-compact"); //json 값을 문자열로 (보기좋게)변환해주는 모듈

let router = express.Router();

const { authority } = require('../models');
const { category } = require('../models');
const { department } = require('../models');
const { systems } = require('../models');
const { subsystem } = require('../models');
const { discipline } = require('../models');
const { punchlist } = require('../models');

const { Op, where } = require("sequelize");

var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'127.0.0.1',
    user: 'root',
    password:'root',
    database: 'punch',
});




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

router.get('/department', (req, res) => {
    department.findAll({
        attributes: [ 'department', 'deptName', 'shortName']
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

router.get('/category', (req, res) => {
    category.findAll({
        attributes: [ 'category', 'categoryName', 'stage']
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

router.get('/systems', (req, res) => {
    systems.findAll({
        attributes: [ 'systemID', 'systemName']
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

router.get('/subsystem', (req, res) => {
    subsystem.findAll({
        attributes: [ 'subsystem', 'subsystemName', ]
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

router.get('/discipline', (req, res) => {
    discipline.findAll({
        attributes: [ 'discipline', 'disciplineName', 'shortName']
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


// const sql = 'SELECT * FROM punch.punchlist'
const sql = 'SELECT * FROM punch.punchlist as A , punch.category as B, punch.discipline as C, punch.systems as D, punch.subsystem as E'
// 'SELECT punch.punchlist.issuedBy, punch.punchlist.punchID, punch.punchlist.category,  punch.punchlist.status, punch.punchlist.discipline,punch.punchlist.unit,punch.punchlist.area,punch.punchlist.systemID,punch.punchlist.categoryName,punch.punchlist.disciplineName,punch.punchlist.shortName,punch.punchlist.systemName FROM punch.punchlist as A , punch.category as B, punch.discipline as C, punch.systems as D where A.category = B.category and A.discipline = C.discipline and A.systemID = D.systemID'

// connection.connect();

// connection.query('SELECT * FROM punch.punchlist', function(error,results){
//     if (error){
//         console.log(error);
//     }
//     console.log(results);
// });
// connection.end();

router.get('/sqltest', (req, res) => {
    connection.query(sql + ' where A.category = B.category and A.discipline = C.discipline and A.systemID = D.systemID and A.subsystemName = E.subsystemName', function(error,results){
        if (error){
            console.log(error);
        }
        res.json(results);
    });
    
})



// router.get('/sqlall', (req, res) => {
    
//     punchlist.findAll({
//         attributes: ['issuedBy', `punchID`, `category`,  `status`, 'discipline','unit','area','systemID','categoryName','disciplineName','shortName','systemName']
//     })
    
//     .then(result => {
//         // res.json({"data":result, test: "test", error: null})
//         console.log(result.body)
//         res.json(result)
//     })
//     .catch(err => {
//         console.error(err);
//         res.json({error: null}
//     )});
// })
router.get('/sqlall', (req, res) => {
    
    connection.query(sql+' where A.category = B.category and A.discipline = C.discipline and A.systemID = D.systemID and A.subsystem = E.subsystem', function(error,results){
        if (error){
            console.log(error);
        }
        res.json(results);
    });
})

// router.post('/sqlqc', (req, res) => {
//     let userID = req.body.userID;
//     punchlist.findAll({
//         where:{issuedBy:userID},
        
//         attributes: ['issuedBy', `punchID`, `category`,  `status`, 'discipline','unit','area','systemID']
//     })
    
//     .then(result => {
//         // res.json({"data":result, test: "test", error: null})
//         console.log(result.body)
//         res.json(result)
//     })
//     .catch(err => {
//         console.error(err);
//         res.json({error: null}
//     )});
// })

router.post('/sqlqc', (req, res) => {
    let userID = req.body.userID;
    connection.query(sql+' where A.issuedBy=? and A.category = B.category and A.discipline = C.discipline and A.systemID = D.systemID and A.subsystem = E.subsystem',[userID], function(error,results){
        if (error){
            console.log(error);
        }
        res.json(results);
    });
})

// router.post('/sqlassi', (req, res) => {
    
//     let userID = req.body.userID;
//     // let category = req.body.category;
// // punchList.query('SELECT * FROM punchlist as A , category as B, discipline as C, systems as D',
// // 'where A.category = B.category',
// // 'and A.discipline = C.discipline',
// // 'and A.system = D.systems')
//     punchlist.findAll({
//         // include: [
//         //     {
//         //       model: category,
          
//         //     //   attributes: ['category','categoryName'],
//         //     }
//         //  ],
        
//         where:{
//             [Op.or]:[

//             {issuedBy:userID},

//             {status:{[Op.or]:[2,5]}}]
//             ,
//             // category:category['category'],
//             // discipline:discipline['discipline'],
//             // system:systems['systems'],
//         },
            
//         attributes: [ 'issuedBy', `status`, `punchID`, `category`, 'discipline','unit','area','systemID']
//     })
    
//     .then(result => {
//         // res.json({"data":result, test: "test", error: null})
//         console.log(result.body)
//         res.json(result)
//     })
//     .catch(err => {
//         console.error(err);
//         res.json({error: null}
//     )});
// })

router.post('/sqlassi', (req, res) => {
    
    let userID = req.body.userID;
    connection.query(sql+' where ((status = ? or status = ?) or A.issuedBy = ?) and A.category = B.category and A.discipline = C.discipline and A.systemID = D.systemID and A.subsystem = E.subsystem',['2','5',userID], function(error,results){
        if (error){
            console.log(error);
        }
        res.json(results);
    });
})

router.post('/complete', async (req, res, next) => {
  let userID = req.body.userID;
  let projectID = req.body.projectID;
  let punchID = req.body.punchID;
  let completedDate = req.body.completedDate;
  if (!empty(projectID) && !empty(punchID)) {
    punchlist.update({completedDate: completedDate,completedBy:userID,status:'3'}, {where: {projectID: projectID, punchID: punchID}})
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
            .then(results => {
                bcrypt.compare(password, results.password, (error, result) => {
                    if (result) {
                        req.session.loginData = {userID: userID, password: password};
                        req.session.save(error => {
                            if (error) console.log(error)
                        })
                        res.send(results);
                        
                        // res.json(result);
                    } else {
                        // res.json(result);
                        res.json({result: false, error: null, data: null});
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
    let userName = req.body.userName;
    let email = req.body.email;
    const company = req.body.company;
    const authority = req.body.authority;
    const personalID = req.body.personalID;
    const department = req.body.department;
    const active = req.body.active;
    if (!empty(userID) && !empty(password)) {
        bcrypt.hash(password, saltRounds, (error, hash) => {
            password = hash;
            User.create({
                userID: userID, 
                password: password,
                userName:userName,
                email:email,
                company:company,
                authority:authority,
                personalID:personalID,
                department:department,
                active:active,
            })
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
        bcrypt.hash(password, saltRounds, (error, hash) => {
            password = hash;
            User.update({password: password}, {where: {userID: userID}})
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



module.exports = router;