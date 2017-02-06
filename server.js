var express=require('express');
var app=express();
var port = process.env.PORT || 2000;
app.listen(port);
console.log('Server started! At http://localhost:' + port);

app.get('/shekh',function(req,resp){
	 resp.send("الله حيو الشيخ")
	//console.log("ok")
})
app.use(express.static(__dirname +'/client'))