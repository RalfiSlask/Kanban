import BoardContext from "../../../context/BoardContext";
import FormComponent from "./FormComponent";
import { useContext, useEffect, useState } from "react"
import ModalLabel from "./ModalLabel";

const FormList = ( {title, inputs, setInputs} ) => {
  const { deleteInputOnClick, handleChangeListInputs } = useContext(BoardContext)
  const [typeOfInput, setTypeOfInput] = useState("")
  const randomPlaceholders = ["Make coffee", "Drink coffee and smile", "clean house", "Build a school out of Lego", "Read a newspaper", "Take up yoga", "Make a origami bird", "Go for a run" , "Sketch your pet", "Bake homemade pizza", "Go for picnic in a park", "Play a new instrument", "Go to the movies", "play poker"]

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
                  placeholder={title === "Subtasks" ? randomPlaceholders[index] : ""}
                  onChange={(event) => {handleChangeListInputs(index, typeOfInput, event)}} 
                  onClick={() => {deleteInputOnClick(index, inputs, setInputs)}}
                  />
            ))}
            </div>
        </form>
  )
}

export default FormList