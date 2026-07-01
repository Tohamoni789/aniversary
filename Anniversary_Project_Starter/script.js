/* ==========================================
   Happy Anniversary ❤️
   script.js
========================================== */

const loading = document.getElementById("loading");
const main = document.getElementById("main");

const startBtn = document.getElementById("startBtn");

const envelopeSection = document.getElementById("envelopeSection");
const openEnvelope = document.getElementById("openEnvelope");
const envelope = document.getElementById("envelope");

const funnySection = document.getElementById("funnySection");
const yesBtn = document.getElementById("yesBtn");
const funnyText = document.getElementById("funnyText");

const letterSection = document.getElementById("letterSection");
const typing = document.getElementById("typing");
const nextGallery = document.getElementById("nextGallery");

/* -----------------------------
   Loading
----------------------------- */

setTimeout(() => {

    loading.style.display = "none";
    main.classList.remove("hidden");

}, 2500);

/* -----------------------------
   Start
----------------------------- */

startBtn.onclick = () => {

    document.querySelector(".welcome").style.display = "none";

    envelopeSection.classList.remove("hidden");

};

/* -----------------------------
   Envelope Open
----------------------------- */

openEnvelope.onclick = () => {

    envelope.classList.add("open");

    openEnvelope.style.display = "none";

    setTimeout(() => {

        envelopeSection.classList.add("hidden");

        funnySection.classList.remove("hidden");

    }, 1800);

};

/* -----------------------------
   Funny Button
----------------------------- */

const funnyMessages = [

"😜 এত সহজে না!",
"🤭 আরেকবার চেষ্টা করো!",
"😂 Almost!",
"❤️ আচ্ছা... এবার পারো।"

];

let moveCount = 0;

function moveButton() {

    if (moveCount >= 4) return;

    const x = Math.random() * 220 - 110;
    const y = Math.random() * 140 - 70;

    yesBtn.style.transform = `translate(${x}px, ${y}px)`;

    funnyText.innerHTML = funnyMessages[moveCount];

    moveCount++;

}

/* Desktop */

yesBtn.addEventListener("mouseenter", moveButton);

/* Mobile */

yesBtn.addEventListener("touchstart", function(e){

    if(moveCount < 4){

        e.preventDefault();

        moveButton();

    }

});

/* Finally allow click */

yesBtn.addEventListener("click", function(){

    if(moveCount < 4) return;

    funnySection.classList.add("hidden");

    letterSection.classList.remove("hidden");

    typeWriter();

});

/* -----------------------------
   Letter
----------------------------- */

const letter = `

আচ্ছা...

এত কষ্ট করে খুললে,
এখন আর বন্ধ করা যাবে না। 😜❤️


আমার সবচেয়ে প্রিয় মানুষ,

তীর্থ,

(আমার গুলগুলির বাবা ❤️)


আজ আমাদের প্রথম বিবাহবার্ষিকী।

৪ জুলাই ২০২৫...

সেদিন আমি শুধু বিয়ে করিনি,

আমি আমার সবচেয়ে আপন মানুষটাকে পেয়েছিলাম।


হয়তো আমাদের মাঝে
অভিমান হয়েছে,

ঝগড়াও হয়েছে,

কিন্তু একটা জিনিস
কখনো বদলায়নি...


আমি প্রতিদিন
নতুন করে তোমাকেই
ভালোবাসি। ❤️


ধন্যবাদ...

আমার পাশে থাকার জন্য।

আমার হাসির কারণ হওয়ার জন্য।

আমার মানুষ হওয়ার জন্য। ❤️


Happy 1st Anniversary


Forever Yours,

❤️

তোহামনি

`;

let i = 0;

function typeWriter(){

    if(i < letter.length){

        typing.innerHTML += letter.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }

    else{

        nextGallery.style.display = "inline-block";

    }

}

/* -----------------------------
   Next (Part-3)
----------------------------- */

nextGallery.onclick = () => {

    alert("📸 Gallery Part আসবে পরের ধাপে ❤️");

};
