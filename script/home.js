const home = document.getElementById('home');
let level = 0;

//API GIT HUB CALL https://api.github.com/users/Fafazs/repos

const mockText = [
    { id: '990247434', name: 'ProjetoEstacionamento', text:`
        Projeto que fiz no primeiro semestre da faculdade, o sistema de um estacionamento de shopping que ao entrar 
        veiculos lê a plâca, gera um ticket e identifica obrigatoriamente placas com a origem de Santa Catarina , Parana
        e Rio Grande do Sul.
        Utilizando do local Storage para armazenar as informações necessarias é possivel renderizar os veiculos armazenados
        numa virtualização do estacionamento no HTML. É possivel liberar a saída dos veículos ao clicar no card deles e calcular o
        valor a ser pago pelo tempo de estadia. 
        Feito com Javascript, Html e Css usando o VScode.
         `,src: '../data/projects/estacionamento.png' },
    { id: '987970992', name: 'Beecrowd', text: `
        Aqui salvo a resolução dos problemas que ja resolucionei pela plataforma do Beecrowd, atualmente tenho resolucionado problemas
        de javascript, mas planejo no futuro me aprofundar em outras linguagens como Java!
        `, src: '../data/projects/beecrowd.png' },
    { id: '978627632', name: 'GodotGame2D', text: `
        Projeto que fiz no primeiro semestre da faculdade, consiste em um jogo de plataforma 2d, foi minha primeira experiência com Godot
        e me diverti muito aprendendo a mecher na plataforma, tive primeiro contato com GDScript e fiz plataformas
        que se movem, comandos do player, objeto de camera2D, gravidade, morte ao cair do mapa e ao enconstar em inimigos ambulantes pelo mapa,
        moedas coletáveis e uma pequena interface
        `, src: '../data/projects/godot.png' },
    { id: '935079999', name: 'ThreejsTransformAnimation', text: `
        Inicindo meus estudos na biblioteca que utiliza webGl para fazer a magia 3D acontecer no javascript, Three.js e Vite.
        Fiz alguns objetos 3D e mechi em seus posicionamentos e tamanhos, adicionei-os em um grupo e modifiquei os valores de rotation
        no eixo X e Y, por fim adicionei a cena para renderizar e consegui um efeito bem legal!
        `, src: '../data/projects/threeJs.gif' },
    { id: '917328969', name: 'RandomColorPicker', text: `
        Projeto que fiz para praticar um pouco do básico de React native, construi um gerador de cor aleatória que 
        retorna o seu Código hex e atualiza a propiedade de backgroundColor da home para mostra-la
        `, src: '../data/projects/colorPicker.png' },
];

function homePage() {
    home.innerHTML = '';

    if (level == 0) {
        greetings();
    }
    if (level == 1) {
        journey();
    }
    if (level == 2) {
        projects();
    }

}

