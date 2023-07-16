import logoPlatform from "./assets/icon-board.svg";
import { useContext } from "react";
import DarkModeContext from "./context/DarkModeContext";

const Platform = ( {id, title} ) => {
    const { isDarkMode } = useContext(DarkModeContext)

  return (
    <>
    <div className={`flex items-center w-[240px] h-[48px] rounded-tl-0 rounded-br-full`}>
        <img src={logoPlatform} alt="platform logo" />
        {title}
    </div>
    </>
    
  )
}

export default Platform