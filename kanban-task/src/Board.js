import logoChevronUp from "./assets/icon-chevron-up.svg";
import logoChevronDown from "./assets/icon-chevron-down.svg";

const Board = ( {onClick, clicked} ) => {
  return (
    <div className="flex items-center w-[159px] h-[23px] justify-between" onClick={onClick}> 
        <p className="font-bold text-lg">Platform Launch</p>
        <img src={clicked ? logoChevronUp : logoChevronDown} alt="chevron" />
    </div>
  )
}

export default Board