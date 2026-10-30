/* ---------- Petal falling animation ---------- */
(function spawnPetals() {
  const layer = document.getElementById("petals");
  const COUNT = 18; // lightweight

  for (let i = 0; i < COUNT; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";

    const left = Math.random() * 100;
    const duration = 6 + Math.random() * 8;   // 6–14s
    const delay = -Math.random() * 14;          // negative = already mid-fall
    const scale = 0.6 + Math.random() * 0.9;
    const blur = Math.random() > 0.7 ? "1px" : "0";

    petal.style.left = left + "vw";
    petal.style.animationDuration = duration + "s";
    petal.style.animationDelay = delay + "s";
    petal.style.transform = `scale(${scale})`;
    petal.style.filter = `blur(${blur})`;

    layer.appendChild(petal);
  }
})();

/* ---------- Petal falling animation ---------- */
(function spawnPetals() {
  const layer = document.getElementById("petals");
  const COUNT = 18;

  for (let i = 0; i < COUNT; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";

    const left = Math.random() * 100;
    const duration = 6 + Math.random() * 8;
    const delay = -Math.random() * 14;
    const scale = 0.6 + Math.random() * 0.9;
    const blur = Math.random() > 0.7 ? "1px" : "0";

    petal.style.left = left + "vw";
    petal.style.animationDuration = duration + "s";
    petal.style.animationDelay = delay + "s";
    petal.style.transform = `scale(${scale})`;
    petal.style.filter = `blur(${blur})`;

    layer.appendChild(petal);
  }
})();

/* ---------- Envelope Logic ---------- */
const envelope = document.getElementById("envelope");
const letterBody = document.getElementById("letterBody");
const closeBtn = document.getElementById("closeBtn");

let isOpen = false;

function openEnvelope() {
  if (isOpen) return;
  isOpen = true;
  envelope.classList.add("open");
}

function closeEnvelope() {
  if (!isOpen) return;
  
  // 1. Add closing class to trigger reverse animations
  envelope.classList.add("closing");
  
  // 2. Remove classes after animation finishes
  setTimeout(() => {
    envelope.classList.remove("open");
    envelope.classList.remove("closing");
    isOpen = false;
  }, 1100); // 1.1s matches the letter slide-out + flap close time
}

// Tap the middle of the envelope to open
envelope.addEventListener("click", (e) => {
  if (isOpen) return; // ignore clicks if already open

  const rect = envelope.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;
  const inMiddle = x > 0.2 && x < 0.8 && y > 0.2 && y < 0.8;
  
  if (inMiddle) openEnvelope();
});

// Close button logic
closeBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent envelope click event from firing
  closeEnvelope();
});

// Accessibility
envelope.addEventListener("keydown", (e) => {
  if ((e.key === "Enter" || e.key === " ") && !isOpen) {
    e.preventDefault();
    openEnvelope();
  }
});

/* ---------- Load letter from Supabase ---------- */
(async function loadLetter() {
  try {
    const content = await fetchLetter();
    if (content) {
      letterBody.textContent = content;
    } else {
      letterBody.textContent = "[letter not found — check your Supabase table / keys]";
    }
  } catch (err) {
    console.error(err);
    letterBody.textContent = "[could not load letter — check console]";
  }
})();

/* ---------- Load letter from Supabase ---------- */
(async function loadLetter() {
  try {
    const content = await fetchLetter();
    if (content) {
      letterBody.textContent = content;
    } else {
      letterBody.textContent =
        "[letter not found — check your Supabase table / keys]";
    }
  } catch (err) {
    console.error(err);
    letterBody.textContent =
      "[could not load letter — check console]";
  }
})();
