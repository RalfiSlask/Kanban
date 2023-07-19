import { DarkModeProvider } from "./context/DarkModeContext";
import { ContextProvider } from "./context/Context";
import { BoardProvider } from "./context/BoardContext"
import MainSection from "./MainSection";
import Header from "./Header";

function App() {
  return (
    <BoardProvider>
      <ContextProvider>
        <DarkModeProvider>
          <Header />
          <MainSection />
        </DarkModeProvider>
      </ContextProvider>
    </BoardProvider>
  );
}

export default App;
