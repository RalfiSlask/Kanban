import DarkModeContext from "../../../context/DarkModeContext"
import BoardContext from "../../../context/BoardContext"
import Context from "../../../context/Context"
import ButtonPurple from "../../../ui/ButtonPurple"
import ButtonLightPurple from "../../../ui/ButtonLightPurple"
import ModalHeading from "../components/ModalHeading"
import FormList from "../components/FormList"
import TitleInput from "../components/TitleInput"
import { useContext } from "react"
import FormContext from "../../../context/FormContext"

const AddNewBoardModal = () => {
    const { isDarkMode } = useContext(DarkModeContext)
    const { newColumns, setNewColumns, clickOnNewColumn, handleChangeBoardName, AddNewBoard } = useContext(BoardContext)
    const { closeModalOnClick, setOpenNewBoardModal } = useContext(Context)
    const { boardError, inputErrors, setButtonPressed } = useContext(FormContext)

    const handleChange = (event) => {
      handleChangeBoardName(event);
      setButtonPressed(false)
    };
    
    const handleClickNewBoard = () => {
      setButtonPressed(true)
      if(!boardError && !inputErrors) {
        AddNewBoard();
        closeModalOnClick(setOpenNewBoardModal);
      } 
    };

  return (
    <div className={`${isDarkMode ? "bg-darkGrey text-white" : "bg-white text-black"} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute z-20 w-[343px] md:w-[480px] p-[24px] md:p-[32px] rounded-[6px]`}>
        <ModalHeading 
          title={"Add New Board"} 
        />
        <TitleInput 
          title={"Board Name"} 
          placeholder={"e.g. Web Design"} 
          onChange={handleChange}
          value={""}
        />
        <FormList 
          title={"Board Columns"} 
          inputs={newColumns} 
          setInputs={setNewColumns}
        />
        <ButtonLightPurple 
          text={"Add New Column"} 
          onClick={clickOnNewColumn} 
        />
        <ButtonPurple 
          text={"Create New Board"} 
          onClick={handleClickNewBoard}
        />
    </div>
  )
}

export default AddNewBoardModal