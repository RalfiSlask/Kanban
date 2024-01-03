import DarkModeContext from '../context/DarkModeContext';
import { useContext } from 'react';

const ButtonLightPurple = ({ text, onClick, width }) => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <button
      onClick={onClick}
      className={`${
        isDarkMode ? 'bg-white' : 'hover:bg-[#635fc740] bg-hoverPurple'
      } mt-[8px] md:w-[${width}] w-[100%] h-[40px] rounded-[20px] align font-bold text-[13px] text-[#635FC7] leading-[23px]`}
    >
      {text}
    </button>
  );
};

export default ButtonLightPurple;
