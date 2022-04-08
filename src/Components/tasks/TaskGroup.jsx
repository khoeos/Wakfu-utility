import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon, CogIcon, EyeOffIcon } from '@heroicons/react/outline'
import { connect } from 'react-redux'
import classNames from '../../utility/classNames'
import constants from '../../redux/tasks/task.constants'
import { toggleVisibility } from '../../redux/tasks/tasks.actions'

function TaskGroup({
  id,
  name,
  children,
  cat,
  progress,
  toggleVisibility,
  toggleModal,
}) {
  return (
    <Disclosure as="div" className={'relative'}>
      {({ open }) => (
        <>
          <div className={'absolute right-1 top-[6px] ml-2 text-gray-100'}>
            <button onClick={() => toggleVisibility(id)}>
              <EyeOffIcon
                className={classNames(' mr-2 h-8 w-8 transform')}
                aria-hidden="true"
              />
            </button>
            <button onClick={() => toggleModal(id)}>
              <CogIcon
                className={classNames(' h-8 w-8 transform')}
                aria-hidden="true"
              />
            </button>
          </div>

          <Disclosure.Button className={'w-full'}>
            <div
              className={classNames(
                cat === constants.daily ? 'bg-sky-600' : null,
                cat === constants.weekly ? 'bg-violet-600' : null,
                cat === constants.monthly ? 'bg-emerald-600' : null,
                'block flex items-center rounded-lg p-3 text-gray-100'
              )}
            >
              <ChevronDownIcon
                className={classNames(
                  open ? '-rotate-180' : 'rotate-0',
                  'h-6 w-6 transform'
                )}
                aria-hidden="true"
              />
              <span className={classNames('ml-2')}>
                {name} - {progress}
              </span>
            </div>
          </Disclosure.Button>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform opacity-95 opacity-0"
            enterTo="transform opacity-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform opacity-100 opacity-100"
            leaveTo="transform opacity-95 opacity-0"
          >
            <Disclosure.Panel>
              <div className={`grid grid-cols-1 gap-2 pt-2 pb-4 pl-6`}>
                {children}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleVisibility: item => dispatch(toggleVisibility(item)),
  toggleModal: filter =>
    dispatch({
      type: '@@Modal/ToggleModal',
      payload: { filter, gotChild: true },
    }),
})

export default connect(null, mapDispatchToProps)(TaskGroup)
