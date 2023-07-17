import logoAddTask from "./assets/icon-add-task-mobile.svg";

const ButtonAddNewTask = () => {

  const handleClick = () => {
    
  }

  return (
    <button className="w-[48px] h-[32px] bg-purpleColor hover:bg-purpleHover flex items-center justify-center rounded-[45%] ml-16 cursor-pointer ">
       <img src={logoAddTask} alt="addtask logo" />
    </button>
  )
}

export default ButtonAddNewTask