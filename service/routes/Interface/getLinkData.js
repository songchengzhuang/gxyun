var query = require("../../config/sqlConfig");

exports.getLinkData = function(req, res) {
  console.log("************* 查 询 云 链 接 列 表 **************");
  // 输出 JSON 格式
  var linkTitleSearch = "%" + req.query.linkSearch + "%";
  var getLinkSql =
    "SELECT * FROM link_list WHERE linkTitle LIKE ? AND linkAuthor=? ORDER BY linkPraise DESC limit ?,?";
  var getLinkArr = [
    linkTitleSearch,
    req.query.linkAuthor,
    req.query.page - 0,
    req.query.pageSize - 0
  ];
  query(getLinkSql, getLinkArr, function(err, rows) {
    if (err) {
      res.json({
        data: err,
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
