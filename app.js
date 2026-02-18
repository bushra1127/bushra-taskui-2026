const sheet = document.getElementById("sheet");
const overlay = document.querySelector(".overlay");
const profileName = document.getElementById("profileName");

let currentProfile = null;
let currentIcon = null;

function openSheet(name, iconElement) {
  profileName.innerText = name;
  sheet.classList.add("active");
  overlay.classList.add("active");

  currentProfile = name;
  currentIcon = iconElement;
}

function closeSheet() {
  sheet.classList.remove("active");
  overlay.classList.remove("active");
}

function sendProposal(btn) {
  btn.classList.add("sent");
  btn.innerHTML = "✔ Sent!";
  createConfetti(btn);

  /*setTimeout(() =>{
    closeSheet();
    
},1200);
*/

  // Change only that specific card icon
  if (currentIcon) {
    currentIcon.innerHTML = `<i class="fa-solid fa-check"></i>`;
    currentIcon.style.background = "#E76F51";
  }

  setTimeout(() => {
    closeSheet();
    btn.classList.remove("sent");
    btn.innerText = "Connect";
  }, 1200);
}

function createConfetti(button) {
  for (let i = 0; i < 18; i++) {
    let conf = document.createElement("div");
    conf.classList.add("confetti");
    let x = (Math.random() - 0.5) * 200 + "px";
    let y = (Math.random() - 0.5) * 200 + "px";
    conf.style.setProperty("--x", x);
    conf.style.setProperty("--y", y);
    button.appendChild(conf);
    setTimeout(() => conf.remove(), 700);
  }
}








