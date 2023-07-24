import ModalHeading from "../components/ModalHeading"
import TitleInput from "../components/TitleInput"
import FormList from "../components/FormList"
import ButtonLightPurple from "../../../ui/ButtonLightPurple"
import ButtonPurple from "../../../ui/ButtonPurple"
import BoardContext from "../../../context/BoardContext"
import DarkModeContext from "../../../context/DarkModeContext"
import CurrentStatus from "../components/CurrentStatus"
import DescriptionInput from "../components/DescriptionInput"
import { useContext, useEffect } from "react"

const EditTaskModal = () => {
  const { isDarkMode } = useContext(DarkModeContext)
  const { task, subtasks, setSubtasks, addNewSubtask } = useContext(BoardContext)
  const { title, description, status } = task;

  useEffect(() => {
    console.log(task)
    console.log(subtasks)
  })

  return (
       <div className={`${isDarkMode ? "bg-darkGrey text-white" : "bg-white text-black"} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute z-20 w-[343px] md:w-[480px] p-[24px] md:p-[32px] rounded-[6px]`}>
        <ModalHeading 
          title={"Edit Task"} 
        />
        <TitleInput 
          title={"Title"} 
          placeholder={"e.g. Take coffee break"} 
          value={title}
        />
        <DescriptionInput
          placeholder={"e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."}
          value={description}
          text={"Description"}
        />
        <FormList 
          title={"Subtasks"} 
          inputs={subtasks} 
          setInputs={setSubtasks}
        />
        <ButtonLightPurple 
          text={"Add New Subtask"} 
          onClick={addNewSubtask} 
        />
        <CurrentStatus 
          input={status} 
          text={"Status"} 
          margin={"mt-[24px]"}
        />
        <ButtonPurple 
          text={"Create Task"} 
        /*   onClick={handleClickNewBoard} */
        />
    </div>
  )
}

export default EditTaskModal