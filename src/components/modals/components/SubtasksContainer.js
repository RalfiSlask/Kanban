import { useEffect } from "react"
import SubtaskContainer from "./SubtaskContainer"

const SubtasksContainer = ( {subtasks} ) => {

    useEffect(() => {
        console.log(subtasks)

    })

  return (
    <div>
        <p className="text-4 text-mediumGray font-bold">Subtasks {subtasks.filter(task => (task.isCompleted)).length} of {subtasks.length}</p>
        <div className="mt-4 flex flex-col gap-[8px]">
        {subtasks.map((subtask, index) => (
            <SubtaskContainer key={index} id={index} subtask={subtask}/>
        ))}
        </div>
    </div>
  )
}

export default SubtasksContainer