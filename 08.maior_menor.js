import { question } from "readline-sync";

//8. Leia um vetor com N elementos, encontre e escreva o maior e o menor elemento e suas respectivas posições no vetor.

function main(){
    const n = Number(question('Quantos elementos? '))

    let array_a = []

    for(let i = 0; i < n; i++){
        const numero = Number(question(`Digite o número ${i}: `))
        array_a.push(numero)
    }
    //maior
    let maior = array_a[0]
    for (let elemento of array_a){
        if(elemento > maior){
            maior = elemento
        }
    }
    console.log(`Maior: ${maior}`)
    const indice_maior = array_a.indexOf(maior)
    console.log(`Índice do maior: ${indice_maior}`)

    //menor
    let menor = array_a[0]
    for (let item of array_a){
        if(item < maior){
            menor = item
        }
    }
    console.log(`Menor: ${menor}`)
    const indice_menor = array_a.indexOf(menor)
    console.log(`Índice do menor: ${indice_menor}`)

}

main()