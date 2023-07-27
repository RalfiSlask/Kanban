import BoardContext from "../../context/BoardContext"
import ModalContext from "../../context/ModalContext"
import DarkModeContext from "../../context/DarkModeContext"
import { useContext, useEffect } from "react"

const Task = ( {task} ) => {
    const { isDarkMode } = useContext(DarkModeContext)
    const { openModalOnClick, setOpenTaskModal } = useContext(ModalContext)
    const { setTask, setStatusInput } = useContext(BoardContext)
    const { subtasks, title, status } = task;

    const handleClick = () => {
      openModalOnClick(setOpenTaskModal)
      setTask(task)
      setStatusInput(status)
    };

  return (
    <>
    <div onClick={handleClick} className={`${isDarkMode ? "bg-darkGrey text-white shadow-darkShadow" : "bg-white text-black shadow-lightShadow"} cursor-pointer rounded-[8px] w-[100%] min-h-[107px] py-[23px] px-[16px] flex flex-col gap-2`}>
        <div className="text-[15px] font-bold">{title}</div>
        <div className="font-bold text-mediumGray text-[12px]">{subtasks.filter(task => (task.isCompleted)).length} of {subtasks.length} subtasks</div>
    </div>
    </>
  )
}

export default Task