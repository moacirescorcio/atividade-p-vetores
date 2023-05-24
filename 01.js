import { question } from "readline-sync";
//01 . Leia um vetor A com N elementos e escreva um vetor B, com os mesmos elementos de A, sendo que estes deverão estar invertidos, ou seja, o 1o elemento de A deve ser o último elemento de B; o 2o elemento de A deve ser o penúltimo elemento de B e assim por diante.


function main(){
    const tamanho = Number( question('Quantos números? '))
     
    const array_a = Array(tamanho)
    //preenchendo
    for(let i = 0; i<array_a.length; i++){
        let atual = Number(question(`Digite o valor ${i} do array: `))
        array_a[i] = atual
    }
    console.log(`Array a = ${array_a}`)

    const array_b = []
    let j = 0
    for(let i = array_a.length-1; i >= 0; i--){
        array_b[i] = array_a [j]
        j++
    }
    console.log(`Array b = ${array_b}`)

}

main()