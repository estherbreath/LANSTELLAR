'use client';
import React from 'react'
import DashboardLayout from '../_components/dashboard-items/dashboardLayout'
import Estates from '../_components/estates/estates'
import TopCollections from '../_components/collections/topCollections';

const Creator = () => {
  return (
   <DashboardLayout current={1}>
        <div className='relative flex w-full flex-col'>
            <span className='text-white text-[40px]'>Welcome to Lanstellar</span>
            <div className=''>
                  <Estates />
            </div>
            <div>
              <TopCollections />
            </div>

        </div>
    </DashboardLayout>
  )
}

export default Creator