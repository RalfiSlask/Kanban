import logoChevronUp from "./assets/icon-chevron-up.svg";
import logoChevronDown from "./assets/icon-chevron-down.svg";
import { useContext } from "react";
import Context from "./context/Context";
import BoardContext from "./context/BoardContext";

const SelectBoard = ( {onClick, clicked} ) => {
  const { isMobile } = useContext(Context)
  const { selectedBoard } = useContext(BoardContext)

  return (
    <div className="flex items-center w-[159px] h-[23px] justify-between" onClick={onClick}> 
        <p className="text-lg font-bold">{selectedBoard}</p>
      {isMobile && <img src={clicked ? logoChevronUp : logoChevronDown} alt="chevron" />}
    </div>
  )
}

export default SelectBoard