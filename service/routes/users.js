/**
 * node后台 接口路径 路由
 */
var express = require("express");
var router = express.Router();
//引进处理方法
var postRegUser = require("./Interface/postRegUser");
var getRegUserList = require("./Interface/getRegUserList");
//
var postUser = require("./Interface/postUser");
var getUserList = require("./Interface/getUserList");
/* 分享云接口 */
router.post("/postRegUser", postRegUser.postRegUser); // 注册用户
router.get("/getRegUserList", getRegUserList.getRegUserList); // 查询注册用户

/* 多页面接口案例 */
router.post("/postUser", postUser.postUser); // 传入用户
router.get("/getUserList", getUserList.getUserList); // 查询用户

module.exports = router;
