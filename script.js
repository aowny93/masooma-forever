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
}

// Use raw GitHub URLs for images
function loadGallery() {
  const gallery = document.querySelector(".gallery");

  const imageFiles = [
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/1.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/2.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/3.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/4.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/5.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/6.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/7.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/8.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/9.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/10.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/11.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/12.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/13.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/14.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/15.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/16.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/17.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/18.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/19.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/20.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/21.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/22.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/23.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/24.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/25.jpeg"
  ];
  function loadGallery() {
  const gallery = document.querySelector(".gallery");

  const imageUrls = [
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/1.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/2.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/3.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/4.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/5.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/6.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/7.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/8.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/9.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/10.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/11.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/12.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/13.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/14.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/15.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/16.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/17.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/18.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/19.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/20.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/21.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/22.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/23.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/24.jpeg",
    "https://raw.githubusercontent.com/aowny93/masooma-forever/main/25.jpeg"
  ];

  imageUrls.forEach((url, i) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Masooma's photo";
    gallery.appendChild(img);
    setTimeout(() => img.classList.add("show"), i * 200);
  });
}


  imageFiles.forEach((url, i) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Masooma's photo";
    gallery.appendChild(img);

    setTimeout(() => img.classList.add("show"), i * 200);
  });
}
