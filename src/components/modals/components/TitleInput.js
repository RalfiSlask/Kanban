import { useContext, useEffect } from "react";
import FormContext from "../../../context/FormContext";
import BoardContext from "../../../context/BoardContext";
import ModalLabel from "./ModalLabel";
import Input from "./Input";

const TitleInput = ( {title, placeholder, value} ) => {
  const { setBoardError } = useContext(FormContext)
  const { boardName } = useContext(BoardContext)

  useEffect(() => {
    if(boardName !== "") {
      setBoardError(false)
    } else {
      setBoardError(true)
    }
  }, [boardName])

  return (
    <form className="flex flex-col gap-2 w-[100%] mt-6">
        <ModalLabel text={title}/>
        <Input placeholder={placeholder} value={value} type={"title"}/>
    </form>
  )
}

export default TitleInput