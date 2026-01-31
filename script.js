const music = document.getElementById("music");

// Expanded cinematic love lines in Roman Urdu
const scriptLines = [
  "Masooma…",
  "Main ne mohabbat shor se nahi ki.",
  "Main ne dheere dheere, chupke se ki.",
  "Tumhari muskaan aur tumhari khamoshi ke darmiyan kahin.",
  "",
  "Dooriyan humen kamzor nahi kar saktin.",
  "Hamari mohabbat sirf mazboot hui hai.",
  "",
  "Tum sirf meri biwi nahi ho.",
  "Tum meri dua, meri himmat, meri rahat ho.",
  "",
  "Har subah tumhari yaad se shuru hoti hai,",
  "Har shaam tumhari khushi ke khayalon me guzar jati hai.",
  "",
  "Main tumhari muskaan ka zimmedar hoon,",
  "Tumhari khushi ka rakshak hoon.",
  "",
  "Jab hum saath hote hain, duniya khubsurat lagti hai,",
  "Jab hum alag hote hain, sirf tumhari yaad hi saath hoti hai.",
  "",
  "Har pal main tumhare naam ke saath jeeta hoon,",
  "Har saans tumhari mohabbat me basi hai.",
  "",
  "Tum meri safe place ho, meri forever ho.",
  "Meri duaon ka sabse pyara hissa ho.",
  "",
  "Happy Birthday, meri zindagi ka sabse khoobsurat hissa ❤️",
  "Har din, har pal, main tumhare saath hoon.",
  "",
  "Mera wada hai, hamesha tumhare saath khada rahunga.",
  "Doori ho ya na ho, tum meri mohabbat ka markaz ho.",
  "",
  "Main tumse mohabbat karta hoon —",
  "Zyada se zyada, har waqt, hamesha."
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
