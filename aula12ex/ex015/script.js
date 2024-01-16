function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert('[Erro] verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'criancaM.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemM.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'jovemM.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosoM.png')
            } 
            
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'criancaF.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemF.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'jovemF.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosoF.png')
            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}