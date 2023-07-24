import { createContext, useEffect, useState} from "react";

const FormContext = createContext({});

export const FormProvider = ( {children} ) => {
    const [boardError, setBoardError] = useState(true);
    const [errorText, setErrorText] = useState("Can’t be empty");
    const [buttonPressed, setButtonPressed] = useState(false)
    const [inputErrors, setInputErrors] = useState(false)
    const [newTask, setNewTask] = useState({title: "", description: "", status: "", subtasks: []})

    const updateNewTask = (input, type) => {
        let updatedTask = {...newTask}
        if(type === "title") {
            updatedTask.title = input
        } else {
            const newSubtask = {
                title: input,
                isCompleted: false,
            }
            updatedTask.subtasks.push(newSubtask)
        }
        setNewTask(updatedTask)
    };

    useEffect(() => {
        console.log(newTask)
    })

    const checkInputsForErrors = (error, inputIndex) => {
      setInputErrors(prevErrors => {
       return {...prevErrors, [inputIndex]:error }
      })
     };

    const contextValue = {
        // states
        errorText: errorText,
        boardError: boardError,
        buttonPressed: buttonPressed,
        inputErrors: inputErrors,
        // setters
        setBoardError: setBoardError,
        setButtonPressed: setButtonPressed,
        // functions
        checkInputsForErrors: checkInputsForErrors,
        updateNewTask: updateNewTask,
    };
    
    return (
        <FormContext.Provider value={contextValue}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext