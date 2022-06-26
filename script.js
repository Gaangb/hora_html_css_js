function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora < 12){
        img.src = 'manha.jpg'
        document.body.style.background = 'rgb(27, 161, 0)'
    } else if(hora <18){
        img.src = 'tarde.jpg'
        document.body.style.background = 'rgb(211, 114, 23)'       
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = 'rgb(58, 58, 58)'
    }
}
