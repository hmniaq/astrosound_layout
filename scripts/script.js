// Смена темы сайта: темная-светлая
let fl = '.pc'
if(window.innerWidth > 899) {

    let pcTheme = document.querySelector('.pc-theme');

    pcTheme.addEventListener('click', changeTheme, pcTheme);
    
}
else {

    let mobileTheme = document.querySelector('.mob-theme');
    fl = '.mob'

    mobileTheme.addEventListener('click', changeTheme, mobileTheme);

}

let classBtn = fl + '-theme'
let styleLink = document.querySelector('link[data-theme]');

if(localStorage.theme == 'dark' && styleLink.dataset.theme != 'dark') {

    styleLink.dataset.theme = 'dark';
    styleLink.href = './styles/dark-theme.css';
    document.querySelector(classBtn).innerHTML = 'СВЕТЛО';

    let currentPage = window.location.pathname.slice(37, -5);
    if(currentPage == 'contacts'){

        let icons = document.querySelectorAll('.icon');
        icons.forEach((item) => {

            item.src = item.getAttribute('src').slice(0, -10) + '-dark.png'
    
        });
    }

}


else if(localStorage.theme == 'light' && styleLink.dataset.theme != 'light') {
    
    let styleLink = document.querySelector('link[data-theme]');
    styleLink.dataset.theme = 'light';
    styleLink.href = './styles/light-theme.css';
    document.querySelector(classBtn).innerHTML = 'СВЕТЛО';

    let currentPage = window.location.pathname.slice(37, -5);
    if(currentPage == 'contacts'){

        let icons = document.querySelectorAll('.icon');
        icons.forEach((item) => {

            item.src = item.getAttribute('src').slice(0, -9) + '-light.png'
    
        });
    }

}

function changeTheme(btn) {

    let styleLink = document.querySelector('link[data-theme]');
    let currentPage = window.location.pathname.slice(37, -5);
    if(currentPage == 'contacts'){

        let icons = document.querySelectorAll('.icon');
        if(styleLink.dataset.theme == 'light') {
            icons.forEach((item) => {

                item.src = item.getAttribute('src').slice(0, -10) + '-dark.png'
    
            });
        }
        else {
            icons.forEach((item) => {

                item.src = item.getAttribute('src').slice(0, -9) + '-light.png'
    
            });
        }

    }

    if(styleLink.dataset.theme == 'light') {

        styleLink.dataset.theme = 'dark';
        styleLink.href = './styles/dark-theme.css';
        btn.target.innerHTML = 'ТЕМНО';
        localStorage.setItem('theme', 'dark');

    }
    else {

        styleLink.dataset.theme = 'light';
        styleLink.href = './styles/light-theme.css';
        btn.target.innerHTML = 'СВЕТЛО';
        localStorage.setItem('theme', 'light');

    }

}