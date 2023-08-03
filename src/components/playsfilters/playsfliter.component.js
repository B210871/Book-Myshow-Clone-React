import { Disclosure } from '@headlessui/react'

import {BiChevronUp,BiChevronDown} from "react-icons/bi"

const PlaysFilter=(props)=> {
  return (
    <Disclosure>
          {({ open }) =>(
            <>
            
            <Disclosure.Button className="py-2 flex items-center gap-2">
                {open ? <BiChevronUp /> : <BiChevronDown />}
        <span className={open ? "text-red-600 " :"text-gray-700"}>
       {props.title}
        </span>
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500 bg-white rounded-md">
        <div className='flex item-center gap-3 flex-wrap '>
        {props.tags.map((tag)=>(
            <>
            <div className='border-gray-400 border-2 p-3  rounded-md my-1 ml-3 bg-white '>
                <span className='text-red-600'>{tag}</span>
            </div>
            </>
        ))}
        </div>
      </Disclosure.Panel>
            
            </>

        )}
     
    </Disclosure>
  )
}
export default PlaysFilter;