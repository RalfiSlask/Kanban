import BoardContext from "../../../context/BoardContext";
import FormComponent from "./FormComponent";
import { useContext } from "react"
import ModalLabel from "./ModalLabel";

const FormList = ( {title, inputs, setInputs, removePlaceholder } ) => {
  const { deleteInputOnClick } = useContext(BoardContext)

  const handleClick = (index) => {
    if(removePlaceholder) {
      removePlaceholder(index)
    }
    deleteInputOnClick(index, inputs, setInputs)
  };

  return (
        <form className="flex flex-col mt-6">
          <ModalLabel text={title}/>
            <div className="flex flex-col gap-3 mt-[8px]">
            {inputs.map((input, index) => (
                <FormComponent 
                  key={index} 
                  id={index} 
                  name={input.name ? input.name : input.title} 
                  onClick={() => {handleClick(index, inputs, setInputs)}}
                  />
            ))}
            </div>
        </form>
  )
}

export default FormList