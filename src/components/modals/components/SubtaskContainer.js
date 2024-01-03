import DarkModeContext from '../../../context/DarkModeContext';
import { useContext, useState } from 'react';
import logoCheck from '../../../assets/icon-check.svg';
import BoardContext from '../../../context/BoardContext';

const SubtaskContainer = ({ id, subtask }) => {
  const { isDarkMode } = useContext(DarkModeContext);
  const { title, isCompleted } = subtask;
  const { updateSubtasks } = useContext(BoardContext);
  const [completed, setCompleted] = useState(isCompleted);

  const handleClick = () => {
    setCompleted(prevState => !prevState);
    updateSubtasks(id);
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        isDarkMode ? 'bg-[#20212C] text-white' : 'bg-[#F4F7FD] text-black'
      } hover:bg-taskHover cursor-pointer font-bold text-[12px] flex items-center pl-3 rounded w-[100%] h-10`}
    >
      <div
        className={`${
          completed ? 'bg-[#635FC7]' : 'bg-white'
        } flex justify-center items-center mr-[20px] rounded-[2px] w-4 h-4 border border-solid border-[rgba(130, 143, 163, 0.25)]`}
      >
        <img src={logoCheck} alt="logo check" />
      </div>
      <p className={`${completed ? 'line-through opacity-50' : ''}`}>{title}</p>
    </div>
  );
};

export default SubtaskContainer;
