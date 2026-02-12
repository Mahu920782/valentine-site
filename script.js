/* name display */
const questionText=document.getElementById("questionText");
const name=localStorage.getItem("username") || "Glavii 💏";

if(questionText){
questionText.innerHTML="Hey "+name+", Will You Be My Valentine? 💖";
}

/* yes grow + no run */
const noBtn=document.getElementById("noBtn");
const yesBtn=document.getElementById("yesBtn");

let attempt=0;
let yesSize=1;

if(noBtn){

noBtn.addEventListener("mouseover",function(){

attempt++;
yesSize+=0.25;

if(yesBtn){
yesBtn.style.transform="scale("+yesSize+")";
yesBtn.style.boxShadow="0 0 25px 5px #00ff99";
}

if(attempt===1){
alert("Mariyatak Yes Adicho 😡\nVare Vazhi Ella Molee 👀");
}
else if(attempt===2){
alert("Ninkk entha paranja manasilkilee😏");
}
else if(attempt>=3){
alert("Yes parayathe vere vazhi illaa 🤭");
}

const x=Math.random()*(window.innerWidth-100);
const y=Math.random()*(window.innerHeight-50);

noBtn.style.position="absolute";
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";

});
}

/* typewriter */
const typeText=document.getElementById("typeText");

if(typeText){
const msg=name+" ❤️ You just made me the happiest person!";
let i=0;

function typing(){
if(i<msg.length){
typeText.innerHTML+=msg.charAt(i);
i++;
setTimeout(typing,70);
}
}
typing();

/* hearts */
setInterval(()=>{
const h=document.createElement("div");
h.className="heart";
h.innerHTML="❤️";
h.style.left=Math.random()*100+"vw";
h.style.animationDuration=(Math.random()*3+2)+"s";
document.body.appendChild(h);
setTimeout(()=>h.remove(),5000);
},300);
}