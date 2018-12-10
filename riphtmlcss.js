

let request=require('request');
let fs=require('fs');

// var url="http://ielts-up.com/listening/ielts-listening-sample-1.1.html"
let temp="";
let path="";
for(let i=1;i<=14;i++){
    temp=`./QuestionPaper-${i}`;
    fs.mkdirSync(temp);
    for(let j=1;j<=4;j++){
        path=temp+`/Section-${j}`;
        fs.mkdirSync(path);
    request(`ielts-up.com/listening/ielts-listening-sample-${i}.${j}.html`).pipe(fs.createWriteStream(path+`./${i}.${j}.html`));
    request(`http://ielts-up.com/listening/style.css`).pipe(fs.createWriteStream(path+"style.css"));
request(`http://ielts-up.com/listening/ipad.css`).pipe(fs.createWriteStream(path+"ipad.css"));
    }
}












