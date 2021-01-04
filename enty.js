var work = require('./module');

var callback = function(err, data){
    if (err){
        console.error(err);
    }
     data.forEach(element => {
     console.log(element);
 });
} 


 work(process.argv[2], process.argv[3],callback);