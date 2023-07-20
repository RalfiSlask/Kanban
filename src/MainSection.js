import DarkModeContext from "./context/DarkModeContext"
import Context from "./context/Context";
import { useContext } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Lightbox from "./ui/Lightbox";
import ShowSidebar from "./components/Sidebar/ShowSidebar";
import BoardSection from "./BoardSection";
import AddNewBoardModal from "./components/modals/AddNewBoardModal";
import DeleteBoardModal from "./components/modals/DeleteBoardModal";
import EditBoardModal from "./components/modals/EditBoardModal";

const MainSection = () => {
    const { isDarkMode } = useContext(DarkModeContext);
    const { lightboxActive, isMobile, sidebarOpen, openNewBoardModal, openDeleteBoardModal, openEditBoardModal } = useContext(Context)

  return (
    <main className={`${isDarkMode ? "bg-darkBG" : "bg-lightBG"} text-gray-500 flex justify-center h-[100%] w-[100%]`}>
        {!isMobile && sidebarOpen && <Sidebar />}
        {!isMobile && !sidebarOpen && <ShowSidebar />}
        {lightboxActive && <Lightbox />}
        <BoardSection />
        
        {openNewBoardModal && <AddNewBoardModal />}
        {openEditBoardModal && <EditBoardModal />}
        {openDeleteBoardModal && <DeleteBoardModal />}
    </main>
  )
}

export default MainSection