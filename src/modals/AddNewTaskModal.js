import DarkModeContext from "../context/DarkModeContext"
import { useContext } from "react"

const AddNewTaskModal = () => {
  const { isDarkMode } = useContext(DarkModeContext)

  return (
    <div className={`${isDarkMode ? "bg-darkGrey text-white" : "bg-white text-black"} absolute z-20 w-[343px] md:w-[480px] p-[24px] md:p-[32px] rounded-[6px]`}>
   
    </div>
  )
}

export default AddNewTaskModal