import { ReactComponent as LogoHideSidebar} from "../../assets/icon-hide-sidebar.svg";
import { useContext } from "react";
import Context from "../../context/Context";
import DarkModeContext from "../../context/DarkModeContext";

const HideSidebar = () => {
  const { closeSidebarOnClick } = useContext(Context);
  const { isDarkMode } = useContext(DarkModeContext)

  return (
    <div className={`${isDarkMode ? "hover:bg-white " : "hover:bg-hoverPurple"} left-0 top-[1000px] gap-3 absolute pl-8 md:pr-20 xl:pr-28 md:w-[246px] xl:w-[276px] h-12 fill-mediumGray rounded-r-full hover:text-purpleColor hover:fill-purpleColor cursor-pointer flex items-center`} onClick={closeSidebarOnClick}>
        <LogoHideSidebar className="h-4 w-[20px]"/> 
        <p className="font-bold text-[15px]">Hide Sidebar</p>
    </div>
  )
}

export default HideSidebar