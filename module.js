var fs= require('fs');
module.exports = function(dirName, extName , callback){
    fs.readdir(dirName, function(err, data){
        if (err) {
            return callback(err)
        }
        var regextestt = new RegExp('.+\.' + extName + '$');
        data = data.filter(function(el){
            return regextestt.test(el);
        });
        callback(null, data);
    });
}