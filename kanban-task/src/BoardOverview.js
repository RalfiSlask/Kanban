import { useState, useContext } from "react";
import Context from "./context/Context";
import Platform from "./Platform";
import CreateNewBoard from "./CreateNewBoard";

const BoardOverview = ( {absolute} ) => {
    const [boardNumber, setBoardNumber] = useState(0)
    const { platformList } = useContext(Context)

  return (
    <>
        <div className={`flex flex-col w-[100%] text-[15px] font-bold mb-4 ${absolute}`}>
            <p className="text-xs font-bold tracking-wider text-mediumGray ml-6 mb-5">All BOARDS ({boardNumber})</p>
            {platformList.map(platform => (
                <Platform key={platform.id} id={platform.id} title={platform.title}/>
            ))}
            <CreateNewBoard />
        </div>
        
    </>

  )
}

export default BoardOverview