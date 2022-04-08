/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { connect } from 'react-redux'
import { toggleVisibility } from '../../redux/tasks/tasks.actions'
import ModalTaskItem from './ModalTaskItem'

function Modal({ tasks, modal, toggleModal }) {
  const taskList = modal.gotChild
    ? tasks.filter(task => task.parent === modal.filter)
    : tasks.filter(task => task.category === modal.filter && !task.parent)
  return (
    <Transition.Root show={modal.open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => toggleModal()}
      >
        <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block transform overflow-hidden rounded-lg bg-gray-900 px-4 pt-5 pb-4 text-left align-bottom text-gray-200 shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl sm:p-6 sm:align-middle">
              <div>
                <div className="mt-3 sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="mb-3 text-xl font-medium text-white"
                  >
                    Taches visibles
                  </Dialog.Title>
                  <div className="grid grid-cols-3 gap-2">
                    {taskList.map(task => (
                      <ModalTaskItem key={`config-${task.id}`} task={task} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex sm:mt-6">
                <button
                  type="button"
                  className="mx-auto mt-4 inline-flex w-full max-w-sm justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                  onClick={() => toggleModal()}
                >
                  Enregistrer
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

const mapStateToProps = ({ tasks, modal }) => ({
  tasks,
  modal,
})

const mapDispatchToProps = dispatch => ({
  toggleVisibility: item => dispatch(toggleVisibility(item)),
  toggleModal: () => dispatch({ type: '@@Modal/ToggleModal' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
