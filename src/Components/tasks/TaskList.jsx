import React from 'react'
import { CogIcon } from '@heroicons/react/solid'

import { connect } from 'react-redux'
import classNames from '../../utility/classNames'

function TaskList({
  category,
  name,
  cols,
  children,
  className,
  custom,
  toggleModal,
}) {
  // eslint-disable-next-line no-unused-vars
  const loadClasses = 'grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4'
  return (
    <div className={className}>
      <h2
        className={
          'mb-2 flex items-center text-2xl font-semibold text-gray-200'
        }
      >
        {!custom && (
          <button className={'mr-4'} onClick={() => toggleModal(category)}>
            <CogIcon
              className={classNames(' h-8 w-8 transform')}
              aria-hidden="true"
            />
          </button>
        )}

        {name}
      </h2>
      <div
        className={`flex flex-col md:grid md:grid-cols-${cols} gap-y-2 gap-x-8`}
      >
        {children}
      </div>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  toggleModal: filter =>
    dispatch({ type: '@@Modal/ToggleModal', payload: { filter } }),
})

export default connect(null, mapDispatchToProps)(TaskList)
