import { createContext, useState, useEffect } from "react";
import data from "../data/data.json"

const BoardContext = createContext({})

export const BoardProvider = ( {children} ) => {

    const [boardList, setboardList] = useState([])
    const [selectedBoard, setselectedBoard] = useState("Platform Launch")
    const [boardNumber, setBoardNumber] = useState(0)
    const [columns, setColumns] = useState([])
    const [boardName, setBoardName] = useState("")
    const [taskName, setTaskName] = useState("")
    const [description, setDescription] = useState("")
    const [task, setTask] = useState("")
    const [subtasks, setSubtasks] = useState([]);
    const [statusInput, setStatusInput] = useState("")
    const [isValid, setIsValid] = useState(false);
    const [columnInputs, setColumnInputs] = useState([]);
    const [subtaskInputs, setSubtaskInputs] = useState([]);
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
      const updatedSubtasks = [...subtaskInputs]
      updatedSubtasks[id].isCompleted = !updatedSubtasks[id].isCompleted
      setSubtaskInputs(updatedSubtasks)
      const updatedList = [...boardList]
      localStorage.setItem("boards", JSON.stringify(updatedList))
    };

    useEffect(() => {
      console.log(task)
      console.log(statusInput)
    })

    const addNewTask = () => {
      const updatedTask = {
        title: taskName,
        description: description,
        subtasks: subtaskInputs,
        status: statusInput,
      }
      const updatedColumns = [...columns]
      updatedColumns.forEach(column => {
        if(column.name === updatedTask.status) {
          column.tasks.push(updatedTask)
        }
      });
      const updatedBoardList = [...boardList]
      setIsValid(false)
      localStorage.setItem("boards", JSON.stringify(updatedBoardList))
     };

     const changeTask = () => {
      const updatedBoardList = [...boardList]
      const index = updatedBoardList.findIndex(board => board.name === selectedBoard)
      const updatedColumns = updatedBoardList[index].columns
      const currentTask = {...task}
      updatedColumns.forEach(column => {
        column.tasks.forEach(currTask => {
          if(currTask.title === currentTask.title) {
            console.log("hej")

          }
          if(currTask.status = statusInput) {
            console.log("nej")
          }
        })
      })
      setColumns(updatedColumns)
      setboardList(updatedBoardList)
      setIsValid(false)
      localStorage.setItem("boards", JSON.stringify(updatedBoardList))
     };

    const AddNewBoard = () => {
      const updatedBoardList = [...boardList, {name: boardName, columns: columnInputs}]
      setboardList(updatedBoardList)
      setIsValid(false)
      localStorage.setItem("boards", JSON.stringify(updatedBoardList))
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
      setIsValid(false)
      setselectedBoard(boardName)
      localStorage.setItem("boards", JSON.stringify(updatedBoardList))
    };
    
    const checkValidity = () => {
      const subtasksNotEmpty = subtaskInputs.every(subtask => subtask.title !== "")
      if(subtasksNotEmpty && taskName !== "") {
        setIsValid(true)
      } else {
        setIsValid(false)
      }
    };

    const checkBoardValidity = () => {
      const columnsNotEmpty = columnInputs.every(column => column.name !== "")
      if(columnsNotEmpty && boardName !== "") {
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

    const handleChangeTitle = (title, event) => {
      if(title === "Board Name") {
        setBoardName(event.target.value)
      } else if(title === "Title") {
        setTaskName(event.target.value)
      } 
    };

    const handleChangeListInputs = (index, type, event) => {
      if(type === "subtask") {
        const updatedSubtasks = [...subtaskInputs]
        updatedSubtasks[index] =  {...updatedSubtasks[index], title: event.target.value, isCompleted:false}
        setSubtaskInputs(updatedSubtasks)
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
      setSubtaskInputs(prev => [...prev, {title: "", isCompleted: false}])
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
      setSubtaskInputs(currentTask.subtasks)
    }, [task]);

    useEffect(() => {
      const storedBoards = JSON.parse(localStorage.getItem("boards"));
      if(storedBoards) {
        setboardList(storedBoards)
        setselectedBoard(storedBoards[0].name)
      } else {
        setboardList(data.boards)
      }
    }, []);
    
    useEffect(() => {
      Array.from(boardList).forEach(board => {
          if(selectedBoard === board.name) {
            setColumns(board.columns)
          }
      })
        
     }, [selectedBoard, boardList, columns]);
   
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
        status: statusInput,
        isValid: isValid,
        columnInputs: columnInputs,
        subtaskInputs: subtaskInputs,
        // setters
        setStatusInput: setStatusInput,
        setSubtaskInputs: setSubtaskInputs,
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
        changeTask: changeTask,
    }

    return (
        <BoardContext.Provider value={contextValue}>
            {children}
        </BoardContext.Provider>
    )
}

export default BoardContext