var query = require("../../config/sqlConfig");

exports.getLinkClass = function(req, res) {
  console.log("************* 链 接 类 型 **************");
  // 输出 JSON 格式
  var addSql = "SELECT * FROM link_class ORDER BY className ASC";
  query(addSql, function(err, rows) {
    if (err) {
      res.json({
        data: "",
        code: 500,
        message: "链接查询失败！",
        success: false
      });
    } else {
      res.json({
        data: rows,
        code: 200,
        message: "链接查询成功！",
        success: true
      });
    }
  });
};
