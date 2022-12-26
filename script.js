var div=document.createElement("div")
div.style.textAlign="center";

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("class","btn-primary");
button.innerHTML="search";
button.addEventListener("click",foo);

let active=document.createElement("div");
active.setAttribute("id","active");

let recover=document.createElement("div");
recover.setAttribute("id","recover");


let death=document.createElement("div");
death.setAttribute("id","death")

div.append(input,button,active,recover,death);
document.body.append(div);

async function foo(){
    let res=document.getElementById("country").value;
    var url=`https://api.covid19api.com/dayone/country/${res}`;

    let result=await fetch(url);
    var result1=await result.json();
    var index=result1.length-1;
    active.innerHTML=`total active cases:${result1[index].Active}`;
    recover.innerHTML=`total recover cases:${result1[index].Recoverd}`;
    death.innerHTML=`total death cases:${result1[index].Deaths}`;
}
foo();
