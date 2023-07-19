import { createContext, useState, useEffect } from "react";

const Context = createContext({})

export const ContextProvider = ( {children} ) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(true)
    const [openModal, setOpenModal] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [lightboxActive, setLightboxActive] = useState(false);
    const [openNewBoardModal, setOpenNewBoardModal] = useState(false);

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

    const handleClickOnNewBoard = () => {
        setOpenNewBoardModal(true)
        setOpenModal(false)
        setLightboxActive(true)
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
        handlePlatformClick: handlePlatformClick,
        openModal: openModal,
        sidebarOpen: sidebarOpen,
        lightboxActive: lightboxActive,
        openNewBoardModal: openNewBoardModal,
        closeSidebarOnClick: closeSidebarOnClick,
        openSidebarOnClick: openSidebarOnClick,
        handleClickOnNewBoard: handleClickOnNewBoard,
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default Context;