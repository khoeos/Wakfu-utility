import React from 'react'
import classNames from '../utility/classNames'

export default function Button({ children, className, cat }) {
  return (
    <button
      className={classNames(
        className,
        cat === 'day' ? 'bg-sky-600 hover:bg-sky-700 focus:ring-sky-500' : null,
        cat === 'week'
          ? 'bg-violet-600 hover:bg-violet-700 focus:ring-violet-500'
          : null,
        cat === 'month'
          ? 'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500'
          : null,
        'mt-4 inline-flex items-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2  focus:ring-offset-2'
      )}
    >
      {children}
    </button>
  )
}
