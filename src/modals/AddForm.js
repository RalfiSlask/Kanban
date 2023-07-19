import { useState } from 'react'

const AddForm = ( {title, placeholder, onChange} ) => {

  return (
    <form className="flex flex-col gap-2 w-[100%] mt-6">
        <label className="text-[12px] font-bold text-mediumGray">{title}</label>
        <input onChange={(e) => {onChange(e)}} spellCheck={false} placeholder={placeholder} className="outline-[#635FC7] cursor-pointer pl-4 h-10 rounded-[4px] hover:border-[#635FC7] border border-solid border-[rgba(130, 143, 163, 0.25)] w-[100%]"/>
    </form>
  )
}

export default AddForm