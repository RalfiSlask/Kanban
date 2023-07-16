import { useContext } from "react"
import DarkModeContext from "./context/DarkModeContext"
import { ReactComponent as LogoDark } from "./assets/icon-dark-theme.svg";
import { ReactComponent as LogoLight } from "./assets/icon-light-theme.svg";


const DarkModePanel = () => {
    const { isDarkMode } = useContext(DarkModeContext)

  return (
    <div className={`${isDarkMode ? "bg-gray-700" : "bg-gray-100" } flex items-center justify-center w-[235px] h-12 rounded-lg gap-4`}> 
        <LogoLight className="fill-gray-600"/>
        <input type="range" value="1" min="1" max="2" className="w-8 h-8"/>
        <LogoDark className="fill-gray-600"/>
    </div>
  )
}

export default DarkModePanel