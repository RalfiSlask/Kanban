import { useState } from "react";
import logoChevronUp from "../../../assets/icon-chevron-up.svg";
import logoChevronDown from "../../../assets/icon-chevron-down.svg";
import CurrenStatusSelector from "./CurrenStatusSelector";

const CurrentStatus = ( {input} ) => {
    const [status, setStatus] = useState(input)
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(prevState => !prevState)
    };

  return (
    <div className="flex flex-col gap-[8px] relative" onClick={handleClick}>
        <div className="text-xs font-bold text-mediumGray">Current Status</div>
        <div className={`${isClicked ? "border-[#635FC7]" : "border-[rgba(130, 143, 163, 0.25)]`"} cursor-pointer flex justify-between items-center px-4 rounded border border-solid w-[100%] h-10 border-[rgba(130, 143, 163, 0.25)]`}>
            <p>{status}</p>
            <img src={isClicked? logoChevronUp : logoChevronDown} alt="chevron" />
        </div>
        {isClicked && <CurrenStatusSelector setStatus={setStatus}/>}
    </div>
  )
}

export default CurrentStatus