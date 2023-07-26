import ModalHeading from "../components/ModalHeading"
import TitleInput from "../components/TitleInput"
import FormList from "../components/FormList"
import ButtonLightPurple from "../../../ui/ButtonLightPurple"
import ButtonPurple from "../../../ui/ButtonPurple"
import { useContext, useEffect } from "react"
import DarkModeContext from "../../../context/DarkModeContext"
import BoardContext from "../../../context/BoardContext"
import FormContext from "../../../context/FormContext"
import ModalContext from "../../../context/ModalContext"

const EditBoardModal = () => {
  const { isDarkMode } = useContext(DarkModeContext)
  const { columns, setColumns, changeBoard, setColumnInputs, clickOnNewColumn, selectedBoard, checkBoardValidity, setIsValid, isValid } = useContext(BoardContext)
  const { setButtonPressed } = useContext(FormContext)
  const { closeModalOnClick, setEditBoardModal } = useContext(ModalContext)

  const handleClick = () => {
    setButtonPressed(true)
    checkBoardValidity()
  };

  useEffect(() => {
    setColumnInputs(columns)
  }, [])

  useEffect(() => {
    if(isValid) {
      changeBoard()
      closeModalOnClick(setEditBoardModal)
      setIsValid(false)
    } 
  }, [isValid])

  return (
    <div className={`${isDarkMode ? "bg-darkGrey text-white" : "bg-white text-black"} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute z-20 w-[343px] md:w-[480px] p-[24px] md:p-[32px] rounded-[6px]`}>
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
      setInputs={setColumns}
    />
    <ButtonLightPurple 
      text={"Add New Column"} 
      onClick={clickOnNewColumn} 
    />
    <ButtonPurple 
      text={"Save Changes"}
      onClick={handleClick}
    />
    </div>
  )
}

export default EditBoardModal