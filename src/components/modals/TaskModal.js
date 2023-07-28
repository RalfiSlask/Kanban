import { useContext, useEffect } from "react"
import DarkModeContext from "../../context/DarkModeContext"
import BoardContext from "../../context/BoardContext"
import ModalHeading from "./components/ModalHeading"
import logoEditDelete from "../../assets/icon-vertical-ellipsis.svg"
import SubtasksContainer from "./components/SubtasksContainer"
import CurrentStatus from "./components/CurrentStatus"
import ModalContext from "../../context/ModalContext"
import ChangeTaskModal from "./change/ChangeTaskModal"
import ButtonPurple from "../../ui/ButtonPurple"

const TaskModal = () => {
  const { isDarkMode } = useContext(DarkModeContext)
  const { task, updateTaskStatus, setStatusInput} = useContext(BoardContext)
  const { openChangeTaskModal, setChangeTaskModal, closeModalOnClick, setOpenTaskModal } = useContext(ModalContext)
  const { title, description, subtasks, status } = task;

  const handleClick = () => {
    setChangeTaskModal(prevState => !prevState)
  };

  const saveChangesOnClick = () => {
    closeModalOnClick(setOpenTaskModal)
    updateTaskStatus()
  };

  return (
    <div className={`${isDarkMode ? "bg-darkGrey text-white" : "bg-white text-black"} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 absolute z-20 w-[343px] md:w-[480px] p-[24px] md:p-[32px] rounded-[6px]`}>
      <div className="flex justify-between items-center">
        <ModalHeading 
          title={title}
        />
        <img src={logoEditDelete} onClick={handleClick} alt="logo edit delete" className="cursor-pointer"/>
        {openChangeTaskModal && <ChangeTaskModal />}
      </div>
      <p className="text-[13px] font-medium leading-6 text-mediumGray">{description}</p>
      <SubtasksContainer 
        subtasks={subtasks}
      />
      <CurrentStatus 
        input={status} 
        text={"Current Status"}
      />
      <ButtonPurple 
        text={"Save Changes"}
        onClick={saveChangesOnClick}
      />
    </div>
  )
}

export default TaskModal