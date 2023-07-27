import DarkModeContext from "../../../context/DarkModeContext"
import BoardContext from "../../../context/BoardContext"
import ModalContext from "../../../context/ModalContext"
import ButtonPurple from "../../../ui/ButtonPurple"
import ButtonLightPurple from "../../../ui/ButtonLightPurple"
import ModalHeading from "../components/ModalHeading"
import FormList from "../components/FormList"
import TitleInput from "../components/TitleInput"
import { useContext, useEffect } from "react"
import FormContext from "../../../context/FormContext"

const AddNewBoardModal = () => {
    const { isDarkMode } = useContext(DarkModeContext)
    const { columnInputs, setColumnInputs, newColumns, clickOnNewColumn, checkBoardValidity, AddNewBoard, isValid } = useContext(BoardContext)
    const { closeModalOnClick, setOpenNewBoardModal } = useContext(ModalContext)
    const { setButtonPressed } = useContext(FormContext)

    useEffect(() => {
      setColumnInputs([{name: "Todo", tasks: []}, {name: "Doing", tasks: []}])
    }, [])

    const handleClick = () => {
      setButtonPressed(true)
      checkBoardValidity(newColumns)
    };

    useEffect(() => {
      if(isValid) {
        AddNewBoard()
        closeModalOnClick(setOpenNewBoardModal)
        setButtonPressed(false)
      }
    }, [isValid])

  return (
    <div className={`${isDarkMode ? "bg-darkGrey text-white" : "bg-white text-black"} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute z-20 w-[343px] md:w-[480px] p-[24px] md:p-[32px] rounded-[6px]`}>
        <ModalHeading 
          title={"Add New Board"} 
        />
        <TitleInput 
          title={"Board Name"} 
          placeholder={"e.g. Web Design"} 
          value={""}
        />
        <FormList 
          title={"Board Columns"} 
          inputs={columnInputs} 
          setInputs={setColumnInputs}
        />
        <ButtonLightPurple 
          text={"Add New Column"} 
          onClick={clickOnNewColumn} 
        />
        <ButtonPurple 
          text={"Create New Board"} 
          onClick={handleClick}
        />
    </div>
  )
}

export default AddNewBoardModal