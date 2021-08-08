const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const router = require("./routes/diary"); //라우터 모듈 등록 (라우터 모듈안에 다이어리 스키마 모듈을 불러오고 있으므로 아래와 같이 라우터만!

var app = express();
app
    .use(express.static(path.join(__dirname, 'public')))
    .use('/api/diary', router)
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .listen(PORT, () => console.log(`Listening on ${PORT}`))
