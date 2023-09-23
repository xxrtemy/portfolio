
    const nav = document.querySelector('#nav');
    const navBtn = document.querySelector('#nav-btn');
    const navBtnImg =document.querySelector('#nav-btn-img');

    
    navBtn.onclick = () => {
        if (nav.classList.toggle('open')){
            navBtnImg.src = "../img/header/cancel-svgrepo-com.svg";
        } else{
            navBtnImg.src = "../img/header/hamburger-menu-svgrepo-com.svg";
        }
    }
