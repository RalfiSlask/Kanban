import { DarkModeProvider } from "./context/DarkModeContext";
import { ContextProvider } from "./context/Context";
import { BoardProvider } from "./context/BoardContext";
import { FormProvider } from "./context/FormContext";
import MainSection from "./MainSection";
import Header from "./Header";

function App() {
  return (
    <BoardProvider>
      <ContextProvider>
        <DarkModeProvider>
          <FormProvider>
            <Header />
            <MainSection />
          </FormProvider>
        </DarkModeProvider>
      </ContextProvider>
    </BoardProvider>
  );
}

export default App;
