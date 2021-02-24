import React from 'react'
import { FiCheckSquare } from 'react-icons/fi' 

export default function Modal ({ modalState, handleModalStateChange, children }) {
    const modalClass = modalState ? 'block' : 'hidden'

    return (
        <div className={`${modalClass} items-center fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50`}>
            <section className='rounded-lg p-3 fixed bg-white w-4/5 md:w-2/5 h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                {children}
                <button onClick={handleModalStateChange} className="mt-10 bg-green-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <FiCheckSquare />
                    <span className='pl-2'>Done</span>
                </button>
            </section>
        </div>
    )
}