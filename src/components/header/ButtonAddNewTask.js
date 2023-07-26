import logoAddTask from "../../assets/icon-add-task-mobile.svg";
import { useContext } from "react";
import ModalContext from "../../context/ModalContext";
import BoardContext from "../../context/BoardContext";

const ButtonAddNewTask = () => {
  const { isMobile, openModalOnClick, setNewTaskModal } = useContext(ModalContext)
  const { setSubtasks } = useContext(BoardContext)

  const handleClick = () => {
    openModalOnClick(setNewTaskModal)
    setSubtasks([{title: "", isCompleted: false}, {title: "", isCompleted: false}])
  };

  return (
    <>
  {isMobile ? <button onClick={() => {openModalOnClick(setNewTaskModal)}} className="w-[48px] h-[32px] bg-purpleColor  flex items-center justify-center rounded-[45%] ml-16 cursor-pointer ">
       <img src={logoAddTask} alt="addtask logo" /></button> 
    : <button onClick={handleClick} className="bg-purpleColor hover:bg-purpleHover text-white w-44 h-12 rounded-3xl flex items-center justify-center font-bold text-[15px]">+ Add New Task</button>}
    </>
  )

}

export default ButtonAddNewTask