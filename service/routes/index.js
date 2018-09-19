/**
 * node后台 多页面切换 路由
 */
var express = require("express");
var router = express.Router();

/* 访问node服务路由 */
router.get("/login", function(req, res) {
  res.render("Login/Login"); // 不加.html也可以。
});

router.get("/loginList", function(req, res) {
  res.render("Login/LoginList.html");
});
module.exports = router;
