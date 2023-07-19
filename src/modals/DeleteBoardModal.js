import BoardContext from "../context/BoardContext";
import DarkModeContext from "../context/DarkModeContext";
import ButtonLightPurple from "../ui/ButtonLightPurple";
import ButtonRed from "../ui/ButtonRed";
import { useContext } from "react";

const DeleteBoardModal = () => {
    const { isDarkMode } = useContext(DarkModeContext)
    const { selectedBoard } = useContext(BoardContext)

  return (
    <div className={`${isDarkMode ? "bg-darkGrey text-white" : "bg-white text-black"} absolute z-20 w-[343px] h-[229px] md:w-[480px] p-[24px] md:p-[32px] rounded-[6px]`}>
        <h2>Delete this board?</h2>
        <p className="font-medium text-mediumGray text-[13px]">Are you sure you want to delete the ‘{selectedBoard}’ board? This action will remove all columns and tasks and cannot be reversed.</p>
        <div className="flex">
            <ButtonRed />
            <ButtonLightPurple text={"Cancel"}/>
        </div>
  
    </div>
  )
}

export default DeleteBoardModal