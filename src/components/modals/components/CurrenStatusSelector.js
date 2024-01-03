import BoardContext from '../../../context/BoardContext';
import DarkModeContext from '../../../context/DarkModeContext';
import { useContext } from 'react';

const CurrenStatusSelector = ({ setStatus }) => {
  const { isDarkMode } = useContext(DarkModeContext);
  const { columns } = useContext(BoardContext);

  const handleClick = status => {
    setStatus(status);
  };

  return (
    <div
      className={`${
        isDarkMode ? 'shadow-darkShadow bg-[#20212C]' : 'shadow-lightShadowLarge bg-white'
      } text-[13px] leading-6 text-mediumGray font-medium flex flex-col justify-between top-16 rounded-[8px] w-[416px] h-[117px] absolute p-4`}
    >
      {columns.map((column, index) => (
        <p
          onClick={() => {
            handleClick(column.name);
          }}
          key={index}
          className={`${isDarkMode ? 'hover:text-white' : 'hover:text-darkGrey'} cursor-pointer`}
        >
          {column.name}
        </p>
      ))}
    </div>
  );
};

export default CurrenStatusSelector;
