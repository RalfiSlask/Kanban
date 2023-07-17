import DarkModeContext from "./context/DarkModeContext"
import Context from "./context/Context";
import { useContext } from "react"
import EmptyBoard from "./EmptyBoard";
import Sidebar from "./Sidebar";
import Lightbox from "./Lightbox";

const MainSection = () => {
    const { isDarkMode } = useContext(DarkModeContext);
    const { openModal, isMobile, sidebarOpen } = useContext(Context)

  return (
    <main className={`${isDarkMode ? "bg-darkBG" : "bg-lightBG"} text-gray-500 flex justify-center h-[100%]`}>
        {!isMobile && sidebarOpen && <Sidebar />}
        {openModal && <Lightbox />}
        <EmptyBoard />
    </main>
  )
}

export default MainSection