
const ButtonRed = ( {onClick} ) => {
  return (
    <div onClick={onClick} className="hover:bg-[#FF9898] flex items-center justify-center cursor-pointer bg-red-500 w-[100%] md:w-[200px] h-10 rounded-[20px] align font-bold text-[13px] text-white leading-[23px]">Delete</div>
  )
}

export default ButtonRed