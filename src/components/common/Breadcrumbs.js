import React from 'react'

const Breadcrumbs = () => {
  return (
    <ul class="breadcrumbs flex items-center flex-wrap justify-start gap-2.5 font-medium w-100">
        <li><a href="/">Dashboard</a></li>
        <li>
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="text-xs">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </li>
        <li><a href="#">Ecommerce</a></li>
        <li>
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="text-xs">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </li>
        <li><a href="/" class="disabled text-tiny">Add product</a></li>
    </ul>
  )
}

export default Breadcrumbs
