// =========================
// تشغيل الموسيقى
// =========================

const music = document.getElementById('music');
const playBtn = document.getElementById('playBtn');
const progressBar = document.getElementById('progressBar');

function togglePlay() {
    if (music.paused) {
        music.play();
        playBtn.innerText = '⏸';
    } else {
        music.pause();
        playBtn.innerText = '▶';
    }
}

function skip(time) {
    music.currentTime += time;
}

music.addEventListener('timeupdate', () => {
    let percent = (music.currentTime / music.duration) * 100;
    progressBar.style.width = percent + "%";
});



// =========================
// انتقال الصفحات
// =========================

function goPage(page){

document.body.style.opacity="0";

setTimeout(()=>{
window.location.href=page;
},600);

}

window.onload = ()=>{

document.body.style.opacity="0";

setTimeout(()=>{
document.body.style.transition =
"opacity 1s";
document.body.style.opacity="1";
},100);

};

// =========================
// قلوب متحركة
// =========================

const heartsLayer =
document.getElementById("hearts");

if(heartsLayer){

function createHeart(){

const heart =
document.createElement("div");

heart.classList.add("heart");

const icons =
["💖","💕","💗","❤️"];

heart.innerHTML =
icons[
Math.floor(
Math.random()*icons.length
)
];

heart.style.left =
Math.random()*100+"vw";

heart.style.fontSize =
(18+Math.random()*18)+"px";

heart.style.animationDuration =
(4+Math.random()*5)+"s";

heartsLayer.appendChild(heart);

setTimeout(()=>{
heart.remove();
},9000);

}

setInterval(
createHeart,
350
);

}

// =========================
// ورود متطايرة
// =========================

function createRose(){

const rose =
document.createElement("div");

rose.innerHTML="🌹";

rose.style.position="fixed";
rose.style.left=
Math.random()*100+"vw";

rose.style.top="-50px";

rose.style.fontSize=
(20+Math.random()*20)+"px";

rose.style.pointerEvents="none";
rose.style.zIndex="999";

rose.style.animation=
"fly 7s linear forwards";

document.body.appendChild(rose);

setTimeout(()=>{
rose.remove();
},7000);

}

setInterval(
createRose,
1600
);

// =========================
// نجوم ولمعان
// =========================

function createStar(){

const star =
document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";
star.style.left=
Math.random()*100+"vw";

star.style.top=
Math.random()*100+"vh";

star.style.fontSize=
(10+Math.random()*15)+"px";

star.style.opacity=
Math.random();

star.style.pointerEvents=
"none";

star.style.animation=
"fade 3s infinite";

document.body.appendChild(star);

setTimeout(()=>{
star.remove();
},4000);

}

setInterval(
createStar,
900
);

// =========================
// تأثير كتابة
// =========================

function typeWriter(
id,
text,
speed=60
){

let i=0;

const el =
document.getElementById(id);

if(!el) return;

el.innerHTML="";

function typing(){

if(i<text.length){

el.innerHTML +=
text.charAt(i);

i++;

setTimeout(
typing,
speed
);

}

}

typing();

}

// =========================
// Popup احترافي
// =========================

function showPopup(text){

const popup =
document.getElementById("popup");

const popupText =
document.getElementById("popupText");

if(
popup &&
popupText
){

popupText.innerHTML=text;

popup.classList.remove(
"hidden"
);

}

}

function closePopup(){

const popup =
document.getElementById("popup");

if(popup){

popup.classList.add(
"hidden"
);

}

}

// =========================
// تأثير نبض للقلب
// =========================

function pulse(el){

el.style.transition=".3s";

el.style.transform=
"scale(1.1)";

setTimeout(()=>{
el.style.transform=
"scale(1)";
},300);

}