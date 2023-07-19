import DarkModeContext from "./context/DarkModeContext"
import { useContext } from "react"

const Task = ( {subtasks, title} ) => {
    const { isDarkMode } = useContext(DarkModeContext)

  return (
    <div className={`${isDarkMode ? "bg-darkGrey text-white shadow-darkShadow" : "bg-white text-black shadow-lightShadow"} rounded-[8px] w-[100%] min-h-[107px] py-[23px] px-[16px] flex flex-col gap-2`}>
        <div className="text-[15px] font-bold">{title}</div>
        <div className="font-bold text-mediumGray text-[12px]">{subtasks.filter(task => (task.isCompleted)).length} of {subtasks.length} subtasks</div>
    </div>
  )
}

export default Task