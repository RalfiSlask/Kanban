import ModalHeading from "../components/ModalHeading"
import TitleInput from "../components/TitleInput"
import FormList from "../components/FormList"
import ButtonLightPurple from "../../../ui/ButtonLightPurple"
import ButtonPurple from "../../../ui/ButtonPurple"
import BoardContext from "../../../context/BoardContext"
import DarkModeContext from "../../../context/DarkModeContext"
import CurrentStatus from "../components/CurrentStatus"
import { useContext } from "react"

const AddNewTaskModal = () => {
  const { isDarkMode } = useContext(DarkModeContext)
  const { task, newSubtasks, setNewSubtasks, addSubtask } = useContext(BoardContext)

  return (
       <div className={`${isDarkMode ? "bg-darkGrey text-white" : "bg-white text-black"} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute z-20 w-[343px] md:w-[480px] p-[24px] md:p-[32px] rounded-[6px]`}>
        <ModalHeading 
          title={"Add New Task"} 
        />
        <TitleInput 
          title={"Title"} 
          placeholder={"e.g. Take coffee break"} 
         /*  onChange={""} */
          value={""}
        />
        <FormList 
          title={"Subtasks"} 
          inputs={newSubtasks} 
          setInputs={setNewSubtasks}
        />
        <ButtonLightPurple 
          text={"Add New Subtask"} 
          onClick={addSubtask} 
        />
        <CurrentStatus input={task.status} />
        <ButtonPurple 
          text={"Create Task"} 
        /*   onClick={handleClickNewBoard} */
        />
    </div>
  )
}

export default AddNewTaskModal