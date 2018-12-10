let request=require('request');
let fs=require('fs');


for(let i=1;i<=14;i++){
    for(let j=1;j<=4;j++){
    request(`http://ielts-up.com/listening/${i}.${j}.mp3`).pipe(fs.createWriteStream(`./${i}.${j}.mp3`));
    }
}
