const home = document.getElementById('home');
let level = 0;

//API GIT HUB CALL https://api.github.com/users/Fafazs/repos

const mockText = [
    {
        id: '990247434', name: 'ProjetoEstacionamento', text: `
        Sistema de estacionamento desenvolvido no primeiro semestre da faculdade. 
        O projeto realiza leitura de placas, gera tickets e identifica veículos com origem nos estados do Sul (SC, PR, RS). 
        Utiliza LocalStorage para persistência dos dados e renderiza em tempo real os veículos no HTML. 
        Inclui cálculo automático do valor da estadia e liberação da saída via interface. 
        Tecnologias: JavaScript, HTML, CSS (VSCode).
         `, src: '../data/projects/estacionamento.png'
    },
    {
        id: '987970992', name: 'Beecrowd', text: `
        Repositório de soluções para problemas da plataforma Beecrowd. 
        Atualmente com foco em desafios de JavaScript, com planos de expandir para outras linguagens como Java. 
        Demonstra raciocínio lógico, boas práticas e evolução contínua na resolução de algoritmos.
        `, src: '../data/projects/beecrowd.png'
    },
    {
        id: '978627632', name: 'GodotGame2D', text: `
        Jogo 2D desenvolvido no primeiro semestre da faculdade como introdução ao engine Godot. 
        Implementação de plataformas móveis, comandos de player, câmera dinâmica, sistema de gravidade, colisões com inimigos, 
        coleta de moedas e interface básica. 
        Tecnologias: Godot Engine, GDScript.
        `, src: '../data/projects/godot.png'
    },
    {
        id: '935079999', name: 'ThreejsTransformAnimation', text: `
        Projeto inicial com a biblioteca Three.js utilizando WebGL e Vite. 
        Criação de objetos 3D, manipulação de posicionamento e escala, agrupamento de elementos e aplicação de animações de rotação nos eixos X e Y. 
        Resultado: cena 3D interativa renderizada no navegador. 
        Tecnologias: Three.js, JavaScript, Vite.
        `, src: '../data/projects/threeJs.gif'
    },
    {
        id: '917328969', name: 'RandomColorPicker', text: `
        Aplicativo simples em React Native para prática de conceitos iniciais. 
        Gera cores aleatórias, exibe o código HEX e altera dinamicamente o background da interface. 
        Tecnologias: React Native, JavaScript.
        `, src: '../data/projects/colorPicker.png'
    },
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
    const h3 = document.createElement('h3');
    const contactH2 = document.createElement('h2');
    const contactInsta = document.createElement('a');
    const contactLink = document.createElement('a');
    const contactGit = document.createElement('a');
    const H1 = document.createElement('h1');
    const P = document.createElement('p');

    //Editing Elements Content
    H1.innerHTML = 'Olá, sou o Fabrício!';
    img.src = '../data/portfolioImg2.jfif';
    h3.innerHTML = 'Entre em contato aqui!';
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
    imgDiv.appendChild(h3);
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
    const p = document.createElement('p');
    const line = document.createElement('div');
    //1st
    const div1 = document.createElement('div');
    const div1H2 = document.createElement('h2');
    const div1P = document.createElement('p');
    //2nd
    const div2 = document.createElement('div');
    const div2H2 = document.createElement('h2');
    const div2P = document.createElement('p');
    const div2Img = document.createElement('img');
    //3rd
    const div3 = document.createElement('div');
    const div3H2 = document.createElement('h2');
    const div3P = document.createElement('p');
    const div3Img = document.createElement('img');
    //4th
    const div4 = document.createElement('div');
    const div4H2 = document.createElement('h2');
    const div4P = document.createElement('p');


    //Editing Elements Content
    H1.innerHTML = 'Minha Jornada!';
    p.innerHTML = '- TimeLine -<br> passe o mouse nos blocos para saber mais!';
    div1H2.innerHTML = "Primeiro contato com programação";
    div2H2.innerHTML = 'Formação em Desenvolvimento Fullstack';
    div3H2.innerHTML = 'Graduação em Análise e Desenvolvimento de Sistemas';
    div4H2.innerHTML = 'Dias atuais e futuro';
    div1P.innerHTML = `Conheci a programação através do Processing e das aulas do The Coding Train, o que despertou meu interesse em seguir carreira na área de tecnologia. 
                         `;
    div2P.innerHTML = `Participei de um curso intensivo de desenvolvimento Fullstack pela Digital College com duração de 1 ano, onde aprendi fundamentos essenciais de HTML, CSS, JavaScript, React, Git, Node.js e SQL.<br><br>
                         Durante esse período, desenvolvi projetos práticos e adquiri autonomia para resolver problemas de forma independente no Visual Studio Code.`;
    div2Img.src = '../data/digitalCollege.png';
    div2Img.alt = 'DigitalCollegeCertificate';

    div3P.innerHTML = `Ingressei no curso presencial de ADS na Universidade de Fortaleza (Unifor), onde concluí o primeiro semestre com aprovação em todas as disciplinas obrigatórias.<br><br>
                         Esse período consolidou minha disciplina de estudo, capacidade de adaptação e interação com outras IDE's.
                         `;
    div3Img.src = '../data/uniforHistorico.png';
    div3Img.alt = 'UniforHistorico';
    div4P.innerHTML = `Atualmente curso o 2º semestre de ADS e continuo expandindo meus conhecimentos por meio de projetos pessoais e acadêmicos.<br><br> Meu objetivo é conquistar uma oportunidade de estágio em desenvolvimento web (frontend, backend ou fullstack)
                         para aplicar na prática as habilidades que venho desenvolvendo e ganhar experiência no mercado de tecnologia.`;

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
    timeLine.append(div1);
    div1.append(div1H2);
    div1.append(div1P);
    timeLine.append(div2);
    div2.append(div2H2);
    div2.append(div2P);
    //div2.append(div2Img);
    timeLine.append(div3);
    div3.append(div3H2);
    div3.append(div3P);
    //div3.append(div3Img);
    timeLine.append(div4);
    div4.append(div4H2);
    div4.append(div4P);
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
    div1.classList.add('timeBlockUp');
    div1H2.classList.add('h2Up');
    div2.classList.add('timeBlockDown');
    div2H2.classList.add('h2Down');
    div3.classList.add('timeBlockUp');
    div3H2.classList.add('h2Up');
    div4.classList.add('timeBlockDown');
    div4H2.classList.add('h2Down');
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
    const divImg = document.createElement('div');
    const languages = document.createElement('img');
    const stats = document.createElement('img');

    //Editing Elements Content

    H1.innerHTML = 'Meus Projetos!';
    languages.src = 'https://github-readme-stats.vercel.app/api/top-langs/?username=Fafazs&layout=compact&langs_count=6&theme=radical';
    stats.src = 'https://github-readme-stats.vercel.app/api?username=Fafazs&show_icons=true&theme=radical&count_private=true';

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
    content.appendChild(divImg);
    divImg.appendChild(stats);
    divImg.appendChild(languages);
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
    divImg.classList.add('divImage');
    projects.classList.add('projectDiv');
    navDiv.classList.add('divNavG');
    nav.classList.add('navG');
    buttonBefore.classList.add('buttonNav');
    buttonNext.classList.add('buttonNav');
}

