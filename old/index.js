function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML =`Agora são ${hora} Hora(s) e ${min} minutos.`
    if (hora >= 0 && hora < 5) {
        img.src='madrugada.png'
        document.main.style.background = 'rgb(235, 81, 43)'  
    } else if (hora >=5 && hora < 12){
        img.src = 'manha.png'
        document.main.style.background = 'green'
    } else if (hora >=12 && hora < 18){
        img.src = 'tarde.png'
        document.main.style.background = 'green'
    } else {
        img.src = 'noite.png'
        document.main.style.background = 'black'
    }
}
function mudafoto (foto) {
    document.getElementById("icone").src = foto;
}