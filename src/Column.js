import ColumnBall from "./ColumnBall"
import Task from "./Task"
import Context from "./context/Context"
import { useContext } from "react"

const Column = ( {id, title, tasks} ) => {
    const { isMobile } = useContext(Context)
    
  return (
    <div className={`${isMobile ? "w-[350px]" : "w-[280px]"} flex flex-col gap-6`}>
        <div className="flex w-[105px] h-[15px] justify-between items-center">
            <ColumnBall id={id}/>
            <div className="text-xs font-bold tracking-tighter">
                {title.toUpperCase()} ({tasks.length}) 
            </div>
        </div>
        {tasks.map((task, index) => {
            const {subtasks, title} = task;
           return <Task key={index} title={title} subtasks={subtasks} />
        })}
        
    </div>
  )
}

export default Column