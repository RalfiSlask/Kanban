import { createContext, useState } from "react"

const DarkModeContext = createContext({});

export const DarkModeProvider = ( {children} ) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [value, setValue] = useState(1);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode)
    }
    
    const handleChangeOnInput = (event) => {
      setValue(event.target.value)
    };

    const handleClick = () => {
      toggleDarkMode()
    }

    const contextValue = {
        value: value,
        isDarkMode: isDarkMode,
        setIsDarkMode: setIsDarkMode,
        handleClick: handleClick,
        handleChangeOnInput: handleChangeOnInput,
    }

    return (
        <DarkModeContext.Provider value={contextValue}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeContext