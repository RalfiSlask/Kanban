import { DarkModeProvider } from "./context/DarkModeContext";
import { ModalContextProvider } from "./context/ModalContext";
import { BoardProvider } from "./context/BoardContext";
import { FormProvider } from "./context/FormContext";
import MainSection from "./MainSection";
import Header from "./components/header/Header";

function App() {
  return (
    <BoardProvider>
      <ModalContextProvider>
        <DarkModeProvider>
          <FormProvider>
            <Header />
            <MainSection />
          </FormProvider>
        </DarkModeProvider>
      </ModalContextProvider>
    </BoardProvider>
  );
}

export default App;
