import React from 'react'
import { Link } from 'react-router-dom'

function PageChange({label,to,buttonText}) {
  return (
    <div className='flex'>
      <div className="text-center">
        {label}
      </div>
      <Link className='cursor-pointer underline' to={to}>
        {buttonText}
      </Link>
    </div>
  )
}

export default PageChange
