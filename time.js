

var timeleft=65;
var counter=0;
	var div = document.querySelector('#div')
	function convert(s)
{
	var min =Math.floor(s/60);
	var char=(min < 10) ? '0' + min.toString() : min.toString();
	var sec=Math.floor(s%60);
	var sec1=(sec < 10) ? '0' + sec.toString() : sec.toString();
	return char + ':' + sec1 ;
}

    var interval=setInterval(function() {
    	counter++;
	var s=convert(timeleft-counter);
	var p=`<h1>${s}</h1>`;
	div.innerHTML=p;
},1000)

	setTimeout(function() {
		clearInterval(interval);
		window.location.replace("http://www.google.com");},(timeleft*1000)+500);
		
	
    



