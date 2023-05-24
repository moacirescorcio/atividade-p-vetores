import { question } from "readline-sync";

//Leia um vetor A com 20 elementos, calcule e escreva o valor de S. S = (A[1] - A[20])2 + (A[2] - A[19])2 + ... + (A[9] - A[12])2 + (A[10] - A[11])2

function main(){
    let array_a = []
    for (let i = 0; i <= 20; i++){
        const n = Number(question('Digite um valor: '))
        array_a[i] = n
    }

    let j = 1
    let s = 0
    for(let i = 20; i > 0; i--){
        s += (array_a[j] - array_a[i])**2
        j++
    }
    console.log(s)
}

main()