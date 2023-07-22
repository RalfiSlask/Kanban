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
    const [task, setTask] = useState("")

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

    const handleChangeBoardName = (event) => {
      setBoardName(event.target.value)
    };

    const clickOnNewColumn = () => {
      setNewColumns(prev => [...prev, {name: "", tasks: []}])
    };

    const addColumn = () => {
      setColumns(prev => [...prev, {name: "", tasks: []}])
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
        boardList: boardList,
        selectedBoard: selectedBoard,
        newColumns: newColumns,
        boardNumber: boardNumber,
        columns: columns,
        boardName: boardName,
        task: task,
        setTask: setTask,
        handleClickOnBoard: handleClickOnBoard,
        clickOnNewColumn: clickOnNewColumn,
        addColumn: addColumn,
        handleChangeBoardName: handleChangeBoardName,
        deleteBoardOnClick: deleteBoardOnClick,
        AddNewBoard: AddNewBoard,
        deleteInputOnClick: deleteInputOnClick,
        setNewColumns: setNewColumns,
        setColumns: setColumns,
    }

    return (
        <BoardContext.Provider value={contextValue}>
            {children}
        </BoardContext.Provider>
    )
}

export default BoardContext