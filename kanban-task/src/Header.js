import DarkModeContext from "./context/DarkModeContext"
import Context from "./context/Context";
import { useContext, useState } from "react"
import ButtonAddNewTask from "./ButtonAddNewTask";
import logoEllipsis from "./assets/icon-vertical-ellipsis.svg";
import BoardModal from "./BoardModal";
import Board from "./Board";
import MobileLogo from "./MobileLogo";

const Header = () => {
    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const { isDarkMode } = useContext(DarkModeContext); 
    const { isMobile, openModal, handlePlatformClick } = useContext(Context);

    const handleButtonClick = () => {
        setIsButtonClicked(prevState => !prevState)
    }

  return (
    <header className={`${isDarkMode ? "bg-darkGrey text-white" : "bg-white text-black"} h-16 xl:h-24 md:h-20 w-[100%] flex justify-center relative pl-6 pr-6`}>
        <div className="w-[360px] md:w-[100%] flex items-center justify-between">
            <div className="flex items-center gap-32 xl:gap-40">
            <MobileLogo />
            <Board 
                onClick={handlePlatformClick} 
                clicked={openModal}
            />
            </div>
            {openModal && <BoardModal />}
            <div className="flex items-center">
            {isMobile ? 
            <ButtonAddNewTask 
                onClick={handleButtonClick}
            /> 
            : <button className="bg-purpleColor text-white w-44 h-12 rounded-3xl flex items-center justify-center font-bold text-[15px]">+ Add New Task</button>}
            <img src={logoEllipsis} alt="ellipsis" className="ml-4"/> 
            </div>
        </div>
    </header>
  )
}

export default Header 
