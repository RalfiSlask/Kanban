import { useContext} from "react";
import BoardContext from "./context/BoardContext";
import Column from "./Column";
import Context from "./context/Context";
import NewColumnColumn from "./NewColumnColumn";

const Board = () => {
    const { columns } = useContext(BoardContext)
    const { isMobile } = useContext(Context)

  return (
    <div className={`${isMobile ? "flex-col items-center" : "flex-row"} flex gap-6 w-[100%]`}>
        {columns.map((column, index) => (
            <Column key={index} id={index} title={column.name} tasks={column.tasks}/>
        ))}
      {!isMobile && <NewColumnColumn />}
    </div>
  )
}

export default Board