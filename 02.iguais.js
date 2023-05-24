import { question } from "readline-sync";

// 02. Leia um vetor A com N elementos, verifique e escreva se existem ou não elementos iguais no vetor.

function main(){
    const tamanho = Number(question('Tamanho do array: '))

    const array_a = Array(tamanho)
    for(let i = 0; i<array_a.length; i++){
        let atual = Number(question(`Valor ${i} do array: `))

        array_a[i] = atual
    }

    
    let numeros_iguais = false
    for (let item of array_a){
        let quantidade = contar_ocorrencia(item,array_a)
        if(quantidade > 1){
            numeros_iguais = true
            break
        }
    }

    if(numeros_iguais){
        console.log('Há números iguais!')
    }else{
        console.log('Não há números iguais!')
    }
    
    
}

function contar_ocorrencia(numero,a){
    let conntador = 0
    for(let i = 0; i < a.length; i++){
        if(a[i] === numero){
            conntador++
        }
    }
    return conntador
}

main()