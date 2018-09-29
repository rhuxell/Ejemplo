function mostraralerta(){
    alert('Hizo Click en el otro botón!');
}

function hacerclick(){
    document.getElementsByTagName('input')[0].onclick=mostraralerta;
}

window.onload=hacerclick;
