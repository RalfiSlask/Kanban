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
      
   }, [selectedBoard]);
 
   useEffect(() => {
       setBoardNumber(Array.from(boardList).length)
   });

    const AddNewBoard = () => {
      const updatedList = [...boardList, {name: boardName, columns: newColumns}]
      setboardList(updatedList)
      localStorage.setItem("boards", JSON.stringify(updatedList))
    };

    const handleChangeBoardName = (event) => {
      setBoardName(event.target.value)
      console.log(event.target.value)
    };

    const clickOnNewColumn = () => {
      setNewColumns(prev => [...prev, {name: "", tasks: []}])
    };

    const deleteColumnOnClick = (id) => {
      const updatedColumns = [...newColumns]
      const filteredColumns = updatedColumns.filter((column, index) => !(index === id))
      setNewColumns(filteredColumns)
    };

    const handleClickOnBoard = (id) => {
        Array.from(boardList).forEach((platform, index) => {
          if(index === id) {
            setselectedBoard(platform.name)
          }
        })
      };

    const contextValue = {
        boardList: boardList,
        selectedBoard: selectedBoard,
        newColumns: newColumns,
        boardNumber: boardNumber,
        columns: columns,
        boardName: boardName,
        handleClickOnBoard: handleClickOnBoard,
        clickOnNewColumn: clickOnNewColumn,
        deleteColumnOnClick: deleteColumnOnClick,
        handleChangeBoardName: handleChangeBoardName,
        AddNewBoard: AddNewBoard,
    }

    return (
        <BoardContext.Provider value={contextValue}>
            {children}
        </BoardContext.Provider>
    )
}

export default BoardContext