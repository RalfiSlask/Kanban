import DarkModeContext from "./context/DarkModeContext"
import { useContext } from "react"
import EmptyBoard from "./EmptyBoard";
import BoardOverview from "./BoardOverview";

const MainSection = () => {
    const { isDarkMode } = useContext(DarkModeContext);

  return (
    <main className={`${isDarkMode ? "bg-darkBG" : "bg-lightBG"} text-gray-500 flex justify-center h-[100%]`}>
        <EmptyBoard />
        <BoardOverview />
    </main>
  )
}

export default MainSection