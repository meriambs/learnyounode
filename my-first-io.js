 const fs = require('fs')  

   var br=fs.readFileSync(process.argv[2] , 'utf-8');
   var t=[];
      t = br.split('\n');
      


console.log( t.length -1);