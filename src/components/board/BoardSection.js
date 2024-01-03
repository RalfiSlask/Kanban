import EmptyBoard from './EmptyBoard';
import { useContext } from 'react';
import BoardContext from '../../context/BoardContext';
import Board from './Board';
import ModalContext from '../../context/ModalContext';
import DarkModeContext from '../../context/DarkModeContext';

const BoardSection = () => {
  const { columns } = useContext(BoardContext);
  const { sidebarOpen, isMobile } = useContext(ModalContext);
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`
      ${isDarkMode ? 'bg-darkBG' : 'bg-lightBG'} 
      ${sidebarOpen ? 'md:pl-72' : 'pl-16'} 
      ${
        isMobile ? 'static mt-6' : 'absolute overflow-x-auto transition-paddingLeft duration-1000 ease-in-out'
      }  min-h-[600px] lex justify-center md:top-28 xl:top-32 w-[100%]`}
    >
      {columns < 1 ? <EmptyBoard /> : <Board />}
    </div>
  );
};

export default BoardSection;
