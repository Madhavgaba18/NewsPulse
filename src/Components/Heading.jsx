import React from 'react'

function Heading({heading,subHeading}) {
  return (
    <div className='mb-5'>
    <div className='flex justify-center mb-2 font-serif text-3xl font-bold text-gray-900 dark:text-white'>
      {heading}
    </div>
    <div className='flex justify-center text-center mb-2 text-sm font-serif font-medium text-gray-500 dark:text-white'>
        {subHeading}
    </div>
    </div>
  )
}

export default Heading
