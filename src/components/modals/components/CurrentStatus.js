import { useState, useContext, useEffect } from "react";
import logoChevronUp from "../../../assets/icon-chevron-up.svg";
import logoChevronDown from "../../../assets/icon-chevron-down.svg";
import CurrenStatusSelector from "./CurrenStatusSelector";
import ModalLabel from "./ModalLabel";
import BoardContext from "../../../context/BoardContext";

const CurrentStatus = ( {input, text, margin} ) => {
    const { status, setStatus } = useContext(BoardContext)
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {
      setStatus(input)
    }, [])

    const handleClick = () => {
        setIsClicked(prevState => !prevState)
    };

  return (
    <div className={`${margin} flex flex-col gap-[8px] relative`} onClick={handleClick}>
        <ModalLabel text={text}/>
        <div className={`${isClicked ? "border-[#635FC7]" : "border-inputBorder"} cursor-pointer flex justify-between items-center px-4 rounded border border-solid w-[100%] h-10 border-[rgba(130, 143, 163, 0.25)]`}>
            <p>{status}</p>
            <img src={isClicked? logoChevronUp : logoChevronDown} alt="chevron" />
        </div>
        {isClicked && <CurrenStatusSelector setStatus={setStatus}/>}
    </div>
  )
}

export default CurrentStatus