function createWindow(repo, parentEl) {
    //creating elements
    const overlay = document.createElement('div');
    const modal = document.createElement('div');
    const sec1 = document.createElement('div');
    const part1 = document.createElement('div');
    const part2 = document.createElement('div');
    const closeBtn = document.createElement('button');
    const downLoadbtn = document.createElement('button');
    const copyBtn = document.createElement('button');
    const sec2 = document.createElement('div');
    const sec3 = document.createElement('div');

    //div content
    part1.innerHTML = `
      <h2>${repo.name}</h2>
      <small>${repo.language}</small>
    `;

    closeBtn.textContent = 'X';
    downLoadbtn.innerHTML = `<img src= "../data/dowload.png" > `;
    copyBtn.innerHTML = '<img src= "../data/copiar.png" >';

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
    part2.appendChild(closeBtn);
    part2.appendChild(downLoadbtn);
    part2.appendChild(copyBtn);
    modal.appendChild(sec2);
    modal.appendChild(sec3);

    //download method
    downLoadbtn.addEventListener('click', () => {
        const confirmDownload = confirm(
            "Deseja baixar o arquivo ZIP deste repositório?\nO download será feito diretamente do GitHub."
        );
        if (confirmDownload) {
            const link = document.createElement('a');
            // URL para baixar o ZIP do repositório
            link.href = `${repo.html_url}/archive/refs/heads/${repo.default_branch}.zip`;
            link.download = `${repo.name}.zip`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    });

    //copy method
    copyBtn.addEventListener('click', () => {

        navigator.clipboard.writeText(repo.html_url)
            .then(() => {
                alert("Link copiado com sucesso!");
            })
            .catch(err => {
                console.error("Erro ao copiar:", err);
            });

        copyBtn.innerHTML = '<img src= "../data/checked.png" >';
        copyBtn.disabled = true;
        setTimeout(() => {
            copyBtn.innerHTML = '<img src= "../data/copiar.png" >';
            copyBtn.disabled = false;
        }, 20000);
    })

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




