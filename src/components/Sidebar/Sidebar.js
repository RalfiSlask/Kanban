import { useContext } from "react"
import BoardOverview from "../board/BoardOverview"
import DarkModePanel from "../../DarkModePanel"
import MobileLogo from "../header/MobileLogo"
import DarkModeContext from "../../context/DarkModeContext"
import HideSidebar from "./HideSidebar"
import Context from "../../context/Context"

const Sidebar = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const { sidebarOpen } = useContext(Context);

  return (
    <div className={`
    ${isDarkMode ? "bg-darkGrey border-linesDark" : "bg-white border-linesLight"}
    transition-transform duration-1000 ease-in-out transform md:w-[260px] xl:w-[300px] min-h-[100vh] flex flex-col z-10 absolute top-0 left-0 pb-12 border-r pl-3 xl:pl-6
    ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
  `}>
        <MobileLogo margins={"mb-14"}/>
        <BoardOverview absolute={"absolute left-0 top-24"}/>
        <DarkModePanel margins={"mb-6 mt-[780px]"}/>
        <HideSidebar />
    </div>
  )
}

export default Sidebar