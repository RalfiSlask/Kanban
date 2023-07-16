import DarkModePanel from "./DarkModePanel"
import { useState } from "react";
import { useContext } from "react";
import Context from "./context/Context";
import Platform from "./Platform";

const BoardOverview = () => {
    const [boardNumber, setBoardNumber] = useState(0)
    const { platformList } = useContext(Context)

  return (
    <>
        <div className="flex flex-col items-center">
            <p className="text-xs font-bold tracking-wider">All boards ({boardNumber})</p>
            {platformList.map(platform => (
                <Platform key={platform.id} title={platform.title}/>
            ))}
            <DarkModePanel />
        </div>
        
    </>

  )
}

export default BoardOverview