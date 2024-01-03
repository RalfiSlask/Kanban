import BoardOverview from '../board/BoardOverview';
import DarkModePanel from '../../DarkModePanel';
import DarkModeContext from '../../context/DarkModeContext';
import { useContext } from 'react';

const BoardModal = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`${
        isDarkMode ? 'bg-darkBG shadow-darkShadow' : 'bg-white'
      } z-50 flex flex-col items-center absolute w-[264px] top-20 pb-4 pt-4 rounded-lg`}
    >
      <BoardOverview />
      <DarkModePanel />
    </div>
  );
};

export default BoardModal;
