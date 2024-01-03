import logoMobile from '../../assets/logo-mobile.svg';
import { useContext } from 'react';
import ModalContext from '../../context/ModalContext';
import DarkModeContext from '../../context/DarkModeContext';

const MobileLogo = ({ margins }) => {
  const { isMobile } = useContext(ModalContext);
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`flex items-center ${margins} xl:w-[276px] md:w-[248px] md:h-[80px] xl:h-[96px] md:border-r md:border-solid ${
        isDarkMode ? 'md:border-linesDark' : 'md:border-linesLight'
      }`}
    >
      <img src={logoMobile} alt="logo mobile" className="h-[24px] w-[24px] mr-4" />
      {isMobile ? null : <p className={`${isDarkMode ? 'text-white' : 'text-black'} text-2xl font-bold`}>kanban</p>}
    </div>
  );
};

export default MobileLogo;
