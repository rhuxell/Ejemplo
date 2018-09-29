function mostraralerta(){
    alert('Buscó por id');
}

function mostraralerta2(){
    alert('Buscó por first child');
}

function hacerclick(){
    document.querySelector('#principal input:first-child').onclick=mostraralerta2;
}

window.onload=hacerclick;