function greetings() {
    //Starting Page
    home.classList.remove('bodyPageFour');

    //Creating Elements
    const backGround = document.createElement('div');
    const content = document.createElement('div');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    const contactDiv = document.createElement('div');
    const contactH2 = document.createElement('h2');
    const contactInsta = document.createElement('a');
    const contactLink = document.createElement('a');
    const contactGit = document.createElement('a');
    const H1 = document.createElement('h1');
    const P = document.createElement('p');

    //Editing Elements Content
    H1.innerHTML = 'Olá, sou o Fabrício!';
    img.src = '../data/portfolioImg2.jfif';
    contactH2.innerHTML = 'Contatos';
    contactInsta.href = 'https://www.instagram.com/fnascimento_77/';
    contactInsta.innerHTML = '<img class="contact" src="../data/instagram.png">';
    contactLink.href = 'https://www.linkedin.com/in/fabricio-nascimento-6ab51b341/';
    contactLink.innerHTML = '<img class="contact" src="../data/linkedin.png">';
    contactGit.href = 'https://github.com/Fafazs';
    contactGit.innerHTML = '<img class="contact" src="../data/github.png">';
    img.alt = 'PictureOfMyself';
    P.innerHTML = "Tenho 22 anos e estou cursando meu segundo semestre em Analise e desenvolvimento de sistemas na Unifor";

    //Creating nav
    const navDiv = document.createElement('div');
    const nav = document.createElement('div');
    const buttonBefore = document.createElement('button');
    buttonBefore.innerHTML = '<'
    buttonBefore.addEventListener('click', () => {
        navigate(2);
    });
    const buttonNext = document.createElement('button');
    buttonNext.innerHTML = '>'
    buttonNext.addEventListener('click', () => {
        navigate(1);
    });

    //Appending elements
    home.appendChild(backGround);
    home.appendChild(content);
    content.appendChild(imgDiv);
    imgDiv.appendChild(img);
    imgDiv.appendChild(contactDiv);
    contactDiv.appendChild(contactH2);
    contactDiv.appendChild(contactInsta);
    contactDiv.appendChild(contactLink);
    contactDiv.appendChild(contactGit);
    content.appendChild(H1);
    content.appendChild(P);
    content.appendChild(navDiv);
    navDiv.appendChild(nav);
    nav.appendChild(buttonBefore);
    nav.appendChild(buttonNext);

    //Adding styles
    home.classList.add('bodyPageOne');
    backGround.classList.add('backgroundOne');
    content.classList.add('.contentOne');
    img.classList.add('myImg');
    imgDiv.classList.add('imgDiv');
    contactDiv.classList.add('contactDiv');
    contactInsta.classList.add('contact');
    contactLink.classList.add('contact');
    contactGit.classList.add('contact');
    H1.classList.add('h1PG1');
    P.classList.add('textPG1');
    navDiv.classList.add('divNavG');
    nav.classList.add('navG');
    buttonBefore.classList.add('buttonNav');
    buttonNext.classList.add('buttonNav');

}

