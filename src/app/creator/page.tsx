'use client';
import React from 'react'
import DashboardLayout from '../_components/dashboard-items/dashboardLayout'
import Estates from '../_components/estates/estates'
import TopCollections from '../_components/collections/topCollections';
import TrendingNow from '../_components/trending/trending';

const Creator = () => {
  return (
   <DashboardLayout current={1}>
        <div className='w-full  relative flex flex-col overflow-y-scroll'>
            <span className='text-white text-[35px] font-bold'>Welcome to Lanstellar</span>
            <div className=' '>
                  <Estates />
            </div>
            <div >
              <TopCollections />
            </div>
            <div className='mt-10'>
                <TrendingNow />
            </div>

        </div>
    </DashboardLayout>
  )
}

export default Creator