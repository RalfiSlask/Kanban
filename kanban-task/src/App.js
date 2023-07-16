import { DarkModeProvider } from "./context/DarkModeContext";
import { ContextProvider } from "./context/Context";
import MainSection from "./MainSection";
import Header from "./Header";

function App() {
  return (
    <ContextProvider>
      <DarkModeProvider>
        <Header />
        <MainSection />
      </DarkModeProvider>
    </ContextProvider>
  
  );
}

export default App;
