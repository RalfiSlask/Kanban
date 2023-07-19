import { useContext } from "react";
import BoardContext from "./context/BoardContext";
import Platform from "./Platform";
import ButtonCreateNewBoard from "./buttons/ButtonCreateNewBoard";

const BoardOverview = ( {absolute} ) => {
    const { boardList, boardNumber } = useContext(BoardContext)

  return (
    <>
        <div className={`flex flex-col w-[100%] text-[15px] font-bold mb-4 ${absolute}`}>
            <p className="mb-5 ml-6 text-xs font-bold tracking-wider text-mediumGray">All BOARDS ({boardNumber})</p>
            {boardList.map((board, index) => (
                <Platform key={index} id={index} title={board.name}/>
            ))}
            <ButtonCreateNewBoard />
        </div>
        
    </>

  )
}

export default BoardOverview