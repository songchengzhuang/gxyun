var query = require("../../config/sqlConfig");
var md5 = require("md5-node"); // md5加密

exports.postLogin = function(req, res) {
  console.log("************* 用 户 登 录 **************");
  // 先校验
  var isAudit = regUserCheckData(req);
  if (!isAudit) {
    res.json({
      code: 500,
      message: "请检查数据类型！",
      success: false
    });
    return false;
  }
  //查询
  var seekName = req.body.userName;
  var seekNmeSql = "SELECT * FROM reg_user WHERE userName=?";

  query(seekNmeSql, [seekName], function(err, rows) {
    if (err) {
      res.json({
        data: err,
        code: 500,
        message: "服务器脑子进水啦！",
        success: false
      });
    } else {
      if (rows && rows.length > 0) {
        if (
          rows[0].userName === req.body.userName &&
          rows[0].userPwa === md5(req.body.userPwa)
        ) {
          res.json({
            data: rows[0],
            code: 200,
            message: "登录成功！",
            success: true
          });
          return false;
        } else {
          res.json({
            code: 200,
            message: "请检查密码是否正确！",
            success: false
          });
          return false;
        }
      } else {
        res.json({
          code: 200,
          message: "该用户不存在！",
          success: false
        });
      }
    }
  });
};

// 后台校验
function regUserCheckData(req) {
  if (!req.body.userName) {
    console.log("请填写用户名！");
    return false;
  }
  if (!req.body.userPwa) {
    console.log("请填写的密码！");
    return false;
  }
  if (!/^[0-9a-zA-z]+$/.test(req.body.userPwa)) {
    console.log("密码由数字和字母组成！");
    return false;
  }
  return true;
}
