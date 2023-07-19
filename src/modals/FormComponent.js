import logoCross from "../assets/icon-cross.svg";
import { useState } from "react"

const FormComponent = ( {id, name, onClick} ) => {
    const [input, setInput] = useState(name)

    const handleChange = (event) => {
        setInput(event.target.value)
    };

  return (
    <div className="flex justify-between items-center gap-4">
        <input onChange={(e) => {handleChange(e)}} spellCheck={false} type="text" defaultValue={name} className="cursor-pointer hover:border-[#635FC7] outline-[#635FC7] w-[100%] h-10 pl-4 rounded-[4px] border border-solid border-[rgba(130, 143, 163, 0.25)]"></input>
        <img src={logoCross} alt="cross logo" className="cursor-pointer" onClick={() => {onClick(id)}}/>
    </div>
  )
}

export default FormComponent