import FormComponent from "./FormComponent";

const FormList = ( {title, inputs, onClick } ) => {

  return (
        <form className="flex flex-col mt-6 mb-4">
          <label className="text-[12px] font-bold text-mediumGray">{title}</label>
            <div className="flex flex-col gap-3 mt-[8px]">
            {inputs.map((input, index) => (
                <FormComponent key={index} id={index} name={input.name} onClick={onClick}/>
            ))}
            </div>
        </form>
  )
}

export default FormList