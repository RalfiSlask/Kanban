import { useContext } from "react";
import DarkModeContext from "../../context/DarkModeContext";
import ModalContext from "../../context/ModalContext";

const NewColumnColumn = () => {
    const { isDarkMode } = useContext(DarkModeContext)
    const { setEditBoardModal, openModalOnClick } = useContext(ModalContext)

  return (
    <div className="flex items-center justify-center w-[280px] flex-shrink-0">
       <div onClick={() => {openModalOnClick(setEditBoardModal)}} className={`${isDarkMode ? "text-mediumGray hover:text-[#635FC7]" : "text-[#635FC7]"} cursor-pointer font-bold text-2xl`}>+ New Column</div>
    </div>
  )
}

export default NewColumnColumn