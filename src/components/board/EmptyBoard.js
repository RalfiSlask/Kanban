import ButtonAddNewColumn from "../../buttons/ButtonAddNewColumn";

const EmptyBoard = () => {
  return (
    <div className="flex flex-col items-center top-1/2 left-1/2 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center absolute text-lg font-bold leading-normal md:w-[343px] xl:w-[480px] h-[118px] justify-between ">
        <p>This board is empty. Create a new column to get started.</p>
        <ButtonAddNewColumn />
    </div>
  )
}

export default EmptyBoard