import { ReactComponent as LogoPlatform} from "./assets/icon-board.svg";

const CreateNewBoard = () => {
  return (
    <div className={`flex items-center w-[240px] h-[48px] rounded-tl-0 rounded-br-full text-purpleColor pl-6`}>
        <LogoPlatform alt="platform logo" className="mr-3 fill-purpleColor"/>
        <p>+ Create New Board</p>
    </div>  
  )
}

export default CreateNewBoard