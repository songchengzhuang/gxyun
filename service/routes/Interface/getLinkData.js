var query = require("../../config/sqlConfig");

exports.getLinkData = function(req, res) {
  console.log("************* 查 询 云 链 接 列 表 **************");
  if (req.query.pageSize - 0 > 100) {
    res.json({
      code: 500,
      message: "最大请求数不能超过100条！",
      success: false
    });
    return false;
  }
  var linkTitleSearch = "%" + req.query.linkSearch + "%";
  // 初始化列表
  if (!req.query.linkSearch && !req.query.linkAuthor) {
    var getLinkSql =
      "SELECT * FROM link_list ORDER BY linkTime*1 DESC limit ?,?";
    var getLinkArr = [req.query.page - 0, req.query.pageSize - 0];
  }
  // 搜索列表
  if (req.query.linkSearch && !req.query.linkAuthor) {
    getLinkSql =
      "SELECT * FROM link_list WHERE linkTitle LIKE ? ORDER BY linkPraise*1 DESC limit ?,?";
    getLinkArr = [linkTitleSearch, req.query.page - 0, req.query.pageSize - 0];
  }
  // 按照作者查询
  if (!req.query.linkSearch && req.query.linkAuthor) {
    getLinkSql = "SELECT * FROM link_list WHERE linkAuthor=? limit ?,?";
    getLinkArr = [
      req.query.linkAuthor,
      req.query.page - 0,
      req.query.pageSize - 0
    ];
  }
  // 在作者里 搜索
  if (req.query.linkSearch && req.query.linkAuthor) {
    getLinkSql =
      "SELECT * FROM link_list WHERE linkTitle LIKE ? AND linkAuthor=? limit ?,?";
    getLinkArr = [
      linkTitleSearch,
      req.query.linkAuthor,
      req.query.page - 0,
      req.query.pageSize - 0
    ];
  }
  // 降序排列
  if (req.query.order) {
    getLinkSql = "SELECT * FROM link_list ORDER BY linkPraise*1 DESC limit ?,?";
    getLinkArr = [req.query.page - 0, req.query.pageSize - 0];
  }

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
