import { useState } from "react";
import useListaTarefas from "../../services/ListaTarefas/useListaTarefas";
import Tarefa from "../Tarefa";
import style from "./ListaTarefasPage.module.css";

function ListaTarefasPage() {
  const {
    listaTarefas,
    numeroTarefasPendentes,
    adicionarTarefas,
    excluirTarefas,
  } = useListaTarefas();

  const [novaTarefa, setNovaTarefa] = useState("");

  function inputChangeCallBack(event) {
    setNovaTarefa(event.target.value);
  }

  function btnNovaTarefaCallBack() {
    if (novaTarefa.trim().length > 0) {
      adicionarTarefas(novaTarefa); // cria a nova tarefa;
      setNovaTarefa("");
    } //limpa o valor da tela
  }

  function btnExcluirTudoCallBack() {
    excluirTarefas(); 
  }

  return (
    <div className={style.ListaTarefasPage}>
      <h1>Lista de Atividades!</h1>
      <div className={style.actionBox}>
        <input
          onKeyUp={(event) =>
            event.key === "Enter" ? btnNovaTarefaCallBack() : ()=>{}
          }
          type="text"
          placeholder="Adicionar nova tarefa"
          value={novaTarefa}
          onChange={inputChangeCallBack}
        />
        <button
          type="button"
          className={style.big}
          onClick={btnNovaTarefaCallBack}
        >
          +
        </button>
        <button type="button" onClick={btnExcluirTudoCallBack}>
          Delete All
        </button>
      </div>
      <h3>Tarefas pendentes: {numeroTarefasPendentes}</h3>
      <div className="list">
        {listaTarefas &&
          listaTarefas.map((item, i) => {
            return <Tarefa key={i} tarefa={item}></Tarefa>;
          })}
      </div>
    </div>
  );
}
export default ListaTarefasPage;
