const config = {
  namaPacar: "Depiii",
  namaKamu: "Xavier",
  tanggalJadian: "2026-04-12"
};


const loveMessages = [
  "Kamu itu rumah paling nyaman setelah hari yang panjang. (ciaelah kaya bang duloh gue)",
  "Aku suka kamu bukan cuma karena cantik, tapi karena kamu bikin semuanya terasa lebih hidup.(zhang zuzur zhanggal)",
  "Kalau aku punya satu kesempatan buat pilih lagi, aku tetap pilih kamu.(AWWWWWWWWW ROMANTIS BENER)",
  "Terima kasih sudah jadi bagian paling manis dari hidup aku.(coklat kali)",
  "Kamu nggak perlu sempurna. Jadi diri kamu aja udah cukup bikin aku jatuh hati.(aduh alaynya ak)",
  "Aku mungkin nggak selalu pandai ngomong, tapi aku selalu serius soal kamu.(GAAAAAAARRRRRRRR)"
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

  if (Number.isNaN(diff) || diff < 0) {
    document.getElementById("daysTogether").textContent = "0";
    document.getElementById("hoursTogether").textContent = "0";
    document.getElementById("minutesTogether").textContent = "0";
    return;
  }

  const totalMinutes = Math.floor(diff / (1000 * 60));

  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

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

// ========================
// MUSIC PLAYER
// ========================

const songs = [
  {
    title: "Rocketeers",
    file: "assets/music/lagu1far.mp3"
  },
  {
    title: "Jadi Kekasihku Saja",
    file: "assets/music/lagu2jadi.mp3"
  },
  {
    title: "Besok Kita Pergi Makan",
    file: "assets/music/lagu3sal.mp3"
  }
];

let currentSongIndex = 0;
let isPlaying = false;

const loveAudio = document.getElementById("loveAudio");
const playPauseBtn = document.getElementById("playPauseBtn");
const currentSongTitle = document.getElementById("currentSongTitle");
const songSelect = document.getElementById("songSelect");
const volumeSlider = document.getElementById("volumeSlider");
const volumeText = document.getElementById("volumeText");

function loadSong(index) {
  loveAudio.src = songs[index].file;
  currentSongTitle.textContent = "Sekarang diputar: " + songs[index].title;
  songSelect.value = index;
}

function togglePlay() {
  if (!isPlaying) {
    loveAudio.play();
    isPlaying = true;
    playPauseBtn.textContent = "⏸";
  } else {
    loveAudio.pause();
    isPlaying = false;
    playPauseBtn.textContent = "▶";
  }
}

function changeSong() {
  currentSongIndex = parseInt(songSelect.value);
  loadSong(currentSongIndex);

  if (isPlaying) {
    loveAudio.play();
  }
}

function nextSong() {
  currentSongIndex++;

  if (currentSongIndex >= songs.length) {
    currentSongIndex = 0;
  }

  loadSong(currentSongIndex);

  if (isPlaying) {
    loveAudio.play();
  }
}

function previousSong() {
  currentSongIndex--;

  if (currentSongIndex < 0) {
    currentSongIndex = songs.length - 1;
  }

  loadSong(currentSongIndex);

  if (isPlaying) {
    loveAudio.play();
  }
}

function changeVolume() {
  loveAudio.volume = volumeSlider.value;
  volumeText.textContent = Math.round(volumeSlider.value * 100) + "%";
}

loveAudio.addEventListener("ended", nextSong);

loadSong(currentSongIndex);
loveAudio.volume = 0.5;
