import { Disclosure,Transition } from '@headlessui/react'
import { AiFillCaretDown } from 'react-icons/ai'

import React from 'react'

function DiscBoxes({ attributes = [] }) {
  if (!attributes || attributes.length === 0) return null;
  console.log(attributes)
  return (
<>
    {attributes.map((att)=> (
    <Disclosure key={att.id}>
    <Disclosure.Button className="py-4 bg-gray-300 border-2 border-b-2 border-gray-600 p-2 w-full  flex justify-between appearance-none focus:outline-none hover:opacity-90 transition-all duration-500 ease-in-out">
      <h2 className='text-left font-serif text-gray-700 rounded font-semibold'>{att.name}</h2>
      <AiFillCaretDown size={20}/>
    </Disclosure.Button>
    <Transition
   enter="transition-opacity duration-500 ease-in"
   enterFrom="opacity-0 ease-in"
   enterTo="opacity-100 ease-in"
   leave="transition-opacity duration-350 ease-out"
   leaveFrom="opacity-100 ease-out"
   leaveTo="opacity-0"
      >
    <Disclosure.Panel className="text-black text-base p-4 bg-gray-100">
     {att.value}
    </Disclosure.Panel>
    </Transition>
 <br></br> </Disclosure>
  
    ))}
   </>
  )
}

export default DiscBoxes