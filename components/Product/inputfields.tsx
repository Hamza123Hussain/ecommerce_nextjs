import React, { ChangeEvent } from 'react'

interface InputFieldsProps {
  Name: string
  value: any
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputFields: React.FC<InputFieldsProps> = ({ Name, value, onChange }) => {
  return (
    <div className=" flex flex-col gap-2 justify-center items-center order-2 rounded-lg border-2 border-gray-600 p-4">
      <label className=" text-2xl font-bold w-32 ">{Name}</label>
      <input
        className=" border-none p-5 rounded-lg"
        type={Name == 'price' || Name == 'stock' ? 'number' : 'text'}
        name={Name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default InputFields
