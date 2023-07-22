import {ReactComponent as LogoCross} from "../assets/icon-cross.svg";
import { useState, useContext, useEffect } from "react"
import FormContext from "../context/FormContext";

const FormComponent = ( {id, name, onClick} ) => {
    const [input, setInput] = useState(name)
    const { setButtonPressed, buttonPressed, errorText, checkInputsForErrors } = useContext(FormContext)
    const [error, setError] = useState(false);
    
    useEffect(() => {
        if(input !== "") {
          setError(false)
        } else {
          setError(true)
        }
    }, [input])

    useEffect(() => {
        checkInputsForErrors(error, id)
    }, [error])
    
    const handleChange = (event) => {
        setInput(event.target.value)
        setButtonPressed(false)
    };


  return (
    <div className="flex items-center justify-between gap-4 md:relative">
         {buttonPressed && error && <p className="text-[12px] font-medium text-red-500 absolute z-50 right-8 top-[165px] md:top-[10px] md:right-[40px] ">{errorText}</p>}
        <input 
          onChange={(e) => {handleChange(e)}} 
          spellCheck={false} 
          type="text" 
          defaultValue={name} 
          className={`${buttonPressed && error ? "border-red-500" : "outline-[#635FC7] hover:border-[#635FC7] border-[rgba(130, 143, 163, 0.25)]"} cursor-pointer hover:border-[#635FC7] outline-[#635FC7] w-[100%] h-10 pl-4 rounded-[4px] border border-solid border-[rgba(130, 143, 163, 0.25)]`}></input>
        <LogoCross 
          className={`${buttonPressed && error ? "fill-[#EA5555]" : "fill-mediumGray"} cursor-pointer`}
          onClick={() => {onClick(id)}}/>
    </div>
  )
}

export default FormComponent