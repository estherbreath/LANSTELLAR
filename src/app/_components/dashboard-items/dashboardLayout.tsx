import React from 'react'
import DashboardNav from './dashboardNav'
import DashboardLeft from './dashboardLeft'

interface dashboardLayout {
    children?: React.ReactNode;
    current: number;
}
const DashboardLayout = ({children, current}: dashboardLayout) => {
  return (
    <div className='w-full h-screen relative flex flex-col'>
        <div className='bg-main py-4 relative z-10'>
             <DashboardNav />
        </div>
        <div className='w-full flex flex-row flex-grow overflow-y-scroll '>
            <div className='w-1/12 bg-main text-white xl:flex hidden'>
                <DashboardLeft current={current}/>
            </div>
            <div className='w-full flex bg-color p-4 '>
                {children}
            </div>
        </div>


    </div>
  )
}

export default DashboardLayout