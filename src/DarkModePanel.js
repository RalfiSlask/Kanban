import { useContext } from "react"
import DarkModeContext from "./context/DarkModeContext"
import { ReactComponent as LogoDark } from "./assets/icon-dark-theme.svg";
import { ReactComponent as LogoLight } from "./assets/icon-light-theme.svg";
import { styled } from "styled-components"

const DarkModePanel = ( {margins} ) => {
    const { isDarkMode, handleClick, value } = useContext(DarkModeContext)

    const StyledInput = styled.input`
          -webkit-appearance: none;
          width: 40px;
          height: 20px;
          border-radius: 12px;
          background: #635FC7;
          outline: none;
          padding: 2px 4px;
    `
  return (
    <div className={`${isDarkMode ? "bg-veryDarkGray" : "bg-lightGray" } cursor-pointer flex items-center justify-center w-[235px] xl:w-[260px] h-12 rounded-lg gap-4 ${margins}`}> 
        <LogoLight className="fill-gray-600"/>
        <StyledInput type="range" min="1" max="2" defaultValue={value} onClick={(e) => {handleClick(e)}}/>
        <LogoDark className="fill-gray-600"/>
    </div>
  )
}

export default DarkModePanel