function journey() {
    //Starting Page
    home.classList.remove('bodyPageOne');

    //Creating Elements
    const backGround = document.createElement('div');
    const content = document.createElement('div');
    const H1 = document.createElement('h1');
    const timeLine = document.createElement('div');
    const line = document.createElement('div');
    //1st
    const oct2023 = document.createElement('div');
    const h2first = document.createElement('h2');
    const pFirst = document.createElement('p');
    //2nd
    const jan2024 = document.createElement('div');
    const h2Second = document.createElement('h2');
    const pSecond = document.createElement('p');
    //3rd
    const jan2025 = document.createElement('div');
    const h2Third = document.createElement('h2');
    const pThird = document.createElement('p');
    //4th
    const fev2025 = document.createElement('div');
    const h2Fourth = document.createElement('h2');
    const pFourth = document.createElement('p');
    //5th
    const junho2025 = document.createElement('div');
    const h2Fifth = document.createElement('h2');
    const pFifth = document.createElement('p');
    //6th
    const atualmente = document.createElement('div');
    const h2Sixth = document.createElement('h2');
    const pSixth = document.createElement('p');


    //Editing Elements Content
    H1.innerHTML = 'Minha Jornada!';
    h2first.innerHTML = "Outubro 2023";
    h2Second.innerHTML = 'Janeiro 2024';
    h2Third.innerHTML = 'Janeiro 2025';
    h2Fourth.innerHTML = 'Fevereiro 2025';
    h2Fifth.innerHTML = 'Junho 2025';
    h2Sixth.innerHTML = 'Atualmente';
    pFirst.innerHTML = `Troquei de área de estudo e atuação profissional, ao conhecer colegas da área da tecnologia comecei a estudar programação.
                         O primeiro contato que tive programando foi no app do Processing e acompanhando pela internet aulas do The Coding Train! 
                         `;
    pSecond.innerHTML = `Unindo o útil ao agradável, decidi que iria realmente entrar na área de cabeça e por recomendação de amigos entrei no curso
                          de programação da Digital College, entrando no caminho de aprendizagem do desenvolvimento Fullstack`
    pThird.innerHTML = `Passei um ano nessa caminhada e me entreguei por completo aos estudos, com certeza fui muito bem orientado pelo professor Italo Adler
                          na turma noturna fullStack35. Aprendi o basico para virar um programador no futuro: Html, Css, Javascript, Git,
                          node, banco de dados relacionais e o principal a autonomia de resolver problemas e estar sempre buscando o próximo passo!  
                          `;
    pFourth.innerHTML = `Ainda em busca do próximo passo, decidi entrar para o curso de Analise e Desenvolvimento de Sistemas na Unifor em Fortaleza,
                          ingressei no semestre com um tempo de atraso então preciso recuperar meu tempo de estudo, mão na massa!`
    pFifth.innerHTML = `Finalizei o primeiro Semestre aprovado em todas as cadeiras, o trabalho duro realmente valeu a pena!
                         `
    pSixth.innerHTML = `Atualmente me encontro cursando o segundo semestre de ADS e estou a procura de experiência profissional no mercado de
                          trabalho, busco expandindo meus conhecimentos e não planejo parar por aqui!`

    //Creating nav
    const navDiv = document.createElement('div');
    const nav = document.createElement('div');
    const buttonBefore = document.createElement('button');
    buttonBefore.innerHTML = '<'
    buttonBefore.addEventListener('click', () => {
        navigate(0);
    });
    const buttonNext = document.createElement('button');
    buttonNext.innerHTML = '>'
    buttonNext.addEventListener('click', () => {
        navigate(2);
    });

    //Appending elements
    home.appendChild(backGround);
    home.appendChild(content);
    content.appendChild(H1);
    content.appendChild(timeLine);
    timeLine.appendChild(line);
    timeLine.append(oct2023);
    oct2023.append(h2first);
    oct2023.append(pFirst);
    timeLine.append(jan2024);
    jan2024.append(h2Second);
    jan2024.append(pSecond);
    timeLine.append(jan2025);
    jan2025.append(h2Third);
    jan2025.append(pThird);
    timeLine.append(fev2025);
    fev2025.append(h2Fourth);
    fev2025.append(pFourth);
    timeLine.append(junho2025);
    junho2025.append(h2Fifth);
    junho2025.append(pFifth);
    timeLine.append(atualmente);
    atualmente.append(h2Sixth);
    atualmente.append(pSixth);
    content.appendChild(navDiv);
    navDiv.appendChild(nav);
    nav.appendChild(buttonBefore);
    nav.appendChild(buttonNext);

    //Adding styles
    home.classList.add('bodyPageTwo');
    backGround.classList.add('backgroundTwo');
    content.classList.add('.contentTwo');
    H1.classList.add('h1PG2');
    timeLine.classList.add('timeLine');
    line.classList.add('line');
    oct2023.classList.add('timeBlockUp');
    h2first.classList.add('h2Up');
    jan2024.classList.add('timeBlockDown');
    h2Second.classList.add('h2Down');
    jan2025.classList.add('timeBlockUp');
    h2Third.classList.add('h2Up');
    fev2025.classList.add('timeBlockDown');
    h2Fourth.classList.add('h2Down');
    junho2025.classList.add('timeBlockUp');
    h2Fifth.classList.add('h2Up');
    atualmente.classList.add('timeBlockDown');
    h2Sixth.classList.add('h2Down');
    navDiv.classList.add('divNavG');
    nav.classList.add('navG');
    buttonBefore.classList.add('buttonNav');
    buttonNext.classList.add('buttonNav');
}

async function projects() {
    //Starting Page
    home.classList.remove('bodyPageTwo');
    async function getRepos() {
        const username = "Fafazs";
        const response = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&sort=created`
        );
        const repositories = await response.json();

        // Filter only repos with at least 1 star
        const starredRepos = repositories.filter(repo => repo.stargazers_count > 0);

        console.log(starredRepos);
        return starredRepos;
    }
    const repos = await getRepos();
    //creating Elements
    const backGround = document.createElement('div');
    const content = document.createElement('div');
    const H1 = document.createElement('h1');
    const projects = document.createElement('div');
    const languages = document.createElement('img');

    //Editing Elements Content

    H1.innerHTML = 'Meus Projetos!';
    languages.src = 'https://github-readme-stats.vercel.app/api/top-langs/?username=Fafazs&layout=compact&langs_count=6&theme=radical';

    repos.forEach(repo => {
        const projectEl = document.createElement('div');
        projectEl.classList.add('project');
        projectEl.id = String(repo.id);

        const title = document.createElement('h3');
        title.innerHTML = repo.name;

        const small = document.createElement('small');
        small.textContent = `Linguagem: ${repo.language || 'Não informada'}`;

        projectEl.appendChild(title);
        projectEl.appendChild(small);

        // Clique no card abre a janela; clique no link só abre o GitHub
        projectEl.addEventListener('click', (e) => {
            if (e.target.closest('a')) return;
            createWindow(repo, projectEl);
        });

        projects.appendChild(projectEl);
    });

    //Creating nav
    const navDiv = document.createElement('div');
    const nav = document.createElement('div');
    const buttonBefore = document.createElement('button');
    buttonBefore.innerHTML = '<'
    buttonBefore.addEventListener('click', () => {
        navigate(1);
    });
    const buttonNext = document.createElement('button');
    buttonNext.innerHTML = '>'
    buttonNext.addEventListener('click', () => {
        navigate(0);
    });

    //Appending elements
    home.appendChild(backGround);
    home.appendChild(content);
    content.appendChild(H1);
    content.appendChild(languages);
    content.appendChild(projects);
    content.appendChild(navDiv);
    navDiv.appendChild(nav);
    nav.appendChild(buttonBefore);
    nav.appendChild(buttonNext);

    //Adding styles
    home.classList.add('bodyPageThree');
    backGround.classList.add('backgroundThree');
    content.classList.add('.contentThree');
    H1.classList.add('h1PG3');
    projects.classList.add('projectDiv');
    navDiv.classList.add('divNavG');
    nav.classList.add('navG');
    buttonBefore.classList.add('buttonNav');
    buttonNext.classList.add('buttonNav');
}

function createWindow(repo, parentEl) {
    console.log(parentEl);

    //creating elements
    const overlay = document.createElement('div');
    const modal = document.createElement('div');
    const sec1 = document.createElement('div');
    const part1 = document.createElement('div');
    const part2 = document.createElement('div');
    const closeBtn = document.createElement('button');
    const downLoadbtn = document.createElement('button');
    const sec2 = document.createElement('div');
    const sec3 = document.createElement('div');

    //content
    part1.innerHTML = `
      <h2>${repo.name}</h2>
      <small>${repo.language}</small>
    `;

    closeBtn.textContent = 'X';
    downLoadbtn.textContent = 'L';

    // 🔎 Encontra o mock correto pelo ID
    const mockMatch = mockText.find(item => item.id === parentEl.id);

    // sec2 => imagem personalizada

    sec2.innerHTML = `
        <img src="${mockMatch ? mockMatch.src : '../data/notFound.png'}" ></img>
        `;

    // sec3 => texto do mock
    sec3.innerHTML = `
      <p>${mockMatch ? mockMatch.text : "Texto padrão / não encontrado"}</p>
    `;

    //classlist
    overlay.classList.add('windowOverlay');
    modal.classList.add('windowContent');
    sec1.classList.add('sec1');
    sec2.classList.add('sec2');
    sec3.classList.add('sec3');

    //appending Elements
    document.body.appendChild(overlay);
    overlay.appendChild(modal);
    modal.appendChild(sec1);
    sec1.appendChild(part1);
    sec1.appendChild(part2);
    part2.appendChild(downLoadbtn);
    part2.appendChild(closeBtn);
    modal.appendChild(sec2);
    modal.appendChild(sec3);

    //close methods
    closeBtn.addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
    });
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

function navigate(newLevel) {
    level = newLevel;
    homePage();
}

window.addEventListener('DOMContentLoaded', () => {
    homePage();
})




