import React from 'react'
import Navbar from '../_components/navbar/navbar'
import CreatorLeft from '../_components/dashboard-items/creatorLeft'
import CreatorForm from '../_components/dashboard-items/creatorForm'

const CreatorRegistration = () => {
  return (
    <div className='w-full h-screen relative flex flex-col'>
       <div className='z-10 relative'>
            <Navbar />
       </div>

       <div className='w-full flex flex-row flex-grow relative  overflow-y-scroll '>
            <div className='w-1/12 bg-[#1C092A] text-white xl:flex hidden'>
                <CreatorLeft />
            </div>
            <div className='w-full flex bg-color p-4 '>
                <CreatorForm />
            </div>
        </div>
    </div>
  )
}

export default CreatorRegistration