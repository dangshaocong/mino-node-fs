//读取图片 
var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'image/jpg'});
	fs.createReadStream('./hi.jpg').pipe(res);
}).listen(3000);

console.log("server run at http://localhost:3000/");

//异步与阻塞
$.post('/path/to/file', function(data) {
	console.log(data);
	
});
//异步的，程序会接着执行下面的。

var data=$.post('/path/to/file');
console.log('data');
//程序阻塞，一直等数据请求到，然后打出来