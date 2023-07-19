import { createContext, useState, useEffect } from "react";

const Context = createContext({})

export const ContextProvider = ( {children} ) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(true)
    const [openModal, setOpenModal] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [lightboxActive, setLightboxActive] = useState(false);
    const [openNewBoardModal, setOpenNewBoardModal] = useState(false);
    const [openChangeBoardModal, setOpenChangeBoardModal] = useState(false);
    const [openDeleteBoardModal, setDeleteBoardModal] = useState(false);
    const [openEditBoardModal, setEditBoardModal] = useState(false);

    const handleClickOnEdit = () => {
        setDeleteBoardModal(true)
        setLightboxActive(true)
    };

    const handleClickOnDelete = () => {
        setEditBoardModal(true)
        setLightboxActive(true)
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

    const openNewBoard = () => {
        setOpenNewBoardModal(true)
        setOpenModal(false)
        setLightboxActive(true)
    };

    const closeNewBoard = () => {
        setOpenNewBoardModal(false)
        setLightboxActive(false)
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
        openModal: openModal,
        sidebarOpen: sidebarOpen,
        lightboxActive: lightboxActive,
        openNewBoardModal: openNewBoardModal,
        openChangeBoardModal: openChangeBoardModal,
        handlePlatformClick: handlePlatformClick,
        toggleChangeBoardModal: toggleChangeBoardModal,
        closeSidebarOnClick: closeSidebarOnClick,
        openSidebarOnClick: openSidebarOnClick,
        openNewBoard: openNewBoard,
        closeNewBoard: closeNewBoard,
        handleClickOnDelete: handleClickOnDelete,
        handleClickOnEdit: handleClickOnEdit,
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default Context;