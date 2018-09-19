var query = require("../../config/sqlConfig");

exports.getRegUserList = function(req, res) {
  // 输出 JSON 格式
  var addSql = "SELECT * FROM reg_user";
  query(addSql, function(err, rows) {
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
