const home = document.getElementById('home');
let level = 0;

//API GIT HUB CALL https://api.github.com/users/Fafazs/repos

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
    const H1 = document.createElement('h1');
    const img = document.createElement('img');
    const P = document.createElement('p');

    //Editing Elements Content
    H1.innerHTML = 'Olá, sou o Fabrício!';
    img.src = '../data/portfolioImg2.jfif';
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
    content.appendChild(img);
    content.appendChild(H1);
    content.appendChild(P);
    content.appendChild(navDiv);
    navDiv.appendChild(nav);
    nav.appendChild(buttonBefore);
    nav.appendChild(buttonNext);

    //Adding styles
    home.classList.add('bodyPageOne');
    img.classList.add('myImg');
    backGround.classList.add('backgroundOne');
    content.classList.add('.contentOne');
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
    content.append(timeLine);
    timeLine.append(oct2023);
    oct2023.append(h2first);
    oct2023.append(h3First);
    timeLine.append(jan2024);
    jan2024.append(h2Second);
    jan2024.append(h3Second);
    timeLine.append(jan2025);
    jan2025.append(h2Third);
    jan2025.append(h3Third);
    timeLine.append(fev2025);
    fev2025.append(h2Fourth);
    fev2025.append(h3Fourth);
    timeLine.append(junho2025);
    junho2025.append(h2Fifth);
    junho2025.append(h3Fifth);
    timeLine.append(atualmente);
    atualmente.append(h2Sixth);
    atualmente.append(h3Sixth);
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
    oct2023.classList.add('timeBlock');
    jan2024.classList.add('timeBlock');
    jan2025.classList.add('timeBlock');
    fev2025.classList.add('timeBlock');
    junho2025.classList.add('timeBlock');
    atualmente.classList.add('timeBlock');
    navDiv.classList.add('divNavG');
    nav.classList.add('navG');
    buttonBefore.classList.add('buttonNav');
    buttonNext.classList.add('buttonNav');
}

async function projects() {
    //Starting Page
    home.classList.remove('bodyPageTwo');
    async function getRepos (){
        const username = "Fafazs";
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=created`);
        const repositories = await response.json();
        console.log(repositories)
        return repositories;
    }
    const repos = await getRepos();


    //creating Elements
    const backGround = document.createElement('div');
    const content = document.createElement('div');
    const H1 = document.createElement('h1');
    const projects = document.createElement('div');

    //Editing Elements Content

    H1.innerHTML = 'Meus Projetos!';
    projects.innerHTML = repos
      .map(repo => `
        <div class = "project">
          <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
          <p>${repo.description || "Sem descrição"}</p>
          <small>Linguagem: ${repo.language || "Não informada"}</small>
        </div>
      `)
      .join("");
    
  


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

function navigate(newLevel) {
    level = newLevel;
    homePage();
}


window.addEventListener('DOMContentLoaded', () => {
    homePage();
})




