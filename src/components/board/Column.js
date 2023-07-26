import ColumnBall from "./ColumnBall"
import Task from "./Task"
import ModalContext from "../../context/ModalContext"
import { useContext } from "react"

const Column = ( {id, title, tasks} ) => {
    const { isMobile } = useContext(ModalContext)
    
  return (
    <div className={`${isMobile ? "w-[350px]" : "w-[280px]"} flex flex-col gap-6`}>
        <div className="flex w-[105px] h-[15px] justify-between items-center">
            <ColumnBall id={id}/>
            <div className="text-xs font-bold tracking-tighter">
                {title.toUpperCase()} ({tasks.length}) 
            </div>
        </div>
        {tasks.map((task, index) => {
           return <Task key={index} task={task} />
        })}
        
    </div>
  )
}

export default Column