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

  let fade = setInterval(() => {
    if (music.volume < 1) music.volume += 0.01;
    else clearInterval(fade);
  }, 120);

  typeLines();
  loadGallery();
}

function typeLines() {
  if (lineIndex < scriptLines.length) {
    const p = document.createElement("p");
    p.textContent = scriptLines[lineIndex];
    document.getElementById("cinematic-text").appendChild(p);
    lineIndex++;
    setTimeout(typeLines, 1200);
  }
  function loadGallery() {
  const gallery = document.querySelector(".gallery");

  // List all image filenames exactly as uploaded
  const imageFiles = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
    "11.jpeg",
    "12.jpeg",
    "13.jpeg",
    "14.jpeg",
    "15.jpeg",
    "16.jpeg",
    "17.jpeg",
    "18.jpeg",
    "19.jpeg",
    "20.jpeg",
    "21.jpeg",
    "22.jpeg",
    "23.jpeg",
    "24.jpeg",
    "25.jpeg"
  ];

  imageFiles.forEach((file, i) => {
    const img = document.createElement("img");
    img.src = `images/${file}`;
    gallery.appendChild(img);

    setTimeout(() => img.classList.add("show"), i * 200);
  });
}

} function loadGallery() {
  const gallery = document.querySelector(".gallery");

  // Load 25 images with .jpeg extension
  for (let i = 1; i <= 25; i++) {
    const img = document.createElement("img");
    img.src = `images/${i}.jpeg`;  // matches your uploaded files
    gallery.appendChild(img);

    // Fade-in effect
    setTimeout(() => img.classList.add("show"), i * 200);
  }
}


function loadGallery() {
  const gallery = document.querySelector(".gallery");
  for (let i = 1; i <= 25; i++) {
    const img = document.createElement("img");
    img.src = `images/${i}.jpg`;
    gallery.appendChild(img);

    setTimeout(() => img.classList.add("show"), i * 200);
  }
}
