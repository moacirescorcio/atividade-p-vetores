import { question } from "readline-sync";

//4. Leia 2 vetores A e B com N elementos, escreva e escreva um vetor C, que represente o conjunto união entre os vetores A e B; e um vetor D, que represente o conjunto interseção entre os vetores A e B.

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

    console.log(`União: ${array_c}`)

    //iguais
    let k = 0
    let array_d = []
    for(let item of array_a){
        if(eh_igual(item,array_b)){
            array_d.push(item)
        }
    }
    
    console.log(`Iguais: ${array_d}`)
        
    
}

function eh_igual(i,b){
    for (let numero of b){
        if (numero === i){
            return true
        
        }

    }
    return false

    
}



main()