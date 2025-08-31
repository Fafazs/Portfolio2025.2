const home = document.getElementById('home');
let level = 0;

//API GIT HUB CALL https://api.github.com/users/Fafazs/repos

const mockText = [
    { id: '990247434', name: 'ProjetoEstacionamento', text: 'Texto do estacionamento', src: '../data/projects/estacionamento.png' },
    { id: '987970992', name: 'Beecrowd', text: 'Texto do Beecrowd', src: '../data/projects/beecrowd.png' },
    { id: '978627632', name: 'GodotGame2D', text: 'Texto do Godot', src: '../data/projects/godot.png' },
    { id: '935079999', name: 'ThreejsTransformAnimation', text: 'Texto do Three.js', src: '../data/projects/threeJs.gif' },
    { id: '917328969', name: 'RandomColorPicker', text: 'Texto do color picker', src: '../data/projects/colorpicker.png' },
    { id: '914562486', name: 'SocialMediaProject', text: 'Texto do social media', src: '../data/projects/social.png' },
    { id: '913538963', name: 'CypressTest', text: 'Texto do Cypress', src: '../dataprojects//cypress.png' },
    { id: '880567183', name: 'FormLoginLogic', text: 'Texto do login', src: '../data/projects/login.png' },
    { id: '873282972', name: 'RegisterPagetsx', text: 'Texto do register', src: '../data/projects/register.png' },
    { id: '845284981', name: 'AulaNode', text: 'Texto do node', src: '../data/projects/node.png' },
    { id: '794356093', name: 'Lista', text: 'Texto da lista', src: '../data/projects/lista.png' },
    { id: '771252590', name: 'Aula6BuscaBrutaNextGen', text: 'Texto da busca', src: '../data/projects/busca.png' },
    { id: '760955996', name: 'Aula3OnePageProject', text: 'Texto da one page', src: '../data/projects/onepage.png' },
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
    const h3First = document.createElement('h3');
    //2nd
    const jan2024 = document.createElement('div');
    const h2Second = document.createElement('h2');
    const h3Second = document.createElement('h3');
    //3rd
    const jan2025 = document.createElement('div');
    const h2Third = document.createElement('h2');
    const h3Third = document.createElement('h3');
    //4th
    const fev2025 = document.createElement('div');
    const h2Fourth = document.createElement('h2');
    const h3Fourth = document.createElement('h3');
    //5th
    const junho2025 = document.createElement('div');
    const h2Fifth = document.createElement('h2');
    const h3Fifth = document.createElement('h3');
    //6th
    const atualmente = document.createElement('div');
    const h2Sixth = document.createElement('h2');
    const h3Sixth = document.createElement('h3');


    //Editing Elements Content
    H1.innerHTML = 'Minha Jornada!';
    h2first.innerHTML = "Outubro 2023";
    h2Second.innerHTML = 'Janeiro 2024';
    h2Third.innerHTML = 'Janeiro 2025';
    h2Fourth.innerHTML = 'Fevereiro 2025';
    h2Fifth.innerHTML = 'Junho 2025';
    h2Sixth.innerHTML = 'Atualmente';
    h3First.innerHTML = 'Decidi trocar de Área de atuação e conheci a programação!'
    h3Second.innerHTML = 'Entrei para o curso de Fullstack da Digital College!'
    h3Third.innerHTML = 'Finalizei o curso e aprendi muito na jornada!'
    h3Fourth.innerHTML = 'Ingressei na Unifor buscando fazer ADS, Analise e Desenvolvimento de Sistemas!'
    h3Fifth.innerHTML = 'Finalizei o primeiro Semestre aprovado em todas as cadeiras!'
    h3Sixth.innerHTML = 'Cursando o segundo Semestre e buscando por vagas de estágios!'

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
    //oct2023.append(h3First);
    timeLine.append(jan2024);
    jan2024.append(h2Second);
    //jan2024.append(h3Second);
    timeLine.append(jan2025);
    jan2025.append(h2Third);
    //jan2025.append(h3Third);
    timeLine.append(fev2025);
    fev2025.append(h2Fourth);
    //fev2025.append(h3Fourth);
    timeLine.append(junho2025);
    junho2025.append(h2Fifth);
    //junho2025.append(h3Fifth);
    timeLine.append(atualmente);
    atualmente.append(h2Sixth);
    //atualmente.append(h3Sixth);
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
        const link = document.createElement('a');
        link.textContent = repo.name;
        title.appendChild(link);

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




