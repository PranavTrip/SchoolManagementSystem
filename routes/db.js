var mysql = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Pranavtri@00',
  database : 'project',
  multipleStatements: true

});

connection.connect((err)=>{
  if(!err)
  {
    console.log("connected");
  }else{
    console.log("Connection Failed");
  }

});


module.exports = connection;