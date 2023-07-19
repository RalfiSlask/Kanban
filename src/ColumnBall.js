import { useEffect, useState } from "react"

const ColumnBall = ( {id} ) => {
    let [color, setColor] = useState("");

    useEffect(() => {
        const generateHexColor = (id) => {
            const hex = "0123456789ABCDEF"
            let output = "";
            for(let i = 0; i < id; i++) {
                output += hex.charAt(Math.floor(Math.random() * hex.length))
            }
            return output;
        }

        if(id === 0) {
            setColor("bg-[#49C4E5]")
        } else if(id === 1) {
            setColor("bg-[#8471F2]")
        } else if(id === 2) {
            setColor("bg-[#67E2AE]")
        } else if(id > 2) {
            setColor(generateHexColor)
        }
    }, )

  return (
    <div className={`${color} rounded-full w-[15px] h-[15px]`}></div>
  )
}

export default ColumnBall