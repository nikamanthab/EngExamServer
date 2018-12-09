const express = require("express");
const hbs = require("hbs");

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname+"/views/partials");
hbs.registerHelper('capitalize' , (text)=>{
	return text.toUpperCase();
});

app.set('view engine','hbs');
app.use(express.static(__dirname+"/public"));

app.get('/',(req,res)=>{
	res.render('welcome.hbs',{
		title: "English Exam System",
	});
});

app.listen(port ,()=>{
	console.log(`server is started in ${port}`)
});