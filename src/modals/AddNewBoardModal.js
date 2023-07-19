import DarkModeContext from "../context/DarkModeContext"
import BoardContext from "../context/BoardContext"
import ButtonPurple from "../ui/ButtonPurple"
import ButtonLightPurple from "../ui/ButtonLightPurple"
import ModalHeading from "../ModalHeading"
import FormList from "./FormList"
import AddForm from "./AddForm"
import { useContext } from "react"


const AddNewBoardModal = () => {
    const { isDarkMode } = useContext(DarkModeContext)
    const { newColumns, clickOnNewColumn, deleteColumnOnClick, handleChangeBoardName, AddNewBoardOnClick } = useContext(BoardContext)

  return (
    <div className={`${isDarkMode ? "bg-darkGrey text-white" : "bg-white text-black"} absolute z-20 w-[343px] md-[w-480px] p-[24px] md:p-[32px] rounded-[6px]`}>
        <ModalHeading title={"Add New Board"} />
        <AddForm title={"Board Name"} placeholder={"e.g. Web Design"} onChange={handleChangeBoardName}/>
        <FormList title={"Board Columns"} inputs={newColumns} onClick={deleteColumnOnClick}/>
        <ButtonLightPurple text={"Add New Column"} onClick={clickOnNewColumn} />
        <ButtonPurple text={"Create New Board"} onClick={AddNewBoardOnClick}/>
    </div>
  )
}

export default AddNewBoardModal