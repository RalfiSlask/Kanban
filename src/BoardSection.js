import EmptyBoard from "./EmptyBoard";
import { useContext } from "react";
import BoardContext from "./context/BoardContext";
import Board from "./Board";
import Context from "./context/Context";

const BoardSection = () => {
    const { columns } = useContext(BoardContext)
    const { sidebarOpen, isMobile } = useContext(Context)

  return (
    <div className={`${sidebarOpen ? "md:left-72 xl:left-80" : ""} ${isMobile ? "static mt-6" : "absolute"} flex justify-center md:top-28 xl:top-32 w-[100%] `}>
        {columns < 1 ? <EmptyBoard /> : <Board />}
    </div>
  )
}

export default BoardSection