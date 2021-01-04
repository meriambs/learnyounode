 const fs = require('fs')  
var file = process.argv[1];
  fs.readFile(process.argv[2] , 'utf-8' ,function(err,data){
  if (err) throw err;
   var t=[];
      t = data.split('\n');
      console.log( t.length -1);
   });
  
      


