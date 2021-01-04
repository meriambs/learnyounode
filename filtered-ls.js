// const fs = require('fs')  
// fs.readdir(process.argv[2], function(err, list){
//     if (err) throw err;
//     var text = process.argv[3];
//     var anso = list.filter(function(el){
//         var len = ext.length+1;
//         return(el.substr(el.length-len , el.length)==='.' + text)
//     });
//     anso.forEach(function(e){
//         console.log(e)
//     })
// });


var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err,list){
    list.forEach(function(file){
        if (path.extname(file)=== '.' + process.argv[3])
        console.log(file)
    })
})