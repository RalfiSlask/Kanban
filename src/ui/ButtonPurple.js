import FormContext from "../context/FormContext"
import { useContext } from "react"

const ButtonPurple = ( {text} ) => {
  const { setButtonPressed } = useContext(FormContext)
  
  const handleClick = () => {
    setButtonPressed(true)
  };

  return (
    <button onClick={handleClick} className="bg-[#635FC7] w-[100%] hover:bg-[#A8A4FF] mt-6 h-[40px] rounded-[20px] align font-bold text-[13px] text-white leading-[23px]">{text}</button>
  )
}

export default ButtonPurple