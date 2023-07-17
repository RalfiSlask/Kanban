import { ReactComponent as LogoHideSidebar} from "./assets/icon-hide-sidebar.svg";
import { useContext } from "react";
import Context from "./context/Context";
import DarkModeContext from "./context/DarkModeContext";


const HideSidebar = () => {
  const { closeSidebarOnClick } = useContext(Context);
  const { isDarkMode } = useContext(DarkModeContext)

  return (
    <div className={`${isDarkMode ? "hover:bg-white " : "hover:bg-purpleColor hover:opacity-0.1"} left-0 top-[1000px] absolute pl-8 pr-28 w-[276px] h-12 fill-mediumGray rounded-r-full hover:text-purpleColor hover:fill-purpleColor cursor-pointer flex items-center justify-between`} onClick={closeSidebarOnClick}>
        <LogoHideSidebar className="h-4 w-[20px]"/> 
        <p className="font-bold text-[15px]">Hide Sidebar</p>
    </div>
  )
}

export default HideSidebar