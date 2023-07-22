import { useContext, useEffect } from "react"
import DarkModeContext from "../../context/DarkModeContext"
import BoardContext from "../../context/BoardContext"
import ModalHeading from "./ModalHeading"
import logoEditDelete from "../../assets/icon-vertical-ellipsis.svg"
import SubtasksContainer from "./SubtasksContainer"
import CurrentStatus from "./CurrentStatus"
import Context from "../../context/Context"
import ChangeTaskModal from "./ChangeTaskModal"

const TaskModal = () => {
  const { isDarkMode } = useContext(DarkModeContext)
  const { task, columns } = useContext(BoardContext)
  const { openChangeTaskModal, setChangeTaskModal } = useContext(Context)
  const { title, description, subtasks, status } = task;

  const handleClick = () => {
    setChangeTaskModal(prevState => !prevState)
  };

  useEffect(() => {
    console.log(task)
  })

  return (
    <div className={`${isDarkMode ? "bg-darkGrey text-white" : "bg-white text-black"} flex flex-col gap-6 absolute z-20 w-[343px] md:w-[480px] p-[24px] md:p-[32px] rounded-[6px]`}>
      <div className="flex justify-between items-center">
        <ModalHeading 
          title={title}
        />
        <img src={logoEditDelete} onClick={handleClick} alt="logo edit delete" className="cursor-pointer"/>
        {openChangeTaskModal && <ChangeTaskModal />}
      </div>
      <p className="text-[13px] font-medium leading-6 text-mediumGray">{description}</p>
      <SubtasksContainer subtasks={subtasks}/>
      <CurrentStatus input={status}/>
    </div>
  )
}

export default TaskModal