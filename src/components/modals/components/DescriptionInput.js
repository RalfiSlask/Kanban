import { useContext } from "react";
import FormContext from "../../../context/FormContext";
import DarkModeContext from "../../../context/DarkModeContext";
import ModalLabel from "./ModalLabel";
import BoardContext from "../../../context/BoardContext";

const DescriptionInput = ( {placeholder, text, value, type} ) => {
    const { isDarkMode } = useContext(DarkModeContext)
    const { errorText, boardError, buttonPressed, setButtonPressed} = useContext(FormContext)
    const { handleChangeDescription } = useContext(BoardContext)

    const handleChange = (event) => {
      handleChangeDescription(event)
      setButtonPressed(false)
    };

  return (
    <form className="flex flex-col gap-2 w-[100%] mt-6 relative">
        <ModalLabel text={text}/>
        {buttonPressed && boardError && <p className="text-[12px] font-medium text-red-500 absolute z-50 right-0 md:right-[16px] md:top-[38px]">{errorText}</p>}  
        <textarea 
            name="description" 
            cols="30" 
            rows="10" 
            onChange={(e) => {handleChange(e)}}
            defaultValue={value} 
            spellCheck={false} 
            placeholder={placeholder} 
            className={`${buttonPressed && boardError ? "border-red-500" : "outline-[#635FC7] hover:border-[#635FC7] border-inputBorder"} ${isDarkMode ? "bg-[#2B2C37] placeholder:text-white" : "bg-white placeholder:text-black"} placeholder:opacity-25 cursor-pointer pt-[8px] pl-4 h-[112px] rounded-[4px] 
        border border-solid w-[100%]`}>
        </textarea>
    </form>
  )
}

export default DescriptionInput