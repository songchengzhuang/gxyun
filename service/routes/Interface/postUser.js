var query = require("../../config/sqlConfig");

exports.postUser = function(req, res) {
  console.log("************* 多页面接口案例 **************");
  // 先校验
  // 输出 JSON 格式
  var response = {
    name: req.body.name,
    age: req.body.age
  };
  var addSql = "INSERT INTO study_tbl(name,age) VALUES(?,?)";
  var addSqlParArr = [req.body.name, req.body.age];
  query(addSql, addSqlParArr, function(err) {
    if (err) {
      res.json({
        data: "",
        code: 500,
        message: "数据添加失败！",
        success: false
      });
    } else {
      res.json({
        data: response,
        code: 200,
        message: "数据添加成功！",
        success: true
      });
    }
  });
};
