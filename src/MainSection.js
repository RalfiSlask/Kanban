import DarkModeContext from "./context/DarkModeContext"
import Context from "./context/Context";
import { useContext } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Lightbox from "./ui/Lightbox";
import ShowSidebar from "./components/Sidebar/ShowSidebar";
import BoardSection from "./components/board/BoardSection";
import AddNewBoardModal from "./components/modals/create/AddNewBoardModal";
import DeleteBoardModal from "./components/modals/delete/DeleteBoardModal";
import EditBoardModal from "./components/modals/edit/EditBoardModal";
import DeleteTaskModal from "./components/modals/delete/DeleteTaskModal";
import TaskModal from "./components/modals/TaskModal";
import EditTaskModal from "./components/modals/edit/EditTaskModal";
import AddNewTaskModal from "./components/modals/create/AddNewTaskModal";

const MainSection = () => {
    const { isDarkMode } = useContext(DarkModeContext);
    const { lightboxActive, openNewTaskModal, openEditTaskModal, openDeleteTaskModal, isMobile, sidebarOpen, 
      openTaskModal, openNewBoardModal, openDeleteBoardModal, openEditBoardModal } = useContext(Context)

  return (
    <main className={`${isDarkMode ? "bg-darkBG" : "bg-lightBG"} text-gray-500 flex justify-center h-[100%] w-[100%]`}>
        {!isMobile && sidebarOpen && <Sidebar />}
        {!isMobile && !sidebarOpen && <ShowSidebar />}
        {lightboxActive && <Lightbox />}
        <BoardSection />
        {openTaskModal && <TaskModal />}
        {openNewBoardModal && <AddNewBoardModal />}
        {openEditBoardModal && <EditBoardModal />}
        {openDeleteBoardModal && <DeleteBoardModal />}
        {openDeleteTaskModal && <DeleteTaskModal />}
        {openEditTaskModal && <EditTaskModal />}
        {openNewTaskModal && <AddNewTaskModal />}
    </main>
  )
}

export default MainSection