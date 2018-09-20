var query = require("../../config/sqlConfig");

exports.getRegUserList = function(req, res) {
  console.log("************* 查 询 用 户 列 表 **************");
  // 输出 JSON 格式
  var userNameSearch = "%" + req.query.userName + "%";
  var addSql = "SELECT * FROM reg_user WHERE userName LIKE ? limit ?,?";
  var getUserArr = [userNameSearch, req.query.page - 0, req.query.pageSize - 0];
  query(addSql, getUserArr, function(err, rows) {
    if (err) {
      res.json({
        data: "",
        code: 500,
        message: "数据查询失败！",
        success: false
      });
    } else {
      res.json({
        data: rows,
        code: 200,
        message: "数据查询成功！",
        success: true
      });
    }
  });
};
