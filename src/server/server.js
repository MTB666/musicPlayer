const express = require("express");    //引入express模块
const app=express(); 
const fs=require("fs");              //引入fs模块
// const url=require("url");

var bodyParser = require('body-parser')               //实例化express

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(8000)    // 指定端口;
app.get('/',function(req, res){      //匹配主页的get请求
    res.send("首页")
})
// 验证码
app.post('/Verify',function(req,res){
    res.send({"YZM":123456});
})

app.get('/lists',function(req,res){
    fs.readFile('../../static/hotDatas.json','utf-8',(err,req)=>{
        if(err){
            res.send(err)
        }else if(req == ''){
            res.send('数据为空')
        }else{
            res.send(JSON.parse(req))
        }
    })
})

app.get('/detail',function(req,res){
    fs.readFile('../../static/songList.json','utf-8',(err,req)=>{
        if(err){
            res.send(err)
        }else if(req == ''){
            res.send('数据为空')
        }else{
            res.send(JSON.parse(req))
        }
    })
})

app.get('/singer',function(req,res){
    fs.readFile('../../static/singer.json','utf-8',(err,req)=>{
        if(err){
            res.send(err)
        }else if(req == ''){
            res.send('数据为空')
        }else{
            res.send(JSON.parse(req))
        }
    })
})

// 登录
app.post('/login',function(req,res){
    if(req.body.userName === '' || req.body.password === ''){
        res.send({
            'code':1,
            'msg':'用户名或密码不能为空'
        })
    }else if(req.body.userName !== 'admin' || req.body.password !== '123456'){
        res.send({
            'code':2,
            'msg':'用户名或密码错误'
        })
    }else if(req.body.userName === 'admin' || req.body.password === '123456'){
        res.send({
            'code':3,
            'msg':'登录成功'
        })
    }
})
// 注册
app.post('/enroll',function(req,res){
    if(req.body.userName === '' || req.body.password === ''){
        res.send({
            'code':1,
            'msg':'用户名或密码不能为空'
        })
    }else{
        if(req.body.password !== req.body.passwords){
            res.send({
                'code':2,
                'msg':'两次输入密码不一致'
            })
        }else{
            res.send({
                'code':0,
                'msg':"注册成功"
            })
        }
    }
})