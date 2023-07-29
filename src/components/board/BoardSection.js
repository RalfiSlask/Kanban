import EmptyBoard from "./EmptyBoard";
import { useContext } from "react";
import BoardContext from "../../context/BoardContext";
import Board from "./Board";
import ModalContext from "../../context/ModalContext";

const BoardSection = () => {
    const { columns } = useContext(BoardContext)
    const { sidebarOpen, isMobile } = useContext(ModalContext)

  return (
    <div className={`${sidebarOpen ? "md:pl-72 xl:pl-80" : "pl-16"} ${isMobile ? "static mt-6" : "absolute"} min-h-[600px] flex justify-center md:top-28 xl:top-32 w-[100%] `}>
        {columns < 1 ? <EmptyBoard /> : <Board />}
    </div>
  )
}

export default BoardSection