import React, { useState, useEffect } from 'react'
import Card from 'components/Card'
import Modal from 'components/Modal'
import AddSkills from 'components/AddSkills'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import skillIcons from 'components/Icons'
import SkillDetails from 'components/SkillDetails'
import { RecoilRoot } from "recoil";


function Home() {
  // Modal State
  const [modalState, setModalState] = useState(false);
  const handleModalStateChange = (e) => {
    e.preventDefault()
    setModalState(!modalState);
  }

  // Profile State
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    affiliation: '',
    description: '',
  })

  const handleInputChange = (event, keyName) => {
    event.preventDefault()
    setDetails((details) => {
      return { ...details, [ keyName ]: event.target.value}
    })
  }

  // Skill State
  // initial state 
  const initialSelectedState = () => {
    const initState = {}
    skillIcons.map(({ name }) => {
      initState[name] = false
    })
    return initState
  }
  // set selected state
  const [selected, setSelected] = useState(initialSelectedState())
  const handleSelect = (event, keyName) => {
    event.preventDefault();
    setSelected((selected) => {
      return { ...selected, [keyName]: !selected[keyName]}
    })
    console.log(selected)
  }

  return (
    <>
    <div className='flex bg-gray-100 h-screen'>
      {/* Form Component */}
      <div className='p-4 flex flex-col w-1/4'>
        <div className='flex'>
          <div className='w-1/2'>
            <label htmlFor='firstName'>First Name</label>
            <input
              className='shadow-sm mt-1 mb-4 py-2 px-3 w-11/12'
              placeholder='Kyoko'
              type='text'
              name='firstName'
              value={details.firstName}
              onChange={(event) => handleInputChange(event, 'firstName')}
            />
          </div>
          <div className='w-1/2'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              className='shadow-sm mt-1 mb-4 py-2 px-3 w-11/12'
              placeholder='Saito'
              type='text'
              name='lastName'
              value={details.lastName}
              onChange={(event) => handleInputChange(event, 'lastName')}
            />
          </div>
        </div>
        <label htmlFor='affiliation'>Affiliation</label>
        <input
          className='shadow-sm mt-1 mb-4 py-2 px-3'
          placeholder='MIT, Oxford, Stanford ...'
          type='text'
          name='affiliation'
          value={details.affiliation}
          onChange={(event) => handleInputChange(event, 'affiliation')}
        />
        <label htmlFor='affiliation'>Description</label>
        <textarea
          className='shadow-sm mt-1 h-28 py-2 px-3 mb-6'
          placeholder='I like programming ...'
          type='text'
          name='description'
          value={details.description}
          onChange={(event) => handleInputChange(event, 'description')}
        />
        {/* Modal Component, Add Skills here */}
        <div>
          <button onClick={handleModalStateChange} className="bg-indigo-600 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              <AiOutlineAppstoreAdd/>
              <span className='pl-2'>Chose Your Skill</span>
          </button>
          <Modal
            modalState={modalState}
            handleModalStateChange={handleModalStateChange}
          >
              <h1 className='mb-3 font-semibold pl-1'>Chose Your Skills</h1>
              <AddSkills handleSelect={handleSelect} selected={selected}/>
            </Modal>
        </div>
        <div>
          <SkillDetails selected={selected} />
        </div>
      </div>

      {/* Your Wall Paper here!! */}
      <div className='mt-4 p-4 w-3/4'>
        <Card details={details} selected={selected}/>
      </div>
    </div>
    </>
  )
}

const App = () => {
  return (
    <RecoilRoot>
      <Home />
    </RecoilRoot>
  )
}

export default App