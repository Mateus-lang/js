let num = [5,8,2]
num[3] = 6
num.push(7)
num.sort()
    console.log(`o vetor tem ${num.length} posições`)
    console.log(num)

    let pos = num.indexOf(3)
    if (pos == -1) {
        console.log(`O valor não foi encontrado!`)
    } else {
        console.log(`O valor está na posição ${pos}`)
    }