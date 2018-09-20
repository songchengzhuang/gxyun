var query = require("../../config/sqlConfig");

exports.getLinkData = function(req, res) {
  console.log("************* 查 询 云 链 接 列 表 **************");
  console.log(req.query);
  // 输出 JSON 格式
  var addSql = "SELECT * FROM link_list limit ?,?";
  query(addSql, [0, 6], function(err, rows) {
    if (err) {
      res.json({
        data: "",
        code: 500,
        message: "云链接列表查询失败！",
        success: false
      });
    } else {
      res.json({
        data: rows,
        code: 200,
        message: "云链接列表查询成功！",
        success: true
      });
    }
  });
};
