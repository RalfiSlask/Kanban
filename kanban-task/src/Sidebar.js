import { useContext } from "react"
import BoardOverview from "./BoardOverview"
import DarkModePanel from "./DarkModePanel"
import MobileLogo from "./MobileLogo"
import DarkModeContext from "./context/DarkModeContext"
import HideSidebar from "./HideSidebar"

const Sidebar = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`${isDarkMode ? "bg-darkGrey" : "bg-white"} md:w-[260px] xl:w-[300px] min-h-[1024px] flex flex-col absolute top-0 left-0 pt-8 pb-12 border-r pl-3 xl:pl-6 border-linesLight`}>
        <MobileLogo margins={"mb-14"}/>
        <BoardOverview absolute={"absolute left-0 top-24"}/>
        <DarkModePanel margins={"mb-6 mt-[800px]"}/>
        <HideSidebar />
    </div>
  )
}

export default Sidebar