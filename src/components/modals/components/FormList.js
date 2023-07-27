import BoardContext from "../../../context/BoardContext";
import FormComponent from "./FormComponent";
import { useContext, useEffect, useState } from "react"
import ModalLabel from "./ModalLabel";

const FormList = ( {title, inputs, setInputs} ) => {
  const { deleteInputOnClick, handleChangeListInputs } = useContext(BoardContext)
  const [typeOfInput, setTypeOfInput] = useState("")

  useEffect(() => {
    if(title === "Subtasks") {
      setTypeOfInput("subtask")
    } else if(title === "Board Columns") {
      setTypeOfInput("column")
    }
  }, [title])

  return (
        <form className="flex flex-col mt-6">
          <ModalLabel text={title}/>
            <div className="flex flex-col gap-3 mt-[8px]">
            {inputs.map((input, index) => (
                <FormComponent 
                  key={index} 
                  id={index} 
                  name={input.name !== undefined ? input.name : input.title}
                  type={typeOfInput}
                  onChange={(event) => {handleChangeListInputs(index, typeOfInput, event)}} 
                  onClick={() => {deleteInputOnClick(index, inputs, setInputs)}}
                  />
            ))}
            </div>
        </form>
  )
}

export default FormList