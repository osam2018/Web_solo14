var express = require('express')
var cors = require('cors')
var app = express();
app.use(cors())
app.use(express.static("data"))
const data = require('../data') 
app.get("/api/shareList", (req,res)=>{
    res.send(data.shareList)
})

app.get("/api/scrapList", (req,res)=>{
    res.send(data.scrapList)
}) 
app.listen(12010, function(){
    console.log("12010 서버가 시작되었습니다. ")
})