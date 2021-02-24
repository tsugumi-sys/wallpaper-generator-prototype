import React from 'react'
import skillIcons from 'components/Icons'
import { Icon } from 'components/AddSkills'
import SkillLevel from 'components/SkillLevel'

export default function SkillDetails({ selected }){
    const yourSkills = skillIcons.filter((u) => selected[u.name] === true)
    return (
        <div className='mt-5 bg-white rounded-lg p-3 h-48 overflow-y-scroll'>
            <div>
                {yourSkills?.map(({ name, icon }) => {
                    return (
                        <div className='flex items-center justify-between mb-1' key={name}>
                            <Icon className='mr-4 text-lg w-1/2' key={name} name={name} icon={icon} />
                            <SkillLevel name={name}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}