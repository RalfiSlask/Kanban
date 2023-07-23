import DarkModeContext from "../../../context/DarkModeContext";
import FormContext from "../../../context/FormContext";
import { useContext, useEffect, useState } from "react";

const Input = ( {placeholder, value, setIsLogoRed} ) => {
    const { isDarkMode } = useContext(DarkModeContext)
    const { buttonPressed, setButtonPressed, errorText } = useContext(FormContext)
    const [error, setError] = useState(false);
    const [input, setInput] = useState(value)

    const handleChange = (event) => {
        setInput(event.target.value)
        setButtonPressed(false)
    };

    useEffect(() => {
        input === "" ? setError(true) : setError(false)
        console.log(input)
    }, [input, buttonPressed])

    useEffect(() => {
        if(setIsLogoRed) {
            input === "" ? setIsLogoRed(true) : setIsLogoRed(false)
        } 
    }, [input, buttonPressed])

  return (
    <div className="w-[100%] relative">
        <input 
            onChange={(e) => {handleChange(e)}}
            defaultValue={value}
            spellCheck={false} 
            placeholder={placeholder} 
            className={`${buttonPressed && error ? "border-red-500" : "outline-[#635FC7] hover:border-[#635FC7] border-inputBorder"} ${isDarkMode ? "bg-[#2B2C37] placeholder:text-white" : "bg-white placeholder:text-black"} placeholder:opacity-25 cursor-pointer pl-4 h-10 rounded-[4px] 
            border border-solid w-[100%]`}
        />
        {buttonPressed && error && <p className="text-[12px] font-medium text-red-500 absolute z-50 right-0 md:right-[16px] md:top-[12px]">{errorText}</p>}
    </div>
  )
}

export default Input