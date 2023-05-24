import { question } from "readline-sync";

//7. Leia um vetor A de N elementos e escreva um vetor B de N elementos, conforme a seguinte condição: se índice de A[índice] é par então B[índice] = 0, caso contrário B[índice] = 1.

function main(){
    const n = Number(question('Quantos elementos? '))

    let array_a = []

    for(let i = 0; i < n; i++){
        const numero = Number(question(`Digite o número ${i}: `))
        array_a.push(numero)
    }
    
    let array_b = []
    for(let i = 0; i < array_a.length; i++){
        if(array_a[i] % 2 === 0){
            array_b.push(0)
        }else{
            array_b.push(1)
        }
    }
    console.log(array_a)
    console.log(array_b)

}

main()