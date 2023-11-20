import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { createClient } from '@supabase/supabase-js';
import { SessionText } from './SessionButton'


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


export default function MyModal({ isOpen, closeModal }) {
const [taskName, setTaskName] = useState('');

const handleSave = async () => {
  // only save if the taskName isn't empty
  if (taskName.trim() !== '') {
    try {
      const { data, error } = await supabase
        .from('task-inputs')
        .insert([{ taskName:taskName, timeadded: new Date() }]);
        
      if (error) {
        console.error('Error saving data to Supabase:', error);
        return;
      }

      // log success message
      console.log('Data saved to Supabase:', data);

      // close modal when finished
      closeModal();
    } catch (error) {
      console.error('Error saving data to Supabase:', error);
    }
  }
};

const handleChange = (e) => {
  // Update taskName state as the user types
  setTaskName(e.target.value);
};

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
                    className="text-2xl font-inter leading-6 text-gray-900 font-bold pt-2"
                  >
                    Create Your Task
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className="pt-5">
                      <form>
                       <label className="pb-4 text-xl font-inter font-bold" >Task name</label> <br />
                       <input type="text" placeholder="Add Your Task" name="task name" className="text-xl focus:outline-none font-inter font-semibold mt-2 bg-[#f1f1f1] focus:bg-[#d9d9d9] rounded-[7px] px-4 py-4 w-full" 
                       value={taskName}
                       onChange={handleChange}/>
                     </form>
                    </div>
                      <div className="flex-col align-items pt-5 pb-10">
                        <SessionText/>
                      </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="box-border w-1/5
                      transition ease-in-out delay-50 bg-[#f1f1f1] 
                      hover:scale-105 hover:shadow-[0px_3px_0px_0px_#c1c1c1] duration-100
                      shadow-[0px_5px_0px_0px_#c1c1c1]
                      active:shadow-[0px_0px_0px_0px_#c1c1c1]
                      py-3
                      active:translate-y-2
                      text-center 
                      rounded-[15px]
                      text-black text-xl
                      resize font-bold"
                      onClick={handleSave}>
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
