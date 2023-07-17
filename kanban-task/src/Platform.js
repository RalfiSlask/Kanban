import { ReactComponent as LogoPlatform} from "./assets/icon-board.svg";
import { useContext } from "react";
import Context from "./context/Context";

const Platform = ( {id, title } ) => {
  const { selectedPlatform, handleClickOnPlatform } = useContext(Context);

  return (
    <div className={`${selectedPlatform === title ? "bg-purpleColor text-white" : "text-mediumGray"} flex items-center w-[240px] h-[48px] rounded-tl-0 rounded-r-full pl-6`} onClick={() => {handleClickOnPlatform(id)}}>
        <LogoPlatform alt="platform logo" className={`${selectedPlatform === title ? "fill-white" : "fill-mediumGray"} mr-3`}/>
        {title}
    </div>    
  )
}

export default Platform