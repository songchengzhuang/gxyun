var query = require("../../config/sqlConfig");

exports.getUserList = function(req, res) {
  console.log("************* 多 页 面 用 户 列 表 **************");
  // 输出 JSON 格式
  var addSql = "SELECT * FROM study_tbl";
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
