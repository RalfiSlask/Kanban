import { useContext } from "react"
import BoardOverview from "../board/BoardOverview"
import DarkModePanel from "../../DarkModePanel"
import MobileLogo from "../header/MobileLogo"
import DarkModeContext from "../../context/DarkModeContext"
import HideSidebar from "./HideSidebar"
import ModalContext from "../../context/ModalContext"

const Sidebar = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const { sidebarOpen } = useContext(ModalContext);

  return (
    <div className={`transition-transform duration-1000 ease-in-out transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:w-[260px] xl:w-[300px] md:min-h-[1040px] xl:min-h-[1060px] rounded-b-md border-b flex flex-col z-10 absolute top-0 left-0 pb-12 border-r pl-3 xl:pl-6 ${
        isDarkMode ? "bg-darkGrey border-linesDark" : "bg-white border-linesLight"
      }`}>
      <MobileLogo margins={"mb-14"}/>
      <BoardOverview absolute={"absolute left-0 top-24"}/>
      <DarkModePanel margins={"mb-6 mt-[780px]"}/>
      <HideSidebar />
    </div>
  )
}

export default Sidebar
