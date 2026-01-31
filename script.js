const music = document.getElementById("music");

// Expanded cinematic love lines in Roman Urdu
const scriptLines = [
  "Masooma…",
  "I didn’t fall in love loudly.",
  "I fell slowly. Quietly.",
  "Somewhere between your smile and the silence of your eyes, I found home.",
  "Distance could never weaken us.",
  "Our love only grew stronger with every heartbeat.",
  "You are not just my wife.",
  "You are my prayer, my strength, my peace.",
  "Every morning begins with thoughts of you,",
  "Every evening passes wrapped in the warmth of your laughter.",
  "I am responsible for your smiles,",
  "And the guardian of your happiness.",
  "When we are together, the world shines brighter,",
  "When we are apart, your memory keeps me company.",
  "Every moment I live, I live with your name on my lips,",
  "Every breath I take, carries a piece of your love.",
  "You are my safe place, my forever.",
  "The most precious part of all my prayers is you.",
  "Happy Birthday, the most beautiful chapter of my life ❤️",
  "Every day, every moment, I am yours.",
  "I promise to stand by you, always.",
  "Near or far, you are the center of my love.",
  "I love you—",
  "More than words, more than time, more than anything."
];


// 25 Images from GitHub
const imageUrls = Array.from({length:25}, (_, i) =>
  `https://raw.githubusercontent.com/aowny93/masooma-forever/main/${i+1}.jpeg`
);

let lineIndex = 0;

function beginFilm() {
  document.querySelector(".opening").style.display = "none";
  document.querySelectorAll(".hidden").forEach(s => s.style.display = "flex");

  // Play music gradually
  music.volume = 0;
  music.play();
  let fade = setInterval(() => {
    if (music.volume < 1) music.volume += 0.01;
    else clearInterval(fade);
  }, 120);

  typeLines();
  loadGallery();
}

// Typing cinematic lines
function typeLines() {
  if (lineIndex < scriptLines.length) {
    const p = document.createElement("p");
    p.textContent = scriptLines[lineIndex];
    document.getElementById("cinematic-text").appendChild(p);
    lineIndex++;
    setTimeout(typeLines, 1200);
  }
}

// Load gallery images
function loadGallery() {
  const gallery = document.querySelector(".gallery");
  imageUrls.forEach((url, i) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Masooma's photo";
    gallery.appendChild(img);
    setTimeout(() => img.classList.add("show"), i * 150);
  });
}
