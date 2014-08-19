var db = require('./db.js');

module.exports = function(app){

  app.get('*', function(req,res){

    db.getData(function(rows){
      console.log(rows);
    });

    res.sendFile(__dirname + '/public/index.html');

  });

  app.post('*', function(req,res){

    console.log(req.body);

    var data = req.body;

    db.saveData(data);

    res.send("ok");
  });

};