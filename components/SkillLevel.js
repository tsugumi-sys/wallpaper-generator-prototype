import React, { useState } from 'react'
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa'
import skillIcons from 'components/Icons'
import { atom, useRecoilState } from 'recoil'

const initSkillLevels = () => {
    const initLevel = {}
    skillIcons.map(({ name }) => {
        initLevel[name] = 0
    })
    return initLevel
}


const skillLevels = atom({
    key: 'skillLevels',
    default: initSkillLevels()
})

const SkillLevel = ({ name }) => {
    const [levels, setLevels] = useRecoilState(skillLevels)
    const upLevel = (e, keyName) => {
        e.preventDefault()
        setLevels((levels) => {
            return { ...levels, [keyName]: levels[keyName] + 1 }
        })
    }
    const downLevel = (e, keyName) => {
        e.preventDefault()
        setLevels((levels) => {
            return { ...levels, [keyName]: levels[keyName] - 1}
        })
    }
    return (
        <div className="flex items-center justify-center w-1/2">
            <div className="pr-3 w-1/2">
                <p>Lv. {levels[name]}</p>
            </div> 
            <div className='flex justify-center mt-1'>
                <div className="mr-1">
                    <button onClick={(e) => upLevel(e, name)} disabled={levels[name] === 10}>
                        <FaArrowAltCircleUp />
                    </button>
                </div>
                <div>
                    <button onClick={(e) => downLevel(e, name)} disabled={levels[name] === 0}>
                        <FaArrowAltCircleDown />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SkillLevel
export { skillLevels }