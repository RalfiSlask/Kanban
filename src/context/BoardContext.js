import { createContext, useState, useEffect } from "react";
import data from "../data/data.json"

const BoardContext = createContext({})

export const BoardProvider = ( {children} ) => {

    const [boardList, setboardList] = useState([]);
    const [selectedBoard, setselectedBoard] = useState("Platform Launch");
    const [boardNumber, setBoardNumber] = useState(0);
    const [columns, setColumns] = useState([]);
    const [currentColumnIndex, setCurrentColumnIndex] = useState(null);
    const [boardName, setBoardName] = useState("");
    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");
    const [task, setTask] = useState("");
    const [statusInput, setStatusInput] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [columnInputs, setColumnInputs] = useState([]);
    const [subtaskInputs, setSubtaskInputs] = useState([]);
   
    const updateTaskStatus = () => {
      const updatedBoardList = boardList.map(board => {
          if (board.name !== selectedBoard) return board;
  
          const updatedColumns = board.columns.map((column, index) => {
              if (index !== currentColumnIndex) return column;
  
              const updatedTasks = column.tasks.map(t => {
                  if (t.title !== task.title) return t;
                  return { ...t, status: statusInput };
              });
  
              return { ...column, tasks: updatedTasks };
          });
  
          // Handle moving the task if its status changed
          const sourceColumn = updatedColumns[currentColumnIndex];
          const targetColumn = updatedColumns.find(col => col.name === statusInput);
          
          if (sourceColumn && targetColumn && sourceColumn !== targetColumn) {
              const taskToMove = sourceColumn.tasks.find(t => t.title === task.title);
              if (taskToMove) {
                  sourceColumn.tasks = sourceColumn.tasks.filter(t => t.title !== task.title);
                  targetColumn.tasks.push(taskToMove);
              }
          }
  
          return { ...board, columns: updatedColumns };
      });
  
      setboardList(updatedBoardList);
      localStorage.setItem("boards", JSON.stringify(updatedBoardList));
    };
  
    const changeTask = () => {
      const updatedBoardList = boardList.map(board => {
          if (board.name !== selectedBoard) return board;

          const updatedColumns = board.columns.map((column, index) => {
              if (index !== currentColumnIndex) return column;

              const updatedTasks = column.tasks.map(t => {
                  if (t.title !== task.title) return t;
                  
                  return {
                      ...t,
                      title: taskName,
                      description: description,
                      subtasks: subtaskInputs,
                      status: statusInput
                  };
              });
              
              return { ...column, tasks: updatedTasks };
          });

          return { ...board, columns: updatedColumns };
    });

      // Move task to a different column if status has changed
      const sourceColumn = updatedBoardList.find(board => board.name === selectedBoard).columns[currentColumnIndex];
      const targetColumn = updatedBoardList.find(board => board.name === selectedBoard).columns.find(column => column.name === statusInput);
      
      if (sourceColumn && targetColumn && sourceColumn !== targetColumn) {
          const taskToMove = sourceColumn.tasks.find(t => t.title === task.title);
          if (taskToMove) {
              sourceColumn.tasks = sourceColumn.tasks.filter(t => t.title !== task.title);
              targetColumn.tasks.push(taskToMove);
          }
      }

      setboardList(updatedBoardList);
      setIsValid(false);
      localStorage.setItem("boards", JSON.stringify(updatedBoardList));
  } ;



    const updateSubtasks = (id) => {
      const updatedSubtasks = [...subtaskInputs]
      updatedSubtasks[id].isCompleted = !updatedSubtasks[id].isCompleted
      setSubtaskInputs(updatedSubtasks)
      const updatedList = [...boardList]
      localStorage.setItem("boards", JSON.stringify(updatedList))
    };

    const addNewTask = () => {
      const updatedTask = {
        title: taskName,
        description: description,
        subtasks: subtaskInputs,
        status: statusInput,
      }
      const updatedBoardList = boardList.map(board => {
        if(board.name !== selectedBoard) return board

        const updatedColumns = board.columns.map(column => {
          if(column.name != updatedTask.status) return column

          return {...column, tasks: [...column.tasks, updatedTask]}

        })

        return {...board, columns: updatedColumns}

      });
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
        updatedColumns[index].tasks = updatedColumns[index].tasks.map(task => ({...task, status: event.target.value}))
        setColumnInputs(updatedColumns)
      }
    };

    const deleteTask = () => {
      const updatedBoardList = [...boardList]
      const selectedBoardObject = updatedBoardList.find(board => board.name === selectedBoard)
      if(selectedBoardObject) {
        const currentColumn = selectedBoardObject.columns[currentColumnIndex]
        currentColumn.tasks = currentColumn.tasks.filter(currTask => currTask.title !== task.title)
        setboardList(updatedBoardList)
        localStorage.setItem("boards", JSON.stringify(updatedBoardList))
      }
    }; 

    const handleChangeDescription = (event) => {
      setDescription(event.target.value)
    };

    const clickOnNewColumn = () => {
      if(columnInputs.length < 14) {
        setColumnInputs(prev => [...prev, {name: "", tasks: []}])
      } 
    };

    const addNewSubtask = () => {
      if(subtaskInputs.length < 14) {
        setSubtaskInputs(prev => [...prev, {title: "", isCompleted: false}])
      }
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
     }, [boardList]);

    const contextValue = {
        // states
        boardList: boardList,
        selectedBoard: selectedBoard,
        boardNumber: boardNumber,
        columns: columns,
        boardName: boardName,
        task: task,
        statusInput: statusInput,
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
        setCurrentColumnIndex: setCurrentColumnIndex,
        // functions
        handleClickOnBoard: handleClickOnBoard,
        clickOnNewColumn: clickOnNewColumn,
        addNewTask: addNewTask,
        deleteBoardOnClick: deleteBoardOnClick,
        AddNewBoard: AddNewBoard,
        deleteInputOnClick: deleteInputOnClick,
        addNewSubtask: addNewSubtask,
        handleChangeDescription: handleChangeDescription,
        handleChangeTitle: handleChangeTitle,
        handleChangeListInputs: handleChangeListInputs,
        checkValidity: checkValidity,
        updateSubtasks: updateSubtasks,
        updateTaskStatus: updateTaskStatus,
        checkBoardValidity: checkBoardValidity,
        changeBoard: changeBoard,
        changeTask: changeTask,
        deleteTask: deleteTask,
    }

    return (
        <BoardContext.Provider value={contextValue}>
            {children}
        </BoardContext.Provider>
    )
}

export default BoardContext