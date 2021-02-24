import React from 'react'
import skillIcons from 'components/Icons'
import { Icon } from 'components/AddSkills'
import html2canvas from 'html2canvas'
import { selector, useRecoilValue } from 'recoil'
import { skillLevels } from 'components/SkillLevel'



const charSkillLevels = selector({
    key: 'charSkillLevels',
    get: ({get}) => {
        return get(skillLevels)
    }
})


const Card = ({ details, selected }) => {
    const skillLevels = useRecoilValue(charSkillLevels)
    const yourSkills = skillIcons.filter((u) => selected[u.name] === true)
    const handleClick = (e) => {
        e.preventDefault();
        var node = document.getElementById('wall-paper');
        html2canvas(node)
            .then((canvas) => {
                saveAs(canvas.toDataURL(), 'your-wallpaper.png')
        })
        .catch((error) => {
            console.error('Oops, something went wrong!', error)
        })
    }
    const saveAs = (uri, filename) => {
        var link = document.createElement('a');
        if (typeof link.download === 'string') {
            link.href = uri;
            link.download = filename;

            // FireFox requires the link to be in the body
            document.body.appendChild(link)

            // simulate click
            link.click()

            // remove the link when done
            document.body.removeChild(link)
        } else {
            window.open(uri)
        }
    }
    return (
        <>
          <div id='wall-paper' className='shadow-xl flex justify-between items-end w-full h-5/6 bg-black'>
              <div className='w-1/4 p-3 bg-gray-300 h-full bg-gray-800'>
                <div className='mb-4 text-white'>
                    <span className='text-gray-300 border-b-2 border-blue-500'>Name</span>
                    <p className='mt-2 text-xl break-words'>{details.firstName} {details.lastName}</p>
                </div>
                <div className='mb-4 text-white'>
                    <span className='text-gray-300 border-b-2 border-blue-500'>Affiliation</span>
                    <p className='mt-2 text-xl break-words'>{details.affiliation}</p>
                </div>
                <div className='mb-4 text-white'>
                    <span className='text-gray-300 border-b-2 border-blue-500'>Description</span>
                    <p className='mt-2 text-lg break-words'>{details.description}</p>
                </div>
              </div>
              <div className='w-72 h-full bg-gray-800 p-3'>
                  {yourSkills?.map(({ name, icon }) => {
                      return (
                          <div className='flex mb-3' key={name}>
                              <Icon className='w-1/3 text-white' key={name} name={name} icon={icon} />
                              <div className={`bg-purple-600`} style={{ width: `${skillLevels[name] * 6.66}%`}}></div>
                          </div>
                      )
                  })}
              </div>
          </div>
          <button onClick={handleClick} className="mt-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded inline-flex details, selecteds-center">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>Download</span>
          </button>
        </>
    )
}

export default Card