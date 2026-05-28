// =========================
// CARROSSEL
// =========================

const containers = document.querySelectorAll('.container');

containers.forEach(container => {

    const carrossel = container.querySelector('.carrossel');
    const esquerda = container.querySelector('.esquerda');
    const direita = container.querySelector('.direita');

    function atualizarSetas() {

        if (carrossel.scrollLeft < 50) {
            esquerda.style.opacity = '0';
            esquerda.style.pointerEvents = 'none';
        } else {
            esquerda.style.opacity = '1';
            esquerda.style.pointerEvents = 'all';
        }

        if (
            carrossel.scrollLeft + carrossel.clientWidth >= carrossel.scrollWidth - 50
        ) {
            direita.style.opacity = '0';
            direita.style.pointerEvents = 'none';
        } else {
            direita.style.opacity = '1';
            direita.style.pointerEvents = 'all';
        }
    }

    direita.addEventListener('click', () => {
        carrossel.scrollLeft += 300;
    });

    esquerda.addEventListener('click', () => {
        carrossel.scrollLeft -= 300;
    });

    carrossel.addEventListener('scroll', atualizarSetas);

    atualizarSetas();
});


// =========================
// VÍDEOS + SOM GLOBAL
// =========================

const cards = document.querySelectorAll(".dubcard");

let audioLiberado = false;

cards.forEach(card => {

    const video = card.querySelector(".preview");
    const botaoSom = card.querySelector(".som-btn");

    if (!video || !botaoSom) return;

    video.muted = true;

    // HOVER ENTRA
    card.addEventListener("mouseenter", async () => {

        try {

            video.currentTime = 0;

            const volume = video.dataset.volume;

            if (volume) {
                video.volume = Number(volume);
            }

            video.muted = !audioLiberado;

            await video.play();

        } catch (erro) {
            console.log("Erro ao iniciar vídeo");
        }

    });

    // HOVER SAI
    card.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });

    // BOTÃO DE SOM GLOBAL
    botaoSom.addEventListener("click", (e) => {

        e.stopPropagation();

        audioLiberado = !audioLiberado;

        document.querySelectorAll(".preview").forEach(v => {
            v.muted = !audioLiberado;
        });

        document.querySelectorAll(".som-btn i").forEach(icon => {
            icon.className = audioLiberado
                ? "bi bi-volume-up-fill"
                : "bi bi-volume-mute-fill";
        });

    });

});


// =========================
// TELA DE ENTRADA
// =========================

const entrada = document.getElementById("entrada");
const entrar = document.getElementById("entrar");

if (entrada && entrar) {

    entrar.addEventListener("click", () => {

        entrada.classList.add("sumir");

        setTimeout(() => {
            entrada.style.display = "none";
        }, 1000);

    });

}