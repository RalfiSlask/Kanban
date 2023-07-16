import { createContext, useState, useEffect } from "react";

const Context = createContext({})

export const ContextProvider = ( {children} ) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false)
    const [platformList, setPlatformList] = useState([{id: 1, title: "Platform Launch"}])

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
    }

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default Context;