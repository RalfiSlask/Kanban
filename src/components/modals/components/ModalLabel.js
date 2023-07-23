import { useContext } from "react"
import DarkModeContext from "../../../context/DarkModeContext"

const ModalLabel = ( {text} ) => {
    const { isDarkMode } = useContext(DarkModeContext)

  return (
    <label className={`${isDarkMode ? "text-white" : "text-mediumGray"} text-[12px] font-bold `}>{text}</label>
  )
}

export default ModalLabel