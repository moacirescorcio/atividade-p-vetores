import { question } from "readline-sync";

//09. Leia um vetor com N elementos, ordene-o e escreva-o em ordem crescente.

function main(){
    const n = Number(question('Digite o número de elementos: '))
    vetor = []
    for(let i = 0; i < n; i++){
        const elemento = Number(question(`elemento ${i}: `))
        vetor.push(elemento)
    }
    console.log(vetor)

    const colecao_ordenada = quicksort(vetor)
}

function quicksort(vetor){
    
    //indice random
    const random_indice = Math.floor(Math.random() * vetor.length)
    const pivot = vetor[random_indice]
}

main()