import React from 'react'

function CardWrapper({children}) {
  return (
    <div className="m-20 w-full max-w-[350px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        {children}
    </div>
  )
}

export default CardWrapper
