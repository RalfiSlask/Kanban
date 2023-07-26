import logoChevronUp from "../../assets/icon-chevron-up.svg";
import logoChevronDown from "../../assets/icon-chevron-down.svg";
import { useContext } from "react";
import ModalContext from "../../context/ModalContext";
import BoardContext from "../../context/BoardContext";

const BoardSelector = ( {onClick, clicked} ) => {
  const { isMobile } = useContext(ModalContext)
  const { selectedBoard } = useContext(BoardContext)

  return (
    <div className="flex items-center w-[159px] h-[23px] justify-between" onClick={onClick}> 
        <p className="text-lg font-bold">{selectedBoard}</p>
      {isMobile && <img src={clicked ? logoChevronUp : logoChevronDown} alt="chevron" />}
    </div>
  )
}

export default BoardSelector