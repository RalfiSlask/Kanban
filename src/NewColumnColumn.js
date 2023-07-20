import { useContext } from "react";
import DarkModeContext from "./context/DarkModeContext";

const NewColumnColumn = () => {
    const { isDarkMode } = useContext(DarkModeContext)

  return (
    <div className="flex items-center justify-center w-[280px]">
       <div className={`${isDarkMode ? "text-mediumGray hover:text-[#635FC7]" : "text-[#635FC7]"} cursor-pointer font-bold text-2xl`}>+ New Column</div>
    </div>
  )
}

export default NewColumnColumn