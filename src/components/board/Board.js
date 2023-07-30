import { useContext } from "react";
import BoardContext from "../../context/BoardContext";
import Column from "./Column";
import ModalContext from "../../context/ModalContext";
import NewColumnColumn from "./NewColumnColumn";
import DarkModeContext from "../../context/DarkModeContext";

const Board = () => {
    const { columns } = useContext(BoardContext)
    const { isMobile } = useContext(ModalContext)
    const { isDarkMode } = useContext(DarkModeContext)

  return (
    <div className={`${isMobile ? "flex-col items-center" : "flex-row"} ${isDarkMode ? "bg-darkBG" : "bg-lightBG"}  xl:pl-10 flex gap-6 w-[100%]`}>
        {columns.map((column, index) => {
          const columnTasks = column.tasks.filter(task => task.status === column.name)
          return  <Column key={index} columnId={index} title={column.name} tasks={columnTasks}/>
          })}
      {!isMobile && <NewColumnColumn />}
    </div>
  )
}

export default Board