//读取图片 
var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'image/jpg'});
	fs.createReadStream('./hi.jpg').pipe(res);
}).listen(3000);

console.log("server run at http://localhost:3000/");