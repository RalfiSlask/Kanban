import { createContext, useState, useEffect } from "react";
import data from "../data/data.json"

const BoardContext = createContext({})

export const BoardProvider = ( {children} ) => {
    const [boardList, setboardList] = useState(data.boards)
    const [selectedBoard, setselectedBoard] = useState("Platform Launch")
    const [boardNumber, setBoardNumber] = useState(0)
    const [columns, setColumns] = useState([])
    const [boardName, setBoardName] = useState("")
    const [taskName, setTaskName] = useState("")
    const [description, setDescription] = useState("")
    const [task, setTask] = useState("")
    const [subtasks, setSubtasks] = useState([]);
    const [status, setStatus] = useState("")
    const [isValid, setIsValid] = useState(false);
    const [columnInputs, setColumnInputs] = useState([])
    const randomPlaceholders = ["Make coffee", "Drink coffee and smile", "clean house", "Build a school out of Lego", "Read a newspaper", "Take up yoga", "Make a origami bird", "Go for a run" , "Sketch your pet", "Bake homemade pizza", "Go for picnic in a park"]

    const pickRandomPlaceholder = () => {
      const randomIndex = Math.floor(Math.random() * randomPlaceholders.length)
      const randomPlaceholder = randomPlaceholders[randomIndex]
      return randomPlaceholder;
    };

    const updateTaskStatus = () => {
  /*     const currentTask = {...task}
      currentTask.status = status;
      setTask(currentTask)
      const currentColumns = [...columns]
      const currentColumn = currentColumns.filter(column => column.name === status)
      const currentTasks = currentColumn[0].tasks;
      console.log(currentColumns, currentColumn, currentTasks)

      const updatedList = [...boardList]
      localStorage.setItem("boards", JSON.stringify(updatedList)) */
    };

    const updateSubtasks = (id) => {
      const updatedSubtasks = [...subtasks]
      updatedSubtasks[id].isCompleted = !updatedSubtasks[id].isCompleted
      setSubtasks(updatedSubtasks)
      const updatedList = [...boardList]
      localStorage.setItem("boards", JSON.stringify(updatedList))
    };

    const addNewTask = () => {
      const updatedTask = {}
      updatedTask.title = taskName;
      updatedTask.description = description;
      updatedTask.subtasks = subtasks;
      updatedTask.status = status;
      const updatedColumns = [...columns]
      updatedColumns.forEach(column => {
        if(column.name === updatedTask.status) {
          column.tasks.push(updatedTask)
        }
      });
      const updatedBoardList = [...boardList]
      localStorage.setItem("boards", JSON.stringify(updatedBoardList))
     };

     useEffect(() => {
      console.log(columns)
      console.log("columnInputs:", columnInputs)
      console.log(boardName)
     })
    
    const checkValidity = () => {
      const subtasksNotEmpty = subtasks.every(subtask => subtask.title !== "")
      if(subtasksNotEmpty && taskName !== "") {
        setIsValid(true)
      } else {
        setIsValid(false)
      }
    };

    const checkBoardValidity = () => {
      const columnsNotEmpty = columnInputs.every(column => column.name !== "")
      if(columnsNotEmpty && boardName !== "") {
        console.log("hej")
        setIsValid(true)
      } else {
        setIsValid(false)
      }
    };

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
      const updatedList = [...boardList, {name: boardName, columns: columnInputs}]
      setboardList(updatedList)
      localStorage.setItem("boards", JSON.stringify(updatedList))
    };

    const changeBoard = () => {
      const updatedBoardList = [...boardList]
      updatedBoardList.forEach(board => {
        if(board.name === selectedBoard) {
          board.name = boardName;
          board.columns = columnInputs;
        }
      })
      setboardList(updatedBoardList)
    };

    const handleChangeTitle = (title, event) => {
      if(title === "Board Name") {
        setBoardName(event.target.value)
      } else if(title === "Title") {
        setTaskName(event.target.value)
      } 
    };

    const handleChangeListInputs = (index, type, event) => {
      if(type === "subtask") {
        const updatedSubtasks = [...subtasks]
        updatedSubtasks[index] =  {...updatedSubtasks[index], title: event.target.value, isCompleted:false}
        setSubtasks(updatedSubtasks)
      } else if(type === "column") {
        const updatedColumns = [...columnInputs]
        updatedColumns[index] =  {...updatedColumns[index], name: event.target.value}
        setColumnInputs(updatedColumns)
      }
    };

    const handleChangeDescription = (event) => {
      setDescription(event.target.value)
    };

    const clickOnNewColumn = () => {
      setColumnInputs(prev => [...prev, {name: "", tasks: []}])
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
      const currentTask = {...task} 
      setSubtasks(currentTask.subtasks)
    }, [task]);

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
        boardNumber: boardNumber,
        columns: columns,
        boardName: boardName,
        task: task,
        subtasks: subtasks,
        randomPlaceholders: randomPlaceholders,
        status: status,
        isValid: isValid,
        columnInputs: columnInputs,
        // setters
        setStatus: setStatus,
        setSubtasks: setSubtasks,
        setTask: setTask,
        setColumns: setColumns,
        setIsValid: setIsValid,
        setTaskName: setTaskName,
        setBoardName: setBoardName,
        setColumnInputs: setColumnInputs,
        // functions
        handleClickOnBoard: handleClickOnBoard,
        clickOnNewColumn: clickOnNewColumn,
        addNewTask: addNewTask,
        deleteBoardOnClick: deleteBoardOnClick,
        AddNewBoard: AddNewBoard,
        deleteInputOnClick: deleteInputOnClick,
        addNewSubtask: addNewSubtask,
        pickRandomPlaceholder: pickRandomPlaceholder,
        handleChangeDescription: handleChangeDescription,
        handleChangeTitle: handleChangeTitle,
        handleChangeListInputs: handleChangeListInputs,
        checkValidity: checkValidity,
        updateSubtasks: updateSubtasks,
        updateTaskStatus: updateTaskStatus,
        checkBoardValidity: checkBoardValidity,
        changeBoard: changeBoard,
    }

    return (
        <BoardContext.Provider value={contextValue}>
            {children}
        </BoardContext.Provider>
    )
}

export default BoardContext