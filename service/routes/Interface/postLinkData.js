var query = require("../../config/sqlConfig");

exports.postLinkData = function(req, res) {
  console.log("************* 分 享 链 接 **************");
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
  var seekId = "'" + req.body.userId + "'";
  var seekName = "'" + req.body.linkAuthor + "'";
  var seekNmeSql =
    "SELECT * FROM reg_user WHERE userId=" +
    seekId +
    "AND userName=" +
    seekName;

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
        addLink();
      } else {
        res.json({
          code: 200,
          message: "用户信息不符合，请重新登录！",
          success: false
        });
      }
    }
  });
  //插入数据
  function addLink() {
    var addTime = Date.now();
    var addSql =
      "INSERT INTO link_list(linkTitle, linkUrl,	linkPwa, linkClass,	userId,	linkAuthor,	linkPraise,	linkReport,	linkShow,	linkTime) VALUES(?,?,?,?,?,?,?,?,?,?)";
    var addSqlParArr = [
      req.body.linkTitle,
      req.body.linkUrl,
      req.body.linkPwa,
      req.body.linkClass,
      req.body.userId,
      req.body.linkAuthor,
      0,
      0,
      1,
      addTime
    ];
    query(addSql, addSqlParArr, function(err) {
      if (err) {
        res.json({
          data: err,
          code: 500,
          message: "云链接添加失败！",
          success: false
        });
      } else {
        res.json({
          code: 200,
          message: "云链接添加成功！",
          success: true
        });
      }
    });
  }
};

// 后台校验
function regUserCheckData(req) {
  if (!req.body.linkTitle) {
    console.log("请填写云标题");
    return false;
  }
  if (!req.body.linkUrl) {
    console.log("请填写云链接");
    return false;
  }
  if (req.body.linkClass.length < 1) {
    console.log("请选择类别");
    return false;
  }
  return true;
}
