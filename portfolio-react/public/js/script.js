const navl = document.querySelectorAll('header nav a');
const logolink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuicon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuicon.addEventListener('click', ()=> {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
})

const activep =()=>{

    const header = document.querySelector('header');
    const barbox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    },1100);

    navl.forEach(link =>{
        link.classList.remove('active')
    });

    barbox.classList.remove('active');
    setTimeout(() => {
        barbox.classList.add('active');
    },1100);

    sections.forEach(section =>{
        section.classList.remove('active')
    });  
    
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

navl.forEach((link, idx) => {
    link.addEventListener('click',() => {
        if(!link.classList.contains('active')){
            activep();

            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            },1100);
        }
    });
});

logolink.addEventListener('click',() => {
    if(!navl[0].classList.contains('active')){
        activep();
        navl[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }
})

const resumeB = document.querySelectorAll('.resume-btn');
resumeB.forEach((btn, idx) => {
    btn.addEventListener('click', ()=>{
        const resumeD = document.querySelectorAll('.resume-detail');

        resumeB.forEach(btn => {
            btn.classList.remove('active')
        });
        btn.classList.add('active')

        resumeD.forEach(detail => {
            detail.classList.remove('active')
        });
        resumeD[idx].classList.add('active')
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation  .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-casual .img-slide');
    const portfolioD = document.querySelectorAll('.portfolio-detail');
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
    portfolioD.forEach(detail => {
    detail.classList.remove('active');
    portfolioD[index].classList.add('active');
    });
}

arrowRight.addEventListener('click', ()=> {
    if (index < 3){
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 4;
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', ()=> {
    if (index > 3){
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 let audio; 

function playMusicInLoop() {

    if (!audio) {
        audio = new Audio('js/musica.mp3');
        audio.loop = true; 
    }

    if (audio.paused) {
        audio.play().catch(error => {
            console.error("Errore nella riproduzione dell'audio:", error);
        });
        console.log("Musica avviata.");
    } else {
        audio.pause(); 
    }
}


function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString('it-IT', options);
    const time = now.toLocaleTimeString('it-IT');

    document.getElementById('date').textContent = `Data: ${date}`;
    document.getElementById('time').textContent = `Ora: ${time}`;
}

function generateDays() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysContainer = document.getElementById('days');

    daysContainer.innerHTML = '';

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;

        if (day === now.getDate()) {
            dayElement.classList.add('today');
        }

        daysContainer.appendChild(dayElement);
    }
}

setInterval(updateDateTime, 1000);
updateDateTime();
generateDays();




