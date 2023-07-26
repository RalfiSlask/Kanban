import { useContext, useEffect, useState } from "react";
import FormContext from "../../../context/FormContext";
import DarkModeContext from "../../../context/DarkModeContext";
import ModalLabel from "./ModalLabel";
import BoardContext from "../../../context/BoardContext";

const TitleInput = ( {title, placeholder, value} ) => {
  const { isDarkMode } = useContext(DarkModeContext)
  const { buttonPressed, setButtonPressed, errorText} = useContext(FormContext)
  const { handleChangeTitle, setTaskName, setBoardName } = useContext(BoardContext)
  const [error, setError] = useState(false);
  const [titleInput, setTitleInput] = useState(value)

  useEffect(() => {
    if(title === "Title") {
      setTaskName(value)
    } else if(title === "Board Name") {
      setBoardName(value)
    }
  }, [])

  const handleChange = (event) => {
    setTitleInput(event.target.value)
    handleChangeTitle(title, event)
    setButtonPressed(false)
  };

    useEffect(() => {
      titleInput === "" ? setError(true) : setError(false)
  }, [titleInput, buttonPressed])

  return (
    <form className="flex flex-col gap-2 w-[100%] mt-6 relative">
        <ModalLabel text={title}/>
        <input 
            onChange={(e) => {handleChange(e)}}
            defaultValue={value}
            spellCheck={false} 
            placeholder={placeholder} 
            className={`${buttonPressed && error ? "border-red-500" : "outline-[#635FC7] hover:border-[#635FC7] border-inputBorder"} ${isDarkMode ? "bg-[#2B2C37] placeholder:text-white" : "bg-white placeholder:text-black"} placeholder:opacity-25 cursor-pointer pl-4 h-10 rounded-[4px] 
            border border-solid w-[100%]`}
        />
        {buttonPressed && error && <p className="text-[12px] font-medium text-red-500 absolute z-50 right-0 md:right-[20px] md:top-[36px]">{errorText}</p>}
    </form>
  )
}

export default TitleInput