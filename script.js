// ========================
// BAGIAN YANG BISA KAMU GANTI
// ========================

const config = {
  namaPacar: "Sayang",
  namaKamu: "Xavier",
  tanggalJadian: "3000"
};

// Ganti tanggalJadian sesuai format: YYYY-MM-DD
// Contoh: "2025-06-13"

const loveMessages = [
  "Kamu itu rumah paling nyaman setelah hari yang panjang.",
  "Aku suka kamu bukan cuma karena cantik, tapi karena kamu bikin semuanya terasa lebih hidup.",
  "Kalau aku punya satu kesempatan buat pilih lagi, aku tetap pilih kamu.",
  "Terima kasih sudah jadi bagian paling manis dari hidup aku.",
  "Kamu nggak perlu sempurna. Jadi diri kamu aja udah cukup bikin aku jatuh hati.",
  "Aku mungkin nggak selalu pandai ngomong, tapi aku selalu serius soal kamu."
];

// ========================
// SET NAMA
// ========================

document.getElementById("herName").textContent = config.namaPacar;
document.getElementById("myName").textContent = config.namaKamu;

// ========================
// TYPING EFFECT
// ========================

const typingTarget = document.getElementById("typingText");
const sentence = `Aku bikin ini khusus buat kamu, ${config.namaPacar}.`;
let charIndex = 0;

function typeText() {
  if (charIndex < sentence.length) {
    typingTarget.textContent += sentence.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 70);
  }
}

typeText();

// ========================
// RANDOM LOVE POPUP
// ========================

function showRandomLove() {
  const randomIndex = Math.floor(Math.random() * loveMessages.length);
  document.getElementById("popupText").textContent = loveMessages[randomIndex];
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// ========================
// LOVE COUNTER
// ========================

function updateLoveCounter() {
  const startDate = new Date(config.tanggalJadian);
  const now = new Date();

  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor(diff / (1000 * 60));

  document.getElementById("daysTogether").textContent = days;
  document.getElementById("hoursTogether").textContent = hours;
  document.getElementById("minutesTogether").textContent = minutes;
}

updateLoveCounter();
setInterval(updateLoveCounter, 60000);

// ========================
// FINAL MESSAGE
// ========================

function showFinalMessage() {
  document.getElementById("finalMessage").textContent =
    "Hehehe aku juga sayang kamu lebih banyak dari yang bisa aku tulis di website ini 💗";
  createManyHearts();
}

// ========================
// TOMBOL ENGGAK KABUR
// ========================

const noButton = document.getElementById("noButton");

noButton.addEventListener("mouseover", () => {
  const randomX = Math.floor(Math.random() * 180) - 90;
  const randomY = Math.floor(Math.random() * 120) - 60;

  noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

noButton.addEventListener("click", () => {
  document.getElementById("finalMessage").textContent =
    "Gabisa pencet itu, website ini sudah disetting biar kamu tetap sayang aku 😌";
});

// ========================
// FALLING HEARTS
// ========================

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💗";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 18 + 14 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

function createManyHearts() {
  for (let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 90);
  }
}

setInterval(createHeart, 900);
