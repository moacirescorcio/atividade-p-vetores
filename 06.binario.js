import { question } from "readline-sync";

//6. Leia um número (vetor com 8 elementos) na base binária, calcule e escreva este número na base hexadecimal e na base decimal.

function main(){
    let binario = []
    for(let i = 0; i < 8; i++){
        const n = Number(question('Digite um número em binário: '))
        binario.push(n)
    }
    

    //decimal
    let decimal = 0
    let  i = binario.length - 1
    for(let numero of binario){
        decimal += numero * (2**i)
        i--
    }
    console.log(`Decimal: ${decimal}`)

    //hexadecimal
    let hexa1 = 0
    let hexa2 = 0
    const binario1 = binario.slice(0,Math.floor(binario.length/2))
    const binario2 = binario.slice(Math.floor(binario.length/2))
    let j = binario1.length - 1
    for(let numero of binario1){
        hexa1 += numero * (2**j)
        j--
    }

    if (hexa1 === 10){
        hexa1 = 'A'
    }else if(hexa1 === 11){
        hexa1 = 'B'
    }else if(hexa1 === 12){
        hexa1 = 'C'
    }else if(hexa1 === 13){
        hexa1 = 'D'
    }else if(hexa1 === 14){
        hexa1 = 'E'
    }else if(hexa1 === 15){
        hexa1 = 'F'
    }else{
        hexa1 = hexa1.toString()
    }

    
    let k = binario2.length - 1
    for(let numero of binario2){
        hexa2 += numero * (2**k)
        k--
    }
    if (hexa2 === 10){
        hexa2 = 'A'
    }else if(hexa2 === 11){
        hexa2 = 'B'
    }else if(hexa2 === 12){
        hexa2 = 'C'
    }else if(hexa2 === 13){
        hexa2 = 'D'
    }else if(hexa2 === 14){
        hexa2 = 'E'
    }else if(hexa2 === 15){
        hexa2 = 'F'
    }else{
        hexa2 = hexa2.toString()
    }
    
    const hexa = hexa1 + hexa2
    console.log(`Hexa: ${hexa}`)


    
    
}

main()