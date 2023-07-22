import Context from "../../context/Context";
import DarkModeContext from "../../context/DarkModeContext";
import { useContext } from "react";

const ChangeTaskModalk = () => {
  const { isDarkMode } = useContext(DarkModeContext)
  const { handleClickOnDeleteTaskText, handleClickOnEditTaskText } = useContext(Context)

  return (
    <div className={`${isDarkMode ? "bg-darkGrey shadow-darkShadow" : "bg-white shadow-lightShadowLarge"} text-[13px] font-medium flex flex-col justify-between right-[20px] md:right-[-60px] md:top-[80px] z-50 absolute h-[94px] w-32 md:w-[192px] rounded-[8px] p-4`}>
      <p onClick={handleClickOnEditTaskText} className="text-mediumGray cursor-pointer">Edit Task</p>
      <p onClick={handleClickOnDeleteTaskText} className="text-[#EA5555] cursor-pointer">Delete Task</p>
    </div>
  )
}

export default ChangeTaskModalk