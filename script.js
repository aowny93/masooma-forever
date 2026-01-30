const music = document.getElementById("music");

const scriptLines = [
  "Masooma…",
  "I didn’t fall in love loudly.",
  "I fell slowly. Quietly.",
  "Somewhere between your smile and your silence.",
  "",
  "Distance tried to weaken us.",
  "But love like ours only grew stronger.",
  "",
  "You are not just my wife.",
  "You are my safe place.",
  "My forever."
];

let lineIndex = 0;

function beginFilm() {
  document.querySelector(".opening").style.display = "none";
  document.querySelectorAll(".hidden").forEach(s => s.style.display = "flex");

  music.volume = 0;
  music.play();

  // Smooth music fade-in
  let fade = setInterval(() => {
    if (music.volume < 1) music.volume += 0.01;
    else clearInterval(fade);
  }, 120);

  typeLines();
  loadGallery();
}

// Typing cinematic text
function typeLines() {
  if (lineIndex < scriptLines.length) {
    const p = document.createElement("p");
    p.textContent = scriptLines[lineIndex];
    document.getElementById("cinematic-text").appendChild(p);
    lineIndex++;
    setTimeout(typeLines, 1200);
  }
}

// Load 25 images named 1.jpeg → 25.jpeg from root
function loadGallery() {
  const gallery = document.querySelector(".gallery");

  for (let i = 1; i <= 25; i++) {
    const img = document.createElement("img");
    img.src = `${i}.jpeg`; // root-level images
    img.alt = "Masooma's photo";
    gallery.appendChild(img);

    // Fade-in effect
    setTimeout(() => img.classList.add("show"), i * 200);
  }
}
