const hearts = document.querySelector(".hearts");
for(let i=0;i<20;i++){
  let h = document.createElement("span");
  h.innerText = "❤️";
  h.style.left = Math.random()*100+"%";
  h.style.animationDuration = (4+Math.random()*4)+"s";
  hearts.appendChild(h);
}

function checkName(){
  const name = document.getElementById("hisName").value.trim().toLowerCase();
  if(name === "karthik"){
    step1.classList.add("hidden");
    step2.classList.remove("hidden");
  }else{
    document.getElementById("error").innerText="❌ Name not allowed";
  }
}

function askLove(){
  if(document.getElementById("herName").value.trim()==="") return;
  step2.classList.add("hidden");
  step3.classList.remove("hidden");
}

/* Fake NO button */
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover",()=>{
  noBtn.style.position="absolute";
  noBtn.style.left=Math.random()*80+"%";
  noBtn.style.top=Math.random()*80+"%";
});

function showGift(){
  step3.classList.add("hidden");
  gift.classList.remove("hidden");
}

function openGift(){
  const her = document.getElementById("herName").value;
  gift.classList.add("hidden");
  final.classList.remove("hidden");
  document.getElementById("finalText").innerText =
    `💖 Happy Valentine’s Day ${her} 💖`;
}

