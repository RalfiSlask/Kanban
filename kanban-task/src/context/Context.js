import { createContext, useState, useEffect } from "react";

const Context = createContext({})

export const ContextProvider = ( {children} ) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(true)
    const [platformList, setPlatformList] = useState([{id: 1, title: "Platform Launch"}, {id: 2, title: "Hej"}])
    const [selectedPlatform, setSelectedPlatform] = useState("Platform Launch")
    const [openModal, setOpenModal] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true)

    const closeSidebarOnClick = () => {
        setSidebarOpen(false)
    };

    const openSidebarOnClick = () => {
        setSidebarOpen(true)
    };

    
    const handlePlatformClick = () => {
        if(isMobile) {
            setOpenModal(prevState => !prevState)
        }
    };

    const handleClickOnPlatform = (id) => {
        Array.from(platformList).forEach(platform => {
          if(platform.id === id) {
            setSelectedPlatform(platform.title)
          }
        })
      };
  

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        } 
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [windowWidth])

    useEffect(() => {
        windowWidth < 772 ? setIsMobile(true) : setIsMobile(false)
    }, [windowWidth])

    const contextValue = {
        isMobile: isMobile,
        platformList: platformList,
        selectedPlatform: selectedPlatform,
        handleClickOnPlatform: handleClickOnPlatform,
        handlePlatformClick: handlePlatformClick,
        openModal: openModal,
        sidebarOpen: sidebarOpen,
        closeSidebarOnClick: closeSidebarOnClick,
        openSidebarOnClick: openSidebarOnClick,
    }

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default Context;