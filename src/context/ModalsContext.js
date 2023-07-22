import { createContext, useState, useEffect } from "react";

const Context = createContext({})

export const ContextProvider = ( {children} ) => {
    const [openModal, setOpenModal] = useState(false);
    const [openNewBoardModal, setOpenNewBoardModal] = useState(false);
    const [openChangeBoardModal, setOpenChangeBoardModal] = useState(false);
    const [openDeleteBoardModal, setDeleteBoardModal] = useState(false);
    const [openEditBoardModal, setEditBoardModal] = useState(false);
    const [openTaskModal, setOpenTaskModal] = useState(false)
    const [openEditTaskModal, setEditTaskModal] = useState(false)
    const [openCreateTaskModal, setCreateTaskModal] = useState(false)
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
        isMobile: isMobile,
        sidebarOpen: sidebarOpen,
        lightboxActive: lightboxActive,
        // Modal booleans
        openModal: openModal,
        openEditTaskModal: openEditTaskModal,
        openNewBoardModal: openNewBoardModal,
        openChangeBoardModal: openChangeBoardModal,
        openChangeTaskModal: openChangeTaskModal,
        openDeleteTaskModal: openDeleteTaskModal,
        openDeleteBoardModal: openDeleteBoardModal,
        openEditBoardModal: openEditBoardModal,
        openTaskModal: openTaskModal,
        // Modal setters
        setDeleteTaskModal: setDeleteTaskModal,
        setChangeTaskModal: setChangeTaskModal, 
        setEditTaskModal: setEditTaskModal,
        setOpenModal: setOpenModal,
        setOpenTaskModal: setOpenTaskModal,
        setDeleteBoardModal: setDeleteBoardModal,
        setEditBoardModal: setEditBoardModal,
        setOpenNewBoardModal: setOpenNewBoardModal,
        // functions
        handlePlatformClick: handlePlatformClick,
        toggleChangeBoardModal: toggleChangeBoardModal,
        closeSidebarOnClick: closeSidebarOnClick,
        openSidebarOnClick: openSidebarOnClick,
        openModalOnClick: openModalOnClick,
        closeModalOnClick: closeModalOnClick,
        handleClickOnDeleteTaskText: handleClickOnDeleteTaskText,
        handleClickOnEditTaskText: handleClickOnEditTaskText,
     
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default Context;