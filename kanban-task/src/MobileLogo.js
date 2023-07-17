import logoMobile from "./assets/logo-mobile.svg";
import { useContext } from "react";
import Context from "./context/Context";
import DarkModeContext from "./context/DarkModeContext";


const MobileLogo = ( {margins} ) => {
    const { isMobile } = useContext(Context);
    const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`flex items-center ${margins}`}>
        <img src={logoMobile} alt="logo mobile" className="h-[24px] w-[24px] mr-4"/>
        {isMobile ? null : <p className={`${isDarkMode ? "text-white" : "text-black"} text-2xl font-bold`}>kanban</p>}
    </div>
  )
}

export default MobileLogo