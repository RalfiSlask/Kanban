import { createContext, useEffect, useState} from "react";

const FormContext = createContext({});

export const FormProvider = ( {children} ) => {
    const [boardError, setBoardError] = useState(false);
    const [errorText, setErrorText] = useState("Can’t be empty");

    const contextValue = {
        errorText: errorText,
        boardError: boardError,
        setBoardError: setBoardError,
    }
    
    return (
        <FormContext.Provider value={contextValue}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext