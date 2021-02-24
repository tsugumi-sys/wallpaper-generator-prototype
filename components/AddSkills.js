import React, { useEffect, useState } from 'react'
import skillIcons from 'components/Icons'


export const Icon = ({ name, icon, className }) => {
    return (
        <div className={`flex items-center mr-1 ${className}`}>
            {icon}
            <p className='pl-1'>{name}</p>
        </div>
    )
}


export default function Skills({ handleSelect, selected }){
    return (
        <div className='flex flex-wrap w-full'>
            {skillIcons.map(({ name, icon}) => {
                const btnBg = selected[name] ? 'bg-indigo-500 text-white' : 'shadow-md border border-indigo-500'; 
                return (
                    <div className='py-2' key={name}>
                        <button key={name} onClick={event => handleSelect(event, name)} className={`${btnBg} px-3 py-1 mr-2 rounded-3xl`}>
                            <Icon name={name} icon={icon} />
                        </button>
                    </div>
                )
            })}
        </div>
    )
}