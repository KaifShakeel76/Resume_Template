document.getElementById('nav-bar').addEventListener('click', function(e){
    e.preventDefault();
    const target = e.target;
    if(target.classList.contains('sec-home')){
        const id = target.getAttribute('href').slice(1);
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    }
});

document.getElementById('nav-bar').addEventListener('click', function(e){
    e.preventDefault();
    const target = e.target;
    if(target.classList.contains('sec-about')){
        const id = target.getAttribute('href').slice(1);
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    }
});

document.getElementById('nav-bar').addEventListener('click', function(e){
    e.preventDefault();
    const target = e.target;
    if(target.classList.contains('sec-skills')){
        const id = target.getAttribute('href').slice(1);
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    }
});


document.getElementById('nav-bar').addEventListener('click', function(e){
    e.preventDefault();
    const target = e.target;
    if(target.classList.contains('sec-exp')){
        const id = target.getAttribute('href').slice(1);
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    }
});

document.getElementById('nav-bar').addEventListener('click', function(e){
    e.preventDefault();
    const target = e.target;
    if(target.classList.contains('sec-edu')){
        const id = target.getAttribute('href').slice(1);
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    }
});

document.getElementById('nav-bar').addEventListener('click', function(e){
    e.preventDefault();
    const target = e.target;
    if(target.classList.contains('sec-port')){
        const id = target.getAttribute('href').slice(1);
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    }
});

document.getElementById('nav-bar').addEventListener('click', function(e){
    e.preventDefault();
    const target = e.target;
    if(target.classList.contains('sec-cont')){
        const id = target.getAttribute('href').slice(1);
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    }
});