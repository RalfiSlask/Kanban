import { createContext, useState } from "react"

const DarkModeContext = createContext({});

export const DarkModeProvider = ( {children} ) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode)
    }

    const contextValue = {
        isDarkMode: isDarkMode,
        toggleDarkMode: toggleDarkMode,
    }

    return (
        <DarkModeContext.Provider value={contextValue}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeContext