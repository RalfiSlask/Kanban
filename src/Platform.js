import { ReactComponent as LogoPlatform} from "./assets/icon-board.svg";
import { useContext } from "react";
import BoardContext from "./context/BoardContext";
import DarkModeContext from "./context/DarkModeContext";

const Platform = ( {id, title } ) => {
  const { selectedBoard, handleClickOnBoard } = useContext(BoardContext);
  const { isDarkMode } = useContext(DarkModeContext)

  return (
    <div 
      className={`${selectedBoard === title ? "bg-purpleColor text-white fill-white" : "text-mediumGray hover:text-purpleColor hover:fill-purpleColor "} 
      ${isDarkMode && selectedBoard !== title ? "hover:bg-white" : ""} ${!isDarkMode && selectedBoard !== title ? "hover:bg-hoverPurple" : ""} fill-mediumGray cursor-pointer flex items-center w-[240px] h-[48px] rounded-tl-0 rounded-r-full pl-6`} 
      onClick={() => {handleClickOnBoard(id)}}
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