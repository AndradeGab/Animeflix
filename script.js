// =========================
// ELEMENTOS GLOBAIS
// =========================

const animeModal = document.getElementById("animeModal");
const fecharModal = document.getElementById("fecharModal");

const modalMidia = document.getElementById("modalMidia");
const modalTitulo = document.getElementById("modalTitulo");
const modalDetalhes = document.getElementById("modalDetalhes");
const modalDescricao = document.getElementById("modalDescricao");


// =========================
// INICIALIZAÇÃO
// =========================

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("sem-scroll");

    iniciarTelaEntrada();
    criarCards();
    iniciarModal();
    iniciarCarrosseis();
    iniciarMenuMobile();

});


// =========================
// CRIAÇÃO DOS CARDS
// =========================

function criarCard(nome, anime) {

    const card = document.createElement("div");

    card.classList.add("dubcard");

    const infoExtra =
        anime.duracao
            ? `🎬 ${anime.duracao}`
            : `📺 ${anime.episodios}`;

    card.innerHTML = `
        <img src="${anime.imagem}" alt="${nome}">

        <div class="overlay">

            <h2>${nome}</h2>

            <div class="anime-info">
                <span>⭐ ${anime.nota}</span>
                <span>🎭 ${anime.genero}</span>
                <span>${infoExtra}</span>
            </div>

            <p>
                ${anime.descricao.substring(0, 90)}...
            </p>

            <a href="#">Ver mais</a>

        </div>
    `;

    card.addEventListener("click", () => {
        abrirModal(nome, anime);
    });

    return card;
}

function criarCards() {

    if (typeof animes === "undefined") return;

    const carrosseis = {

        classicos: document.getElementById("carrosselClassicos"),
        atuais: document.getElementById("carrosselAtuais"),

        semanais: document.getElementById("carrosselSemanais"),
        legendados: document.getElementById("carrosselLegendados"),

        topFilmes: document.getElementById("carrosselTopFilmes"),
        emocionantes: document.getElementById("carrosselEmocionantes")

    };

    // Categorias normais
    for (const nome in animes) {

        const anime = animes[nome];

        const destino = carrosseis[anime.categoria];

        if (destino) {
            destino.appendChild(
                criarCard(nome, anime)
            );
        }

    }

    // TOP 10 ANIMES AUTOMÁTICO
    const top10 = Object.entries(animes)

        .filter(([nome, anime]) =>
            anime.categoria !== "topFilmes" &&
            anime.categoria !== "emocionantes"
        )

        .sort((a, b) =>
            parseFloat(b[1].nota) - parseFloat(a[1].nota)
        )

        .slice(0, 10);

    const carrosselTop =
        document.getElementById("carrosselTopAnimes");

    if (carrosselTop) {

        top10.forEach(([nome, anime]) => {

            carrosselTop.appendChild(
                criarCard(nome, anime)
            );

        });

    }

}


function abrirModal(nome, anime) {

    const infoExtra =
        anime.duracao
            ? `🎬 ${anime.duracao}`
            : `📺 ${anime.episodios}`;

    modalTitulo.textContent = nome;

    modalDetalhes.innerHTML = `
        <span>⭐ ${anime.nota}</span>
        <span>🎭 ${anime.genero}</span>
        <span>${infoExtra}</span>
    `;

    modalDescricao.textContent = anime.descricao;

    modalMidia.innerHTML = `
<iframe
    width="100%"
    height="100%"
    src="${anime.videoModal}"
    title="${nome}"
    frameborder="0"
    allow="autoplay; encrypted-media; picture-in-picture"
    allowfullscreen>
</iframe>
`;

    animeModal.classList.add("ativo");

}

function iniciarModal() {

    if (!animeModal) return;

    fecharModal?.addEventListener("click", fecharModalAnime);

    animeModal.addEventListener("click", (e) => {

        if (e.target === animeModal) {
            fecharModalAnime();
        }

    });

}

function fecharModalAnime() {

    animeModal.classList.remove("ativo");
    modalMidia.innerHTML = "";

}

function iniciarCarrosseis() {

    document.querySelectorAll(".container").forEach(container => {

        const carrossel =
            container.querySelector(".carrossel");

        const esquerda =
            container.querySelector(".esquerda");

        const direita =
            container.querySelector(".direita");

        if (!carrossel || !esquerda || !direita) return;

        function atualizarSetas() {

            esquerda.style.opacity =
                carrossel.scrollLeft < 50 ? "0" : "1";

            esquerda.style.pointerEvents =
                carrossel.scrollLeft < 50 ? "none" : "all";

            direita.style.opacity =
                carrossel.scrollLeft + carrossel.clientWidth >= carrossel.scrollWidth - 50
                    ? "0"
                    : "1";

            direita.style.pointerEvents =
                carrossel.scrollLeft + carrossel.clientWidth >= carrossel.scrollWidth - 50
                    ? "none"
                    : "all";

        }

        direita.addEventListener("click", () => {
            carrossel.scrollLeft += 300;
        });

        esquerda.addEventListener("click", () => {
            carrossel.scrollLeft -= 300;
        });

        carrossel.addEventListener(
            "scroll",
            atualizarSetas
        );

        atualizarSetas();

    });

}

function iniciarTelaEntrada() {

    const entrada = document.getElementById("entrada");
    const entrar = document.getElementById("entrar");

    if (!entrada || !entrar) return;

    if (localStorage.getItem("jaEntrou") === "true") {
        entrada.style.display = "none";

        document.body.classList.remove("sem-scroll");
    }

    entrar.addEventListener("click", () => {
        localStorage.setItem("jaEntrou", "true");

        entrada.classList.add("sumir");

        document.body.classList.remove("sem-scroll");

        setTimeout(() => {
            entrada.style.display = "none";
        }, 1000);

    });

}

function iniciarMenuMobile() {

    const menuBtn = document.querySelector(".menu-mobile");
    const menu = document.querySelector(".menu");

    if (!menuBtn || !menu) return;

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("ativo");
    });

    document.addEventListener("click", (e) => {

        const clicouNoMenu = menu.contains(e.target);
        const clicouNoBotao = menuBtn.contains(e.target);

        if (!clicouNoMenu && !clicouNoBotao) {
            menu.classList.remove("ativo");
        }

    });

}
