import DarkModeContext from "./context/DarkModeContext"
import Context from "./context/Context";
import { useContext } from "react"
import Sidebar from "./Sidebar";
import Lightbox from "./ui/Lightbox";
import ShowSidebar from "./ShowSidebar";
import BoardSection from "./BoardSection";
import AddNewBoardModal from "./modals/AddNewBoardModal";
import DeleteBoardModal from "./modals/DeleteBoardModal";
import AddNewTaskModal from "./modals/AddNewTaskModal"

const MainSection = () => {
    const { isDarkMode } = useContext(DarkModeContext);
    const { lightboxActive, isMobile, sidebarOpen, openNewBoardModal } = useContext(Context)

  return (
    <main className={`${isDarkMode ? "bg-darkBG" : "bg-lightBG"} text-gray-500 flex justify-center h-[100%]`}>
        {!isMobile && sidebarOpen && <Sidebar />}
        {!isMobile && !sidebarOpen && <ShowSidebar />}
        {lightboxActive && <Lightbox />}
        <BoardSection />
        {openNewBoardModal && <AddNewBoardModal />}
        <AddNewTaskModal />
        <DeleteBoardModal />
    </main>
  )
}

export default MainSection