import { useContext, useEffect } from "react";
import FormContext from "../context/FormContext";
import BoardContext from "../context/BoardContext";

const AddForm = ( {title, placeholder, onChange} ) => {
  const { errorText, setBoardError, boardError, buttonPressed } = useContext(FormContext)
  const { boardName } = useContext(BoardContext)

  useEffect(() => {
    if(boardName !== "") {
      setBoardError(false)
    } else {
      setBoardError(true)
    }
  }, [boardName])

  return (
    <form className="flex flex-col gap-2 w-[100%] mt-6 relative">
        <label className="text-[12px] font-bold text-mediumGray">{title}</label>
        {buttonPressed && boardError && <p className="text-[12px] font-medium text-red-500 absolute z-50 right-0 md:right-[16px] md:top-[38px]">{errorText}</p>}
        <input 
          onChange={(e) => {onChange(e)}} 
          spellCheck={false} 
          placeholder={placeholder} 
          className={`${buttonPressed && boardError ? "border-red-500" : "outline-[#635FC7] hover:border-[#635FC7] border-[rgba(130, 143, 163, 0.25)]"}  cursor-pointer pl-4 h-10 rounded-[4px] 
          border border-solid w-[100%]`}
        />
    </form>
  )
}

export default AddForm