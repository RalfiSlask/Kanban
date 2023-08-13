import ModalContext from "../../../context/ModalContext";
import DarkModeContext from "../../../context/DarkModeContext";
import { useContext } from "react";

const ChangeBoardModal = () => {
    const { isDarkMode } = useContext(DarkModeContext)
    const { handleClickOnEditBoardText, handleClickOnDeleteBoardText } = useContext(ModalContext);

  return (
    <div className={`${isDarkMode ? "bg-darkGrey shadow-darkShadow" : "bg-white shadow-lightShadowLarge"} flex flex-col text-[13px] top-[50px] z-50 font-medium justify-between border md:top-[60px] xl:top-[-6px] absolute h-[94px] w-32 md:w-[192px] rounded-[8px] p-4`}>
        <p onClick={handleClickOnEditBoardText} className="cursor-pointer text-mediumGray">Edit Board</p>
        <p onClick={handleClickOnDeleteBoardText} className="text-[#EA5555] cursor-pointer">Delete Board</p>
    </div>
  )
}

export default ChangeBoardModal