import { createContext, useState, useEffect } from "react";
import data from "../data/data.json"

const BoardContext = createContext({})

export const BoardProvider = ( {children} ) => {
    const [boardList, setboardList] = useState(data.boards)
    const [selectedBoard, setselectedBoard] = useState("Platform Launch")
    const [boardNumber, setBoardNumber] = useState(0)
    const [columns, setColumns] = useState([])
    const [newColumns, setNewColumns] = useState([{name: "Todo", tasks: []}, {name: "Doing", tasks: []}])
    const [boardName, setBoardName] = useState("")
    const [taskName, setTaskName] = useState("")
    const [description, setDescription] = useState("")
    const [task, setTask] = useState("")
    const [subtasks, setSubtasks] = useState([]);
    const [newTask, setNewTask] = useState({title: "", description: "", status: "", subtasks: []})
    const randomPlaceholders = ["Make coffee", "Drink coffee and smile", "clean house", "Build a school out of Lego", "Read a newspaper", "Take up yoga", "Make a origami bird", "Go for a run" , "Sketch your pet", "Bake homemade pizza", "Go for picnic in a park"]

    const pickRandomPlaceholder = () => {
      const randomIndex = Math.floor(Math.random() * randomPlaceholders.length)
      const randomPlaceholder = randomPlaceholders[randomIndex]
      return randomPlaceholder;
    };
    
    useEffect(() => {
      const currentTask = {...task} 
      setSubtasks(currentTask.subtasks)
    }, [task])

    const deleteBoardOnClick = () => {
      const updatedList = boardList.filter(board => !(board.name === selectedBoard))
      setboardList(updatedList)
       if(updatedList.length > 0) {
        setselectedBoard(updatedList[0].name)
      } else {
        setColumns([])
        setselectedBoard(null)
      }
      localStorage.setItem("boards", JSON.stringify(updatedList))
     };
   
    const AddNewBoard = () => {
      const updatedList = [...boardList, {name: boardName, columns: newColumns}]
      setboardList(updatedList)
      localStorage.setItem("boards", JSON.stringify(updatedList))
    };

    const handleChangeTitle = (title, event) => {
      if(title === "Board Name") {
        setBoardName(event.target.value)
      } else if(title === "Title") {
        setTaskName(event.target.value)
      } 
    };

    const handleChangeDescription = (event) => {
      setDescription(event.target.value)
    };

    const handleChangeListInputs = (index, type, event) => {
      if(type === "subtask") {
        const updatedSubtasks = [...subtasks]
        updatedSubtasks[index] =  {...updatedSubtasks[index], title: event.target.value, isCompleted:false}
        setSubtasks(updatedSubtasks)
      } else if(type === "column") {
        const updatedColumns = [...newColumns]
        updatedColumns[index] =  {...updatedColumns[index], name: event.target.value, tasks: []}
        setNewColumns(updatedColumns)
      }
    };

    useEffect(() => {
      console.log("subtasks: ", subtasks)
      console.log("boardcolumns: ", newColumns)
      console.log(columns)
    })

    const clickOnNewColumn = () => {
      setNewColumns(prev => [...prev, {name: "", tasks: []}])
    };

    const addColumn = () => {
      setColumns(prev => [...prev, {name: "", tasks: []}])
    };

    const addNewSubtask = () => {
      setSubtasks(prev => [...prev, {title: "", isCompleted: false}])
    };

    const deleteInputOnClick = (id, inputs, setInputs) => {
      const Inputs = [...inputs]
      const filteredInputs = Inputs.filter((input, index) => !(index === id))
      setInputs(filteredInputs)
    };

    const handleClickOnBoard = (id) => {
        Array.from(boardList).forEach((platform, index) => {
          if(index === id) {
            setselectedBoard(platform.name)
          }
        })
      };

      useEffect(() => {
        const storedBoards = JSON.parse(localStorage.getItem("boards"));
        if(storedBoards) {
          setboardList(storedBoards)
        }
      }, []);
      
      useEffect(() => {
        Array.from(boardList).forEach(board => {
           if(selectedBoard === board.name) {
             setColumns(board.columns)
           }
        })
        
     }, [selectedBoard, boardList]);
   
     useEffect(() => {
         setBoardNumber(Array.from(boardList).length)
     });

    const contextValue = {
        // states
        boardList: boardList,
        selectedBoard: selectedBoard,
        newColumns: newColumns,
        boardNumber: boardNumber,
        columns: columns,
        boardName: boardName,
        task: task,
        subtasks: subtasks,
        randomPlaceholders: randomPlaceholders,
        // setters
        setSubtasks: setSubtasks,
        setTask: setTask,
        setNewColumns: setNewColumns,
        setColumns: setColumns,
        // functions
        handleClickOnBoard: handleClickOnBoard,
        clickOnNewColumn: clickOnNewColumn,
        addColumn: addColumn,
        deleteBoardOnClick: deleteBoardOnClick,
        AddNewBoard: AddNewBoard,
        deleteInputOnClick: deleteInputOnClick,
        addNewSubtask: addNewSubtask,
        pickRandomPlaceholder: pickRandomPlaceholder,
        handleChangeDescription: handleChangeDescription,
        handleChangeTitle: handleChangeTitle,
        handleChangeListInputs: handleChangeListInputs,
    }

    return (
        <BoardContext.Provider value={contextValue}>
            {children}
        </BoardContext.Provider>
    )
}

export default BoardContext