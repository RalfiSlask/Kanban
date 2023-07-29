import { ReactComponent as LogoCross } from "../../../assets/icon-cross.svg";
import { useState, useContext} from "react"
import FormContext from "../../../context/FormContext";
import Input from "./Input";
import BoardContext from "../../../context/BoardContext";

const FormComponent = ( {id, name, onClick, onChange } ) => {
    const { buttonPressed } = useContext(FormContext)
    const { pickRandomPlaceholder } = useContext(BoardContext)
    const [isLogoRed, setIsLogoRed] = useState(false)
    const [placeholder] = useState(pickRandomPlaceholder)
  
  return (
    <div className="flex items-center justify-between gap-4 md:relative">
        <Input 
          placeholder={placeholder} 
          value={name}
          setIsLogoRed={setIsLogoRed}
          id={id}
          onChange={onChange}
        />
        <LogoCross 
          className={`${buttonPressed && isLogoRed ? "fill-[#EA5555]" : "fill-mediumGray"} cursor-pointer`}
          onClick={() => {onClick(id)}}/>
    </div>
  )
}

export default FormComponent