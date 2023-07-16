import DarkModeContext from "./context/DarkModeContext"
import Context from "./context/Context";
import { useContext, useState } from "react"
import ButtonAddNewTask from "./ButtonAddNewTask";
import logoMobile from "./assets/logo-mobile.svg";
import logoEllipsis from "./assets/icon-vertical-ellipsis.svg";

import Board from "./Board";

const Header = () => {
    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const { isDarkMode } = useContext(DarkModeContext); 
    const { isMobile } = useContext(Context);

    const handlePlatformClick = () => {
        setOpenModal(true)
    }

    const handleButtonClick = () => {
        setIsButtonClicked(prevState => !prevState)
    }

  return (
    <header className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"} h-16 w-[100%] flex justify-center`}>
        <div className="w-[350px] flex items-center">
            <img src={logoMobile} alt="logo mobile" className="h-[24px] w-[24px] mr-4"/>
            {isMobile ? null : <p>kanban</p>}
            <Board 
                onClick={handlePlatformClick} 
                clicked={openModal}
            />
            {isMobile ? 
            <ButtonAddNewTask 
                onClick={handleButtonClick}
            /> 
            : <button className="bg-purpleColor text-white w-44 h-12 rounded-3xl flex items-center justify-center font-bold text-[15px]">+ Add New Task</button>}
            <img src={logoEllipsis} alt="ellipsis" className="ml-4"/> 
        </div>
    </header>
  )
}

export default Header 
