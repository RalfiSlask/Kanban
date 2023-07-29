import { createContext, useState } from "react"

const DarkModeContext = createContext({});

export const DarkModeProvider = ( {children} ) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [value, setValue] = useState(1);

    const handleClick = (event) => {
        setValue(event.target.value)
        if(event.target.value == 1) {
            setIsDarkMode(false)
        } else if(event.target.value == 2) {
            setIsDarkMode(true)
        }
    };

    const contextValue = {
        value: value,
        isDarkMode: isDarkMode,
        setIsDarkMode: setIsDarkMode,
        handleClick: handleClick,
    };

    return (
        <DarkModeContext.Provider value={contextValue}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeContext