var query = require("../../config/sqlConfig");

exports.postRegUser = function(req, res) {
  console.log("************* 用 户 注 册 **************");
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
  var seekName = "'" + req.body.userName + "'";
  var seekNmeSql = "SELECT * FROM reg_user WHERE userName=" + seekName;

  query(seekNmeSql, function(err, rows) {
    if (err) {
      res.json({
        data: err,
        code: 500,
        message: "服务器脑子进水啦！",
        success: false
      });
    } else {
      if (rows && rows.length > 0) {
        res.json({
          code: 200,
          message: "该用户名已存在！",
          success: false
        });
        return false;
      } else {
        addUser();
      }
    }
  });
  //插入数据
  function addUser() {
    var regTime = Date.now();
    var addSql =
      "INSERT INTO reg_user(userName,userAge,userSex,userPwa,regTime) VALUES(?,?,?,?,?)";
    var addSqlParArr = [
      req.body.userName,
      req.body.userAge - 0,
      req.body.userSex,
      req.body.userPwa,
      regTime
    ];
    query(addSql, addSqlParArr, function(err) {
      if (err) {
        res.json({
          data: err,
          code: 500,
          message: "数据添加失败！",
          success: false
        });
      } else {
        res.json({
          code: 200,
          message: "数据添加成功！",
          success: true
        });
      }
    });
  }
};

// 后台校验
function regUserCheckData(req) {
  if (!req.body.userName) {
    console.log("请填写用户名！");
    return false;
  }
  if (!req.body.userAge) {
    console.log("请填写年龄！");
    return false;
  }
  if (isNaN(req.body.userAge)) {
    console.log("请填写数字年龄！");
    return false;
  }
  if (req.body.userAge < 3 || req.body.userAge > 100) {
    console.log("请填写3-100区间的年龄！");
    return false;
  }
  if (!req.body.userSex) {
    console.log("请选择性别！");
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
