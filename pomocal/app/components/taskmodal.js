import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { SessionButtonUp } from './SessionButton'

export default function MyModal({ isOpen, closeModal }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-inter font-medium leading-6 text-gray-900"
                  >
                    Create Your Task
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="pt-5">
                      <form>
                       <label className="pb-4" >Task name</label> <br />
                       <input type="text" placeholder="Add Your Task" name="task name" className="mt-2 border-2 border-solid rounded-lg border-black/25 px-4 py-2" />
                     </form>
                    </div>
                      <div className="pt-5">
                        <SessionButtonUp/>
                      </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium font-inter"
                      onClick={closeModal}>
                      Save
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
