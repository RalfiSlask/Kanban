import BoardContext from '../../../context/BoardContext';
import DarkModeContext from '../../../context/DarkModeContext';
import ModalContext from '../../../context/ModalContext';
import ButtonLightPurple from '../../../ui/ButtonLightPurple';
import ButtonRed from '../../../ui/ButtonRed';
import { useContext } from 'react';

const DeleteBoardModal = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const { selectedBoard, deleteBoardOnClick } = useContext(BoardContext);
  const { closeModalOnClick, setDeleteBoardModal } = useContext(ModalContext);

  const handleClickOnDelete = () => {
    deleteBoardOnClick();
    closeModalOnClick(setDeleteBoardModal);
  };

  return (
    <div
      className={`${
        isDarkMode ? 'bg-darkGrey text-white' : 'bg-white text-black'
      } top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 absolute z-20 w-[343px] h-[284px] md:h-[229px] md:w-[480px] p-[24px] md:p-[32px] rounded-[6px]`}
    >
      <h2 className="font-bold text-[#EA5555] text-lg">Delete this board?</h2>
      <p className="font-medium text-mediumGray text-[13px]">
        Are you sure you want to delete the ‘{selectedBoard}’ board? This action will remove all columns and tasks and
        cannot be reversed.
      </p>
      <div className="flex flex-col gap-4 md:flex-row">
        <ButtonRed onClick={handleClickOnDelete} />
        <ButtonLightPurple
          text={'Cancel'}
          onClick={() => {
            closeModalOnClick(setDeleteBoardModal);
          }}
          width={'200px'}
        />
      </div>
    </div>
  );
};

export default DeleteBoardModal;
