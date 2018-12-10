let request=require('request');
let fs=require('fs');

var i=9;
var j=3;

request(`http://ielts-up.com/listening/${i}.${j}.mp3`).pipe(fs.createWriteStream(`./${i}.${j}.mp3`));
   



