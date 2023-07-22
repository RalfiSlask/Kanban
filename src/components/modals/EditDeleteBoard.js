import Context from "../../context/Context";
import DarkModeContext from "../../context/DarkModeContext";
import { useContext } from "react";

const EditDeleteBoard = () => {
    const { isDarkMode } = useContext(DarkModeContext)
    const { isMobile, openModalOnClick, setDeleteBoardModal, setEditBoardModal } = useContext(Context);

  return (
    <div className={`${isDarkMode ? "bg-darkGrey text-white border-linesDark" : "bg-white text-black border-linesLight"} flex justify-between border right-[20px] md:top-[-4px] xl:top-[-6px] absolute z-50 h-14 w-32 md:w-48 rounded-[8px] p-4`}>
        {!isMobile && <p className="font-bold text-purpleColor">Board:</p>}
        <p onClick={() => {openModalOnClick(setEditBoardModal)}} className="cursor-pointer">Edit</p>
        <p onClick={() => {openModalOnClick(setDeleteBoardModal)}} className="cursor-pointer">Delete</p>
    </div>
  )
}

export default EditDeleteBoard