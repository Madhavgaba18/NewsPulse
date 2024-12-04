import React from 'react'

function InputBox({placeholder,heading, onChange}) {
  return (
    <div className='mb-5'>
        <div className="flex font-serif font-medium text-bold my-2">
            {heading}
        </div>
      <input onChange={onChange} className=' w-[280px] border-gray-600 border-[1px] rounded text-gray-900 p-1' type="text" placeholder={placeholder}/>
    </div>
  )
}

export default InputBox
