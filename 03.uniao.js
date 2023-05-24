import { question } from "readline-sync";

//3. Leia 2 vetores A e B com N elementos, escreva um vetor C, sendo este a junção dos vetores A e B. Desta forma, o vetor C deverá ter 2*N elementos.

function main(){
    const tamanho = Number(question('Tamanho dos vetores: '))

    const array_a = Array(tamanho)
    const array_b = Array(tamanho)

    for(let i = 0; i<array_a.length; i++){
        let atual = Number(question(`Digite o valor ${i} do Array A: `))
        array_a[i] = atual
    }
    
    for(let i = 0; i<array_b.length; i++){
        let atual = Number(question(`Digite o valor ${i} do Array B: `))
        array_b[i] = atual
    }

    const array_c = []
    let i = 0
    for(let elemento of array_a){
        array_c[i] = elemento
        i++
    }
    let j = array_a.length
    for(let elemento of array_b){
        array_c[j] = elemento
        j++
    }

    console.log(array_c)
}

main()