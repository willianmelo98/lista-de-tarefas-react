import TarefaModel from "../../models/TarefaModel";


export function listaTarefasContextBuilder([listaTarefas, setListaTarefas]) {
  return {
    listaTarefas,
    numeroTarefasPendentes: tarefasPendentesCount(listaTarefas),
    adicionarTarefas: (tarefa) =>
      setListaTarefas(adicionar(listaTarefas, tarefa)),
    atualizarStatus: (tarefa) => setListaTarefas(editar(listaTarefas,tarefa)),
    excluirTarefas:()=> setListaTarefas([]),
  };
}

function adicionar(listaTarefas, descricaoTarefa) {
  const novaTarefa = new TarefaModel(listaTarefas.length + 1, descricaoTarefa);
  return [...listaTarefas, novaTarefa];
}

function editar(listaTarefas,tarefa){
  const tarefaAtualizada = {
    ...tarefa,concluida:!tarefa.concluida
  };

  const listaAtualizada = listaTarefas.map((x)=>{
    if(x.id !== tarefa.id){
      return x;
    }else{
      return tarefaAtualizada;
    }
  });
  return listaAtualizada;
}

function tarefasPendentesCount(listaTarefas){
  return listaTarefas.filter((x)=> !x.concluida).length;
}
