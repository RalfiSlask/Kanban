import { useContext } from "react";
import BoardContext from "../../context/BoardContext";
import Column from "./Column";
import ModalContext from "../../context/ModalContext";
import NewColumnColumn from "./NewColumnColumn";

const Board = () => {
    const { columns } = useContext(BoardContext)
    const { isMobile } = useContext(ModalContext)

  return (
    <div className={`${isMobile ? "flex-col items-center" : "flex-row"} flex gap-6 w-[100%]`}>
        {columns.map((column, index) => {
          const columnTasks = column.tasks.filter(task => task.status === column.name)
          return  <Column key={index} columnId={index} title={column.name} tasks={columnTasks}/>
          })}
      {!isMobile && <NewColumnColumn />}
    </div>
  )
}

export default Board