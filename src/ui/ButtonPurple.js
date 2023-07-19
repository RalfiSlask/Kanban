import React from 'react'

const ButtonPurple = ( {text, onClick} ) => {
  return (
    <button onClick={onClick} className="bg-[#635FC7] w-[100%] hover:bg-[#A8A4FF] mt-6 h-[40px] rounded-[20px] align font-bold text-[13px] text-white leading-[23px]">{text}</button>
  )
}

export default ButtonPurple