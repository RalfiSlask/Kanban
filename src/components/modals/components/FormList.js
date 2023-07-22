import BoardContext from "../../../context/BoardContext";
import FormComponent from "./FormComponent";
import { useContext } from "react"

const FormList = ( {title, inputs, setInputs } ) => {
  const { deleteInputOnClick } = useContext(BoardContext)
  
  return (
        <form className="flex flex-col mt-6 mb-4">
          <label className="text-[12px] font-bold text-mediumGray">{title}</label>
            <div className="flex flex-col gap-3 mt-[8px]">
            {inputs.map((input, index) => (
                <FormComponent 
                  key={index} 
                  id={index} 
                  name={input.name} 
                  onClick={() => deleteInputOnClick(index, inputs, setInputs)} 
                  />
            ))}
            </div>
        </form>
  )
}

export default FormList