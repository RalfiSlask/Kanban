import { ReactComponent as LogoPlatform} from "../assets/icon-board.svg";
import DarkModeContext from "../context/DarkModeContext";
import Context from "../context/Context";
import { useContext } from "react";

const ButtonCreateNewBoard = () => {
  const { isDarkMode } = useContext(DarkModeContext)
  const { openModalOnClick, setOpenModal, setOpenNewBoardModal } = useContext(Context)

  const handleClick = () => {
    openModalOnClick(setOpenNewBoardModal)
    setOpenModal(false)
  };

  return (
    <div onClick={handleClick} className={`${isDarkMode ? "hover:bg-white" : "hover:bg-hoverPurple"} flex items-center w-[240px] h-[48px] rounded-tl-0 rounded-r-full text-purpleColor pl-6 cursor-pointer`}>
        <LogoPlatform alt="platform logo" className="mr-3 fill-purpleColor"/>
        <p>+ Create New Board</p>
    </div>  
  )
}

export default ButtonCreateNewBoard