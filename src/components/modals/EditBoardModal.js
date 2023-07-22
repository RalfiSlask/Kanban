import ModalHeading from "./ModalHeading"
import TitleInput from "../TitleInput"
import FormList from "../FormList"
import ButtonLightPurple from "../../ui/ButtonLightPurple"
import ButtonPurple from "../../ui/ButtonPurple"
import { useContext } from "react"
import DarkModeContext from "../../context/DarkModeContext"
import BoardContext from "../../context/BoardContext"


const EditBoardModal = () => {
  const { isDarkMode } = useContext(DarkModeContext)
  const { columns, setColumns, addColumn, selectedBoard } = useContext(BoardContext)

  return (
    <div className={`${isDarkMode ? "bg-darkGrey text-white" : "bg-white text-black"} absolute z-20 w-[343px] md:w-[480px] p-[24px] md:p-[32px] rounded-[6px]`}>
    <ModalHeading 
      title={"Edit Board"} 
    />
    <TitleInput 
      title={"Board Name"} 
      placeholder={"e.g. Web Design"}
      value={selectedBoard}
    />
    <FormList 
      title={"Board Columns"} 
      inputs={columns} 
      setInputs={setColumns}/>
    <ButtonLightPurple 
      text={"Add New Column"} 
      onClick={addColumn}
    />
    <ButtonPurple 
      text={"Save Changes"}
    />
    </div>
  )
}

export default EditBoardModal