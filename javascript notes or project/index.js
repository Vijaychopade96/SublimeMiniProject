/*let j=0;
while(j<arr.length){
	console.log(arr[j]);
	j++;

}*/

/*console.log("hello world");
	//alert("me");
	console.warn("this is warning");
	console.error("this is error");

var arr = [1,2,3,4,5,6,7];
console.log(arr);
for(var i=0;i<arr.length;i++){
	console.log	(arr[i])
}
*while loop
var arr = [1,2,3,4,5,6,7];
let  j=0;
while(j<arr.length){
	console.log(arr[j]);
	j++;
}
*do while loop
var arr = [1,2,3,4,5,6,7];
let  j=10;
do{
	console.log(arr[j]);
	j++;
	while(j < arr.length);

}
*break and continue staement
var arr =[1,2,3,4,5,6,7];
for(var i=0;i<arr.length;i++){
	if(i==2){
		//break;
		continue;
	}
	console.log(arr[i])
}
//array method
let myarr =["fan","camera",34,null, true];

console.log(myarr.length);
myarr.pop();
myarr.push("vijay")
console.log(myarr);
/string method
let string="harry is a good boy";
//console.log(string.length);
//console.log(string.indexOf("good"))
//console.log(string.slice(0,5))
d = string.replace("harry","vijay");
console.log(d,string)

//dates in js:
let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getDay());

//Dom mauipuipulation:-

let elem = document.getElementById('cilck')
//console.log(elem);

let  elemClass = document.getElementsByClassName('container')
//console.log(elemClass);
//elemClass[0].classList.add("bg-primary")
//elemClass[0].classList.add("text-sucess")
//console.log(elem.innerHTML);
//console.log(elem.innerText);

//console.log(elemClass[0].innerHTML);
//console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('div')
console.log(tn)
createdElement = document.createElement('p');
createdElement.innerText="This is a created para"
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText = "This ia a created bold";
tn[0].replaceChild(createdElement2,createdElement);

//selcting query:- 
sel = document.querySelector('.container')
console.log(sel)

sel = document.querySelectorAll('.container')
console.log(sel)

function clicked(){
	console.log('the button was clicked')
}
window.onload = function(){ 
		console.log('the document was loaded')

}

//Event in javascript:-
//firstcontainer.addEventListener('click',function(){
	//console.log('click hua')
//})

//firstcontainer.addEventListener('mouseover',function(){
//	console.log('mouse on container')
//})

//firstcontainer.addEventListener('mouseout',function(){
//	console.log('mouse out of container')
//})

let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstcontainer.addEventListener('mouseup',function(){
	document.querySelectorAll('.container')[1].innerHTML =prevHTML;
	console.log('mouse up when click on  container')
})

firstcontainer.addEventListener('mousedown',function(){
document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
		console.log('mouse down when click on container');
})


//Arrow funaction:-
//function summ(a, b){
	//return a+b;
//
//}
summ = (a,b)=>{
	return a+b;

}

logkaro =()=>{
 document.querySelectorAll('.container')[1].innerHTML ="<b>set inerval fired";
	console.log("i am your log")
}

//settimeout and setintervel:-
clr=setTimeout(logkaro, 2000);
use clearInterval/clearTimeout(clr)to cancel setInterval/setTimeout

//clr = setInterval(logkaro, 2000);


//javascript Localstorage:-
 localStorage.setItem('name','vijay')
 localStorage
 storge{name:"harry",length:1}
 localStorage.getItem('name')
 localstorage.remove('name')
 localstorge.clear()
 

 //json:-javascript object naotaion:-

 obj = {name:"harry",length:1, a:{this: "that"}}
 jso = JSON.stringify(obj);
 console.log(typeof jso)
 console.log(jso)
 parsed = JSON.parse('{"name":"harry","length":1,"a":{"this":"that"}}')
 console.log(parsed);

 //javascript version-

 //template literals :- backicks
 a = 34;
 console.log('this is my ${a}')


