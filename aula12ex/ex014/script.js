function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    // Bom dia
    img.src = 'manha.png'
    document.body.style.background = '#F1DEC2'
} else if (hora >= 12 && hora < 18){
    // Boa Tarde
    img.src = 'tarde.png'
    document.body.style.background = '#FEC19C'
}else {
    // Boa noite
    img.src = 'noite.png'
    document.body.style.background = '#151828'
}

}
