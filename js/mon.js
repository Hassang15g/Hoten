let navbar =document.querySelector('.navbar')

let Sharm= document.querySelector("#Sharm");

Sharm.onclick= () =>{
    window.open("../Sharm/meum.html" , '_self')
}


document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let loginForm =document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active'); 
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm=document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active'); 
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    
}


window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let themeBtn =document.querySelector('#theme-btn');
themeBtn.onclick = () =>{

    themeBtn.classList.toggle('fa-sun');
    themeBtn.classList.remove('fa-moon');
    

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add("active")
    }else{
        document.body.classList.remove("active")
        themeBtn.classList.remove('fa-sun');
        themeBtn.classList.toggle('fa-moon');

    }


}

var swiper = new Swiper(".gallery-slider", {
    loop:true,
    effect: "coverflow",
    slidesPerView: "auto",
    centeredSlides: true,
    grabCursor: true,
    coverflowEffect: {
       rotate: 0,
       stretch: 0,
       depth: 100,
       modifier: 2,
       slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
      },
});



