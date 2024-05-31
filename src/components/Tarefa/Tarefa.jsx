import TarefaModel from "../../models/TarefaModel";
import useListaTarefas from "../../services/ListaTarefas/useListaTarefas";
import style from "./Tarefa.module.css";

/**
 * BlogPost Component
 * @param {{tarefa:TarefaModel}} props
 * @returns
 */

function Tarefa(props) {
  const { atualizarStatus } = useListaTarefas();

  let classNameTarefa = "tarefa";

  if (props.tarefa.concluida) {
    classNameTarefa += "Concluida";
  }
  function checkboxOnChange() {
    atualizarStatus(props.tarefa);
  }
  return (
    <div className={style.tarefaWrapper}>
      <div className={style[classNameTarefa]}>{props.tarefa.descricao}</div>
      <input
        className={style.checkbox}
        type="checkbox"
        defaultChecked={props.tarefa.concluida}
        onChange={checkboxOnChange}
      />
    </div>
  );
}
export default Tarefa;
