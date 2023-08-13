import { createContext, useState, useEffect } from "react";

const ModalContext = createContext({})

export const ModalContextProvider = ( {children} ) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(true)
    const [openModal, setOpenModal] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [lightboxActive, setLightboxActive] = useState(false);
    const [openNewBoardModal, setOpenNewBoardModal] = useState(false);
    const [openChangeBoardModal, setOpenChangeBoardModal] = useState(false);
    const [openDeleteBoardModal, setDeleteBoardModal] = useState(false);
    const [openEditBoardModal, setEditBoardModal] = useState(false);
    const [openTaskModal, setOpenTaskModal] = useState(false)
    const [openEditTaskModal, setEditTaskModal] = useState(false)
    const [openNewTaskModal, setNewTaskModal] = useState(false)
    const [openChangeTaskModal, setChangeTaskModal] = useState(false)
    const [openDeleteTaskModal, setDeleteTaskModal] = useState(false)
    
    const openModalOnClick = (setModal) => {
        setModal(true)
        setLightboxActive(true)
    };

    const closeModalOnClick = (setModal) => {
        setModal(false)
        setLightboxActive(false)
    };

    const toggleChangeBoardModal = () => {
        setOpenChangeBoardModal(prevState => !prevState)
    };

    const closeSidebarOnClick = () => {
        setSidebarOpen(false)
    };

    const openSidebarOnClick = () => {
        setSidebarOpen(true)
    };

    const handlePlatformClick = () => {
        if(isMobile) {
            setOpenModal(prevState => !prevState)
            setLightboxActive(true)
        }
    };

    const handleClickOnDeleteTaskText = () => {
        setDeleteTaskModal(true)
        setOpenTaskModal(false)
        setChangeTaskModal(false)
    };

    const handleClickOnEditTaskText = () => {
        setEditTaskModal(true)
        setOpenTaskModal(false)
        setChangeTaskModal(false)
    };

    const handleClickOnEditBoardText = () => {
        setOpenChangeBoardModal(false)
        openModalOnClick(setEditBoardModal)
    };

    const handleClickOnDeleteBoardText = () => {
        setOpenChangeBoardModal(false)
        openModalOnClick(setDeleteBoardModal)
    };
    
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        } 
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [windowWidth]);

    useEffect(() => {
        windowWidth < 772 ? setIsMobile(true) : setIsMobile(false)
        if(windowWidth > 772) {
            setOpenModal(false)
        }
    }, [windowWidth]);

    const contextValue = {
        // states
        isMobile: isMobile,
        sidebarOpen: sidebarOpen,
        lightboxActive: lightboxActive,
        openModal: openModal,
        openEditTaskModal: openEditTaskModal,
        openNewBoardModal: openNewBoardModal,
        openChangeBoardModal: openChangeBoardModal,
        openChangeTaskModal: openChangeTaskModal,
        openDeleteTaskModal: openDeleteTaskModal,
        openDeleteBoardModal: openDeleteBoardModal,
        openEditBoardModal: openEditBoardModal,
        openTaskModal: openTaskModal,
        openNewTaskModal: openNewTaskModal,
        // Modal setters
        setDeleteTaskModal: setDeleteTaskModal,
        setChangeTaskModal: setChangeTaskModal, 
        setEditTaskModal: setEditTaskModal,
        setOpenModal: setOpenModal,
        setOpenTaskModal: setOpenTaskModal,
        setDeleteBoardModal: setDeleteBoardModal,
        setEditBoardModal: setEditBoardModal,
        setOpenNewBoardModal: setOpenNewBoardModal,
        setNewTaskModal: setNewTaskModal,
        // functions
        handlePlatformClick: handlePlatformClick,
        toggleChangeBoardModal: toggleChangeBoardModal,
        closeSidebarOnClick: closeSidebarOnClick,
        openSidebarOnClick: openSidebarOnClick,
        openModalOnClick: openModalOnClick,
        closeModalOnClick: closeModalOnClick,
        handleClickOnDeleteTaskText: handleClickOnDeleteTaskText,
        handleClickOnEditTaskText: handleClickOnEditTaskText,
        handleClickOnEditBoardText: handleClickOnEditBoardText,
        handleClickOnDeleteBoardText: handleClickOnDeleteBoardText,
     
    };

    return (
        <ModalContext.Provider value={contextValue}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext;