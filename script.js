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

// Load images individually (no folder needed)
function loadGallery() {
  const gallery = document.querySelector(".gallery");

  // List all 25 image filenames exactly as uploaded on GitHub
  const imageFiles = [
    "IMG1.jpeg",
    "IMG2.jpeg",
    "IMG3.jpeg",
    "IMG4.jpeg",
    "IMG5.jpeg",
    "IMG6.jpeg",
    "IMG7.jpeg",
    "IMG8.jpeg",
    "IMG9.jpeg",
    "IMG10.jpeg",
    "IMG11.jpeg",
    "IMG12.jpeg",
    "IMG13.jpeg",
    "IMG14.jpeg",
    "IMG15.jpeg",
    "IMG16.jpeg",
    "IMG17.jpeg",
    "IMG18.jpeg",
    "IMG19.jpeg",
    "IMG20.jpeg",
    "IMG21.jpeg",
    "IMG22.jpeg",
    "IMG23.jpeg",
    "IMG24.jpeg",
    "IMG25.jpeg"
  ];

  // Add each image to the gallery with fade-in
  imageFiles.forEach((file, i) => {
    const img = document.createElement("img");
    img.src = file; // root-level images
    gallery.appendChild(img);

    // Fade-in effect
    setTimeout(() => img.classList.add("show"), i * 200);
  });
}
