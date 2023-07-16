import ButtonAddNewColumn from "./ButtonAddNewColumn";

const EmptyBoard = () => {
  return (
    <div className="flex flex-col items-center text-center text-lg font-bold leading-normal w-[343px] h-[118px] justify-between mt-52">
        <p>This board is empty. Create a new <br></br>column to get started.</p>
        <ButtonAddNewColumn />
    </div>
  )
}

export default EmptyBoard