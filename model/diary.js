const mongoose = require('mongoose');

//DB 연결
let url = "mongodb+srv://root:root@quiet-river-08463.witrh.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(url, {dbName: 'test', useNewUrlParser: true, useUnifiedTopology: true}, function (err) {
    console.log('err ::' + err);
});

//모델 설정
var Schema = mongoose.Schema;

//{ date : "2020131", title : "test2", imgList : "", content : "아아2" }
var test2Schema = new Schema({test3: String});
module.exports = mongoose.model('test2', test2Schema, 'test2');
