import DarkModeContext from "../../context/DarkModeContext"
import Context from "../../context/Context";
import { useContext } from "react"
import ButtonAddNewTask from "./ButtonAddNewTask";
import logoEllipsis from "../../assets/icon-vertical-ellipsis.svg";
import BoardModal from "../modals/BoardModal";
import BoardSelector from "./BoardSelector";
import MobileLogo from "./MobileLogo";
import ChangeBoardModal from "../modals/change/ChangeBoardModal";

const Header = () => {
    const { isDarkMode } = useContext(DarkModeContext); 
    const { openModal, handlePlatformClick, toggleChangeBoardModal, openChangeBoardModal } = useContext(Context);

  return (
    <header className={`${isDarkMode ? "bg-darkGrey text-white" : "bg-white text-black"} h-16 xl:h-24 md:h-20 w-[100%] flex justify-center relative md:pl-3 md:pr-3 xl:pl-6 xl:pr-6`}>
        <div className="w-[360px] md:w-[100%] flex items-center justify-between">
            <div className="flex items-center md:gap-10 xl:gap-12 h-[100%]">
                <MobileLogo />
                <BoardSelector 
                    onClick={handlePlatformClick} 
                    clicked={openModal}
                />
            </div>
            {openModal && <BoardModal />}
            <div className="flex items-center relative">
                <ButtonAddNewTask /> 
                <img onClick={toggleChangeBoardModal} src={logoEllipsis} alt="ellipsis" className="ml-4 cursor-pointer"/> 
                {openChangeBoardModal && <ChangeBoardModal />}
            </div>
        
        </div>
    </header>
  )
}

export default Header 
