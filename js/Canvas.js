function iniciar(){
    var elemento=document.getElementById('lienzo');
    lienzo= elemento.getContext('2d');
}
windows.addEventListener("load", iniciar, false);
