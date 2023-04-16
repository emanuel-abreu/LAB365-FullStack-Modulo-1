let listaDeTarefas = ["acordar", "treinar", 
"Lavar roupa", "Estudar Back-end"]

function buscar(tarefa){
    if (listaDeTarefas.includes(tarefa) == true){
        return `${tarefa} existe na lista.`
    }  
    return "Não existe essa tarefa"
}

function alterar(posicaoParaAlterar, valorParaAdicionar){
    listaDeTarefas.splice(posicaoParaAlterar, 1, valorParaAdicionar);
    return listaDeTarefas;
}

function remover(listaDeTarefas){
    listaDeTarefas.pop();
    return listaDeTarefas
}

function adicionar(adicionar){
    listaDeTarefas.push(adicionar);
    return listaDeTarefas

}


