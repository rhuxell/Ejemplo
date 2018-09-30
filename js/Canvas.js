function iniciar(){
    var elemento=document.getElementById('lienzo');
    lienzo= elemento.getContext('2d');
    lienzo.fillRect(110, 110, 100, 100);
}
windows.addEventListener("load", iniciar, false);
