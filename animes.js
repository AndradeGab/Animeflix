const animes = {

    "Dragon Ball Z": {
        categoria: "classicos",
        nota: "8.8",
        genero: "Ação",
        episodios: "291 eps",
        imagem: "dubimagens/dbzcover.webp",
        videoModal: "https://www.youtube.com/embed/bbCQ-XiXKbo?autoplay=1&rel=0",
        descricao: "Goku enfrenta inimigos cada vez mais poderosos para proteger a Terra. Entre Saiyajins, Androides, Cell e Majin Boo, a batalha pelo planeta nunca termina."
    },

    "Yu-Gi-Oh!": {
        categoria: "classicos",
        nota: "8.3",
        genero: "Ação, Jogos",
        episodios: "224 eps",
        imagem: "dubimagens/yugioh.webp",
        videoModal: "https://www.youtube.com/embed/1rzkhAxnIQ0?autoplay=1&rel=0",
        descricao: "Yugi Muto resolve o Enigma do Milênio e desperta o espírito de um antigo faraó. Juntos enfrentam duelos que colocam em risco o destino do mundo."
    },

    "Yu Yu Hakusho": {
        categoria: "classicos",
        nota: "8.9",
        genero: "Ação, Sobrenatural",
        episodios: "112 eps",
        imagem: "dubimagens/yuyuhakusho_1.webp",
        videoModal: "https://www.youtube.com/embed/fUe0ju0lPhk?autoplay=1&rel=0",
        descricao: "Após morrer salvando uma criança, Yusuke Urameshi recebe uma segunda chance e se torna um Detetive Espiritual responsável por combater ameaças sobrenaturais."
    },

    "Cavaleiros do Zodíaco": {
        categoria: "classicos",
        nota: "8.5",
        genero: "Ação, Mitologia",
        episodios: "114 eps",
        imagem: "dubimagens/cavaleiros.webp",
        videoModal: "https://www.youtube.com/embed/FBWf5PUnboY?autoplay=1&rel=0",
        descricao: "Seiya e seus companheiros vestem armaduras sagradas inspiradas nas constelações para proteger Atena e enfrentar deuses e guerreiros lendários."
    },

    "Dragon Ball GT": {
        categoria: "classicos",
        nota: "6.8",
        genero: "Ação, Aventura",
        episodios: "64 eps",
        imagem: "dubimagens/dbgt.webp",
        videoModal: "https://www.youtube.com/embed/BEFONb3gwcc?autoplay=1&rel=0",
        descricao: "Transformado novamente em criança, Goku embarca em uma jornada espacial para recuperar as Esferas do Dragão de Estrelas Negras."
    },

    "Samurai X": {
        categoria: "classicos",
        nota: "8.5",
        genero: "Ação, Samurai",
        episodios: "95 eps",
        imagem: "dubimagens/samuraix.webp",
        videoModal: "https://www.youtube.com/embed/SFgdHRcE4xA?autoplay=1&rel=0",
        descricao: "Kenshin Himura, um lendário assassino do passado, promete nunca mais matar e tenta construir uma nova vida protegendo os inocentes."
    },

    "Naruto": {
        categoria: "classicos",
        nota: "8.4",
        genero: "Ação, Ninja",
        episodios: "220 eps",
        imagem: "dubimagens/naruto.webp",
        videoModal: "https://www.youtube.com/embed/2NOlxufqR9Y?autoplay=1&rel=0",
        descricao: "Naruto Uzumaki sonha em se tornar Hokage e conquistar o respeito de sua vila enquanto carrega dentro de si a poderosa Raposa de Nove Caudas."
    },

    "Saga de Hades": {
        categoria: "classicos",
        nota: "8.7",
        genero: "Ação, Mitologia",
        episodios: "31 eps",
        imagem: "dubimagens/CDZSHInfierno.webp",
        videoModal: "https://www.youtube.com/embed/A6XhGhAY8UM?autoplay=1&rel=0",
        descricao: "Os Cavaleiros de Atena enfrentam sua batalha mais difícil ao desafiar Hades e atravessar os perigos do submundo."
    },

    "Zatch Bell": {
        categoria: "classicos",
        nota: "8.0",
        genero: "Ação, Fantasia",
        episodios: "150 eps",
        imagem: "dubimagens/zatch.webp",
        videoModal: "https://www.youtube.com/embed/fCBcL7tu5DM?autoplay=1&rel=0",
        descricao: "Kiyo Takamine encontra Zatch Bell, uma misteriosa criança que participa de uma disputa entre mamodos para decidir o próximo rei de seu mundo."
    },

    "Avatar A Lenda de Aang": {
        categoria: "classicos",
        nota: "9.3",
        genero: "Aventura, Fantasia",
        episodios: "61 eps",
        imagem: "dubimagens/Avatar_Aang.webp",
        videoModal: "https://www.youtube.com/embed/nyqai9_TW1w?autoplay=1&rel=0",
        descricao: "Após despertar de um século congelado, Aang precisa dominar os quatro elementos e restaurar o equilíbrio entre as nações."
    },
    "Kill Blue Dublado": {
        categoria: "atuais",
        nota: "8.1",
        genero: "Ação, Comédia",
        episodios: "Em lançamento",
        imagem: "dubimagens/Kill_Blue.webp",
        videoModal: "https://www.youtube.com/embed/1zgsM9fC61M?autoplay=1&rel=0",
        descricao: "Juzo Ogami é um assassino profissional que, após ser envenenado, volta à aparência de um adolescente e precisa se infiltrar em uma escola."
    },

    "One Punch Man": {
        categoria: "atuais",
        nota: "8.7",
        genero: "Ação, Comédia",
        episodios: "24 eps",
        imagem: "dubimagens/one punch man.jpg",
        videoModal: "https://www.youtube.com/embed/6oWZJhX_kY0?autoplay=1&rel=0",
        descricao: "Saitama treinou tanto que ficou careca e agora derrota qualquer inimigo com apenas um soco, tornando sua vida incrivelmente entediante."
    },

    "Dandadan": {
        categoria: "atuais",
        nota: "8.8",
        genero: "Ação, Sobrenatural",
        episodios: "24 eps",
        imagem: "dubimagens/dandandan.webp",
        videoModal: "https://www.youtube.com/embed/NULt8zvlCBY?autoplay=1&rel=0",
        descricao: "Momo e Okarun mergulham em um mundo onde fantasmas e alienígenas existem ao mesmo tempo, enfrentando ameaças absurdas e perigosas."
    },

    "One Piece": {
        categoria: "atuais",
        nota: "9.2",
        genero: "Aventura, Shounen",
        episodios: "1100+ eps",
        imagem: "dubimagens/onepiece.webp",
        videoModal: "https://www.youtube.com/embed/KNwbF78hiUw?autoplay=1&rel=0",
        descricao: "Monkey D. Luffy reúne uma tripulação de piratas para encontrar o lendário tesouro One Piece e se tornar o Rei dos Piratas."
    },

    "Dragon Ball Super": {
        categoria: "atuais",
        nota: "8.3",
        genero: "Ação, Shounen",
        episodios: "131 eps",
        imagem: "dubimagens/dragon-ball-super.webp",
        videoModal: "https://www.youtube.com/embed/DkraSCNxeX4?autoplay=1&rel=0",
        descricao: "Após a derrota de Majin Boo, Goku e seus amigos enfrentam deuses da destruição, guerreiros de outros universos e novas transformações."
    },

    "Full Metal Alchemist Brotherhood": {
        categoria: "atuais",
        nota: "9.1",
        genero: "Aventura, Ação, Fantasia",
        episodios: "64 eps",
        imagem: "dubimagens/fullmetal.webp",
        videoModal: "https://www.youtube.com/embed/EEJVPyE7zp8?autoplay=1&rel=0",
        descricao: "Fullmetal Alchemist: Brotherhood segue a jornada dos irmãos alquimistas Edward e Alphonse Elric. Após uma tentativa fracassada e proibida de reviver a mãe falecida, Ed perde uma perna e Al perde todo o seu corpo. Para salvar o irmão, Ed sacrifica seu braço direito e sela a alma de Al em uma grande armadura metálica."
    },

    "Kimetsu No Yaiba": {
        categoria: "atuais",
        nota: "8.8",
        genero: "Ação, Fantasia",
        episodios: "63 eps",
        imagem: "dubimagens/Kimetsu_no_Yaiba.webp",
        videoModal: "https://www.youtube.com/embed/TJwpEQ6HPbY?autoplay=1&rel=0",
        descricao: "Após sua família ser massacrada por demônios, Tanjiro se torna um Caçador de Demônios para salvar sua irmã Nezuko."
    },

    "My Hero Academia": {
        categoria: "atuais",
        nota: "8.4",
        genero: "Ação, Super-heróis",
        episodios: "159+ eps",
        imagem: "dubimagens/bokunohero.webp",
        videoModal: "https://www.youtube.com/embed/ECE6NmBfv9A?autoplay=1&rel=0",
        descricao: "Izuku Midoriya nasceu sem poderes em um mundo de heróis, mas recebe a chance de herdar a individualidade do maior herói de todos."
    },

    "Attack On Titan": {
        categoria: "atuais",
        nota: "9.9",
        genero: "Ação, Drama",
        episodios: "94 eps",
        imagem: "dubimagens/shingeki.webp",
        videoModal: "https://www.youtube.com/embed/4qm8366hAeI?autoplay=1&rel=0",
        descricao: "A humanidade vive cercada por muralhas para se proteger dos Titãs, mas uma tragédia muda para sempre a vida de Eren Yeager."
    },

    "Jujutsu Kaisen": {
        categoria: "atuais",
        nota: "9.7",
        genero: "Ação, Sobrenatural",
        episodios: "47 eps",
        imagem: "dubimagens/jujutsu.webp",
        videoModal: "https://www.youtube.com/embed/ZkCwGpYP3ik?autoplay=1&rel=0",
        descricao: "Yuji Itadori se torna hospedeiro da maldição mais poderosa do mundo e entra para a escola de feiticeiros Jujutsu."
    },

    "Kill Blue Legendado": {
        categoria: "semanais",
        nota: "8.1",
        genero: "Ação, Comédia",
        episodios: "Em lançamento",
        imagem: "dubimagens/Kill_Blue.webp",
        video: "https://player.vimeo.com/video/1198055548?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198055548",
        descricao: "Oogami Juzo é um assassino profissional mas volta a ser apenas um adolescente. Agora ele precisa encarar a vida acadêmica."
    },

    "Rooster Fighter": {
        categoria: "semanais",
        nota: "8.0",
        genero: "Ação, Comédia",
        episodios: "Em lançamento",
        imagem: "legimagens/Rooster_Fighter.webp",
        video: "https://player.vimeo.com/video/1198057840?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198057840",
        descricao: "Keiji é um galo que luta para proteger sua cidade de ameaças sobrenaturais, enfrentando monstros em batalhas absurdas e cheias de humor."
    },

    "Witch Hat Atelier": {
        categoria: "semanais",
        nota: "9.0",
        genero: "Fantasia, Aventura",
        episodios: "Em lançamento",
        imagem: "legimagens/1178407.webp",
        video: "https://player.vimeo.com/video/1198066126?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198066126",
        descricao: "Coco é uma garota comum que sonha em se tornar bruxa e acaba descobrindo segredos que mudarão sua vida para sempre."
    },

    "Akane-Banashi": {
        categoria: "semanais",
        nota: "8.7",
        genero: "Drama, Arte",
        episodios: "Em lançamento",
        imagem: "legimagens/filters_quality(95)format(webp).webp",
        video: "https://player.vimeo.com/video/1198066818?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198066818",
        descricao: "Akane Osaki busca se tornar uma mestre do Rakugo para honrar o nome de seu pai e provar seu valor diante da elite da arte."
    },

    "Daemons of The Shadow Realm": {
        categoria: "semanais",
        nota: "8.8",
        genero: "Fantasia, Sobrenatural",
        episodios: "Em lançamento",
        imagem: "legimagens/daemons-of-the-shadow-realm-anime-announced-teaser-visual-v0-1fysjqt0h5bf1.webp",
        video: "https://player.vimeo.com/video/1198067610?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198067610",
        descricao: "Yuru e Asa são irmãos destinados a governar seres sobrenaturais conhecidos como Daemons e acabam envolvidos em uma grande conspiração."
    },

    "Agents of the Four Seasons": {
        categoria: "semanais",
        nota: "8.5",
        genero: "Fantasia, Romance",
        episodios: "Em lançamento",
        imagem: "legimagens/Agents_of_the_Four_Seasons_-_Dance_of_Spring.webp",
        video: "https://player.vimeo.com/video/1198068443?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198068443",
        descricao: "Hinagiku retorna após dez anos desaparecida para restaurar a Primavera e preservar o equilíbrio das estações."
    },

    "MAO": {
        categoria: "semanais",
        nota: "8.4",
        genero: "Sobrenatural, Mistério",
        episodios: "Em lançamento",
        imagem: "legimagens/mao.webp",
        video: "https://player.vimeo.com/video/1198068880?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198068880",
        descricao: "Nanoka viaja no tempo e conhece Mao, um exorcista amaldiçoado. Juntos investigam mistérios ligados ao sobrenatural."
    },

    "Nippon Sangoku": {
        categoria: "semanais",
        nota: "8.6",
        genero: "Militar, Drama",
        episodios: "Em lançamento",
        imagem: "legimagens/nippon.webp",
        video: "https://player.vimeo.com/video/1198069494?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198069494",
        descricao: "Em um Japão pós-apocalíptico dividido por conflitos, Aoteru Misumi busca reunificar a nação através de sua genialidade estratégica."
    },

    "Snowball Earth": {
        categoria: "semanais",
        nota: "9.0",
        genero: "Suspense, Psicológico",
        episodios: "Em lançamento",
        imagem: "legimagens/SNOWBALL_EARTH.webp",
        video: "https://player.vimeo.com/video/1198071110?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198071110",
        descricao: "Após anos em sono profundo, Tetsuo retorna e encontra a Terra completamente congelada depois de uma invasão alienígena."
    },

    "Liar Game": {
        categoria: "semanais",
        nota: "8.7",
        genero: "Ficção, Ação",
        episodios: "Em lançamento",
        imagem: "legimagens/liar game.jpg",
        video: "https://player.vimeo.com/video/1198071570?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198071570",
        descricao: "Nao Kanzaki entra em um jogo mortal de mentiras e manipulação, contando apenas com a ajuda do ex-golpista Akiyama."
    },

    "Jujutsu Kaisen 3": {
        categoria: "legendados",
        nota: "8.9",
        genero: "Ação, Sobrenatural",
        episodios: "Em lançamento",
        imagem: "legimagens/jujutsu kaisen 3.webp",
        video: "https://player.vimeo.com/video/1198752769?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198752769",
        descricao: "A terceira temporada adapta o arco do Jogo do Abate, onde Yuji e seus aliados enfrentam uma batalha mortal criada por Kenjaku."
    },

    "Dr. Stone: Science Future": {
        categoria: "legendados",
        nota: "8.8",
        genero: "Aventura, Sci-Fi",
        episodios: "Em lançamento",
        imagem: "legimagens/Dr._Stone_Science_Future_Key_Visual_Part_3.webp",
        video: "https://player.vimeo.com/video/1198074826?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198074826",
        descricao: "Senku continua sua missão de reconstruir a civilização usando a ciência para desvendar mistérios e avançar a humanidade."
    },

    "Classroom of the Elite 4": {
        categoria: "legendados",
        nota: "8.8",
        genero: "Psicológico, Drama",
        episodios: "Em lançamento",
        imagem: "legimagens/ayanokoji.webp",
        video: "https://player.vimeo.com/video/1198076263?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198076263",
        descricao: "Ayanokoji continua manipulando os bastidores da escola enquanto enfrenta novas disputas entre as classes."
    },

    "Dorohedoro 2": {
        categoria: "legendados",
        nota: "8.7",
        genero: "Ação, Fantasia",
        episodios: "Em lançamento",
        imagem: "legimagens/dorohedoro.webp",
        video: "https://player.vimeo.com/video/1198078803?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198078803",
        descricao: "Caiman continua sua busca por respostas enquanto enfrenta feiticeiros em um mundo brutal e caótico."
    },

    "That Time I Got Reincarnated as a Slime 4": {
        categoria: "legendados",
        nota: "8.8",
        genero: "Isekai, Fantasia",
        episodios: "Em lançamento",
        imagem: "legimagens/slime.webp",
        video: "https://player.vimeo.com/video/1198081013?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198081013",
        descricao: "Rimuru enfrenta intrigas políticas e novas ameaças enquanto fortalece a nação de Tempest."
    },

    "Ascendance of a Bookworm 4": {
        categoria: "legendados",
        nota: "8.9",
        genero: "Fantasia, Slice of Life",
        episodios: "Em lançamento",
        imagem: "legimagens/book.jpg",
        video: "https://player.vimeo.com/video/1198081697?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198081697",
        descricao: "Myne continua sua jornada para espalhar livros em um mundo onde a leitura é um privilégio raro."
    },

    "Wistoria: Wand And Sword": {
        categoria: "legendados",
        nota: "8.4",
        genero: "Fantasia, Ação",
        episodios: "12 eps",
        imagem: "legimagens/wistoria.jpg",
        video: "https://player.vimeo.com/video/1198087014?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198087014",
        descricao: "Will Serfort desafia o mundo da magia usando apenas sua força física e habilidade com espadas."
    },

    "Frieren: Beyond Journey's End": {
        categoria: "legendados",
        nota: "9.4",
        genero: "Fantasia, Drama",
        episodios: "28 eps",
        imagem: "legimagens/frieren.webp",
        video: "https://player.vimeo.com/video/1198087863?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198087863",
        descricao: "Após derrotar o Rei Demônio, Frieren inicia uma jornada para compreender melhor os humanos e o valor do tempo."
    },

    "Blue Lock": {
        categoria: "legendados",
        nota: "8.4",
        genero: "Esporte, Drama",
        episodios: "38 eps",
        imagem: "legimagens/BLUELOCK.webp",
        video: "https://player.vimeo.com/video/1198089011?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198089011",
        descricao: "300 atacantes disputam um treinamento extremo para se tornar o artilheiro definitivo do futebol japonês."
    },
    "Bleach": {
        categoria: "topAnimes",
        nota: "8.7",
        genero: "Ação, Shounen",
        episodios: "366 eps",
        imagem: "topimagens/bleach.webp",
        video: "https://player.vimeo.com/video/1198411595?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198411595",
        descricao: "Bleach acompanha Ichigo Kurosaki, um estudante capaz de ver espíritos que se torna um Shinigami para proteger humanos e almas."
    },

    "Your Name": {
        categoria: "topFilmes",
        nota: "9.1",
        genero: "Romance, Drama",
        duracao: "107 min",
        imagem: "topimagens/yourname.webp",
        video: "https://player.vimeo.com/video/1198415568?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198415568",
        descricao: "Mitsuha e Taki passam a trocar de corpos misteriosamente, criando um laço que desafia o tempo e a distância."
    },

    "A Viagem de Chihiro": {
        categoria: "topFilmes",
        nota: "9.3",
        genero: "Fantasia, Aventura",
        duracao: "125 min",
        imagem: "topimagens/chihiro.webp",
        video: "https://player.vimeo.com/video/1198421069?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198421069",
        descricao: "Chihiro entra em um mundo espiritual e precisa encontrar uma forma de salvar seus pais."
    },

    "Meu Amigo Totoro": {
        categoria: "topFilmes",
        nota: "8.9",
        genero: "Fantasia, Família",
        duracao: "86 min",
        imagem: "topimagens/Meu_Amigo_Totoro.webp",
        video: "https://player.vimeo.com/video/1198422680?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198422680",
        descricao: "Duas irmãs descobrem criaturas mágicas da floresta e fazem amizade com o gentil Totoro."
    },

    "Chainsaw Man: Arco da Reze": {
        categoria: "topFilmes",
        nota: "8.9",
        genero: "Ação, Sobrenatural",
        duracao: "100 min",
        imagem: "topimagens/Chainsaw-Man-The-Movie-Reze-Arc-JG01_FIN-copy.jpg",
        video: "https://player.vimeo.com/video/1198426070?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198426070",
        descricao: "Denji conhece Reze, mas o romance rapidamente se transforma em uma batalha mortal."
    },

    "Jujutsu Kaisen 0": {
        categoria: "topFilmes",
        nota: "8.8",
        genero: "Ação, Sobrenatural",
        duracao: "105 min",
        imagem: "topimagens/jujutsu 0.webp",
        video: "https://player.vimeo.com/video/1198748130?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198748130",
        descricao: "Yuta Okkotsu entra para a Escola Jujutsu enquanto tenta controlar a poderosa maldição de Rika."
    },

    "Dragon Ball Super: Broly": {
        categoria: "topFilmes",
        nota: "8.9",
        genero: "Ação, Shounen",
        duracao: "100 min",
        imagem: "topimagens/dragon ball super broly.webp",
        video: "https://player.vimeo.com/video/1198430882?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198430882",
        descricao: "Goku e Vegeta enfrentam Broly, um Saiyajin de poder assustador."
    },

    "A Voz do Silêncio": {
        categoria: "topFilmes",
        nota: "9.2",
        genero: "Drama, Romance",
        duracao: "130 min",
        imagem: "topimagens/2068130.jpg",
        video: "https://player.vimeo.com/video/1198432040?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198432040",
        descricao: "Um jovem busca redenção pelos erros que cometeu contra uma colega surda."
    },

    "Princesa Mononoke": {
        categoria: "topFilmes",
        nota: "9.2",
        genero: "Fantasia, Aventura",
        duracao: "134 min",
        imagem: "topimagens/princesa.webp",
        video: "https://player.vimeo.com/video/1198750230?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198750230",
        descricao: "Ashitaka fica preso em uma guerra entre humanos e espíritos da natureza."
    },

    "Dragon Ball Super: Super Hero": {
        categoria: "topFilmes",
        nota: "8.5",
        genero: "Ação, Comédia",
        duracao: "100 min",
        imagem: "topimagens/Dragon_Ball_Super-_Super_Hero.webp",
        video: "https://player.vimeo.com/video/1198434589?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198434589",
        descricao: "Piccolo e Gohan enfrentam uma nova ameaça criada pelo Exército Red Ribbon."
    },

    "Naruto: The Last": {
        categoria: "topFilmes",
        nota: "8.4",
        genero: "Romance, Ação",
        duracao: "112 min",
        imagem: "topimagens/The_Last_Naruto_the_Movie.webp",
        video: "https://player.vimeo.com/video/1198435928?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198435928",
        descricao: "Naruto precisa impedir a destruição da Terra enquanto descobre seus sentimentos por Hinata."
    },

    "Your Lie in April": {
        categoria: "emocionantes",
        nota: "9.9",
        genero: "Drama, Romance",
        episodios: "22 eps",
        imagem: "topimagens/your-lie-in-april.webp",
        video: "https://player.vimeo.com/video/1198438439?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198438439",
        descricao: "Kousei Arima perde a capacidade de ouvir sua própria música após a morte da mãe, mas sua vida muda ao conhecer a violinista Kaori Miyazono."
    },

    "Angel Beats!": {
        categoria: "emocionantes",
        nota: "9.5",
        genero: "Drama, Sobrenatural",
        episodios: "13 eps",
        imagem: "topimagens/angel.webp",
        video: "https://player.vimeo.com/video/1198441394?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198441394",
        descricao: "Otonashi desperta em uma escola no pós-vida e descobre um mundo onde jovens lidam com arrependimentos e traumas."
    },

    "Ano Hana": {
        categoria: "emocionantes",
        nota: "9.0",
        genero: "Drama, Slice of Life",
        episodios: "11 eps",
        imagem: "topimagens/anohana.webp",
        video: "https://player.vimeo.com/video/1198439712?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198439712",
        descricao: "Anos após a morte de Menma, seus antigos amigos precisam enfrentar o passado e realizar seu desejo esquecido."
    },

    "Violet Evergarden": {
        categoria: "emocionantes",
        nota: "9.1",
        genero: "Drama, Fantasia",
        episodios: "13 eps",
        imagem: "topimagens/violet.webp",
        video: "https://player.vimeo.com/video/1198442967?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198442967",
        descricao: "Uma ex-soldado busca compreender o significado das palavras 'eu te amo' enquanto escreve cartas para outras pessoas."
    },

    "Clannad": {
        categoria: "emocionantes",
        nota: "8.8",
        genero: "Drama, Romance",
        episodios: "47 eps",
        imagem: "topimagens/clannad.webp",
        video: "https://player.vimeo.com/video/1198444266?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198444266",
        descricao: "Tomoya encontra novos motivos para viver ao conhecer Nagisa e construir laços que mudarão sua vida."
    },

    "Cyberpunk Edgerunners": {
        categoria: "emocionantes",
        nota: "8.9",
        genero: "Ação, Drama",
        episodios: "10 eps",
        imagem: "topimagens/Cyberpunk_mercenarios.webp",
        video: "https://player.vimeo.com/video/1198445859?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198445859",
        descricao: "David Martinez tenta sobreviver em Night City enquanto persegue sonhos cada vez mais perigosos."
    },

    "Plastic Memories": {
        categoria: "emocionantes",
        nota: "8.8",
        genero: "Drama, Romance",
        episodios: "13 eps",
        imagem: "topimagens/plastic.webp",
        video: "https://player.vimeo.com/video/1198743345?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198743345",
        descricao: "Tsukasa trabalha recuperando androides prestes a perder suas memórias e conhece a gentil Giftia Isla."
    },

    "Túmulo dos Vagalumes": {
        categoria: "emocionantes",
        nota: "9.4",
        genero: "Drama, Guerra",
        episodios: "Filme",
        duracao: "89 minutos",
        imagem: "topimagens/vagalumes.webp",
        video: "https://player.vimeo.com/video/1198744687?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198744687",
        descricao: "Dois irmãos lutam para sobreviver durante os últimos meses da Segunda Guerra Mundial no Japão."
    },

    "Eu Quero Comer o Seu Pâncreas": {
        categoria: "emocionantes",
        nota: "9.1",
        genero: "Drama, Romance",
        episodios: "Filme",
        duracao: "108 minutos",
        imagem: "topimagens/pancreas.webp",
        video: "https://player.vimeo.com/video/1198747000?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198747000",
        descricao: "Um estudante introvertido descobre o segredo de uma colega com uma doença terminal e passa a acompanhá-la."
    },

    "Orange": {
        categoria: "emocionantes",
        nota: "8.6",
        genero: "Drama, Romance",
        episodios: "13 eps",
        imagem: "topimagens/Orange.webp",
        video: "https://player.vimeo.com/video/1198751303?muted=1&loop=1&background=1",
        videoModal: "https://player.vimeo.com/video/1198751303",
        descricao: "Naho recebe cartas vindas do futuro tentando impedir uma tragédia envolvendo seu colega Kakeru."
    }

}

const top10 = Object.entries(animes)
    .filter(([nome, anime]) =>
        anime.categoria !== "topFilmes" &&
        anime.categoria !== "emocionantes"
    )
    .sort((a, b) => parseFloat(b[1].nota) - parseFloat(a[1].nota))
    .slice(0, 10);
