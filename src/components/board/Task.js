import BoardContext from '../../context/BoardContext';
import ModalContext from '../../context/ModalContext';
import DarkModeContext from '../../context/DarkModeContext';
import { useContext } from 'react';

const Task = ({ task, id, columnId }) => {
  const { isDarkMode } = useContext(DarkModeContext);
  const { openModalOnClick, setOpenTaskModal } = useContext(ModalContext);
  const { setTask, setStatusInput, setCurrentColumnIndex } = useContext(BoardContext);
  const { subtasks, title, status } = task;

  const handleClick = () => {
    openModalOnClick(setOpenTaskModal);
    setTask({ ...task, id: id });
    setStatusInput(status);
    setCurrentColumnIndex(columnId);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`${
          isDarkMode ? 'bg-darkGrey text-white shadow-darkShadow' : 'bg-white text-black shadow-lightShadow'
        } cursor-pointer rounded-[8px] w-full min-h-[px] py-[23px] px-[16px] flex flex-col gap-2`}
      >
        <div className="text-[15px] font-bold">{title}</div>
        <div className="font-bold text-mediumGray text-[12px]">
          {subtasks.filter(task => task.isCompleted).length} of {subtasks.length} subtasks
        </div>
      </div>
    </>
  );
};

export default Task;
