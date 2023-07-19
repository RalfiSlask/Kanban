import DarkModeContext from "./context/DarkModeContext"
import Context from "./context/Context";
import { useContext, useState } from "react"
import ButtonAddNewTask from "./buttons/ButtonAddNewTask";
import logoEllipsis from "./assets/icon-vertical-ellipsis.svg";
import BoardModal from "./modals/BoardModal";
import Board from "./SelectBoard";
import MobileLogo from "./MobileLogo";
import EditDeleteBoard from "./modals/EditDeleteBoard";

const Header = () => {
    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const { isDarkMode } = useContext(DarkModeContext); 
    const { openModal, handlePlatformClick, toggleChangeBoardModal, openChangeBoardModal } = useContext(Context);

    const handleButtonClick = () => {
        setIsButtonClicked(prevState => !prevState)
    }

  return (
    <header className={`${isDarkMode ? "bg-darkGrey text-white" : "bg-white text-black"} h-16 xl:h-24 md:h-20 w-[100%] flex justify-center relative md:pl-3 md:pr-3 xl:pl-6 xl:pr-6`}>
        <div className="w-[360px] md:w-[100%] flex items-center justify-between">
            <div className="flex items-center md:gap-10 xl:gap-12 h-[100%]">
                <MobileLogo />
                <Board 
                    onClick={handlePlatformClick} 
                    clicked={openModal}
                />
            </div>
            {openModal && <BoardModal />}
            <div className="flex items-center relative">
                <ButtonAddNewTask onClick={handleButtonClick}/> 
                <img onClick={toggleChangeBoardModal} src={logoEllipsis} alt="ellipsis" className="ml-4 cursor-pointer"/> 
                {openChangeBoardModal && <EditDeleteBoard />}
            </div>
        
        </div>
    </header>
  )
}

export default Header 
