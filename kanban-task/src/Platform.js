import { ReactComponent as LogoPlatform} from "./assets/icon-board.svg";
import { useContext } from "react";
import Context from "./context/Context";
import DarkModeContext from "./context/DarkModeContext";

const Platform = ( {id, title } ) => {
  const { selectedPlatform, handleClickOnPlatform } = useContext(Context);
  const { isDarkMode } = useContext(DarkModeContext)

  return (
    <div 
      className={`${selectedPlatform === title ? "bg-purpleColor text-white fill-white" : "text-mediumGray"} 
      ${isDarkMode && selectedPlatform !== title ? "hover:bg-white hover:text-purpleColor hover:fill-purpleColor" : ""} fill-mediumGray  cursor-pointer flex items-center w-[240px] h-[48px] rounded-tl-0 rounded-r-full pl-6`} 
      onClick={() => {handleClickOnPlatform(id)}}
      >
        <LogoPlatform 
          alt="platform logo" 
          className="mr-3"
        />
        {title}
    </div>    
  )
}

export default Platform