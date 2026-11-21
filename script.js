
const openingScreen = document.getElementById("openingScreen");
const letterScreen = document.getElementById("letterScreen");

const openButton = document.getElementById("openButton");
const backButton = document.getElementById("backButton");

// ABRIR CARTINHA
openButton.addEventListener("click", () => {
    openingScreen.classList.add("hidden");
    letterScreen.classList.remove("hidden");
    const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

music.play().then(() => {
    musicButton.style.display = "block";
}).catch(() => {
    musicButton.style.display = "block";
});

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// VOLTAR AO INÍCIO
backButton.addEventListener("click", () => {
    letterScreen.classList.add("hidden");
    openingScreen.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// CORAÇÕES FLUTUANTES
const heartsContainer = document.getElementById("hearts");

function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 20) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 700);
musicButton.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicButton.innerHTML = "♫ Pausar música";
    } else {
        music.pause();
        musicButton.innerHTML = "♫ Tocar música";
    }
});
