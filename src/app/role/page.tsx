"use client";
import { useState } from 'react';
import Navbar from '../_components/navbar/navbar';
import { Buyer, Pizza } from '../assets/icons/icons';
import DefaultButton from '../_components/buttons/defaultButton';

const Roles = () => {
  const [isChecked, setIsChecked] = useState<number | null>(null);

  const selectRole = (roleNumber: number) => {
    setIsChecked(roleNumber);
  };

  return (
    <div className='flex flex-col h-screen bg-main '>
      <div className='z-10'>
        <Navbar />
      </div>

      <div className="flex flex-col flex-grow justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center">
          <h3 className='text-white xl:text-[40px] text-[30px] font-bold'>Sign Up</h3>
          <span className='xl:text-[24px] text-[16px] text-[white] font-light xl:max-w-[600px] max-w-[400px]'>
            Choose a wallet you want to connect. There are several wallet providers.
          </span>
        </div>

        <div className='flex xl:flex-row flex-col gap-8 mt-12'>
          <div className='flex flex-col gap-8 w-[352px] h-[196px] bg-white rounded-[16px] px-8 py-3'>
            <div className='items-center flex flex-row justify-between'>
              <span><Pizza /></span>
              <div
                className={`w-8 h-8 border-2 rounded-[4px] border-[#6A0572] ${isChecked === 1 ? 'bg-[#6A0572]' : 'bg-white'}`}
                onClick={() => selectRole(1)}
              >
              </div>
            </div>
            <span className='text-[24px] text-[#333] font-semibold'>I am signing up as a creator</span>
          </div>

          <div className='flex flex-col gap-8 w-[352px] h-[196px] bg-white rounded-[16px] px-8 py-3'>
            <div className='items-center flex flex-row justify-between'>
              <Buyer />
              <div
                className={`w-8 h-8 border-2 rounded-[4px] border-[#6A0572] ${isChecked === 2 ? 'bg-[#6A0572]' : 'bg-white'}`}
                onClick={() => selectRole(2)}
              >
              </div>
            </div>
            <span className='text-[24px] text-[#333] font-semibold max-w-48'>I am a buyer looking for land</span>
          </div>
        </div>

        <div className='w-2/12 ml-8 flex items-center justify-center mt-20'>
          {isChecked !== null ? (
            <DefaultButton
              addClass='w-6/12'
              className="default-btn"
              to={isChecked === 1 ? "/creator-registration" : "/buyer-registration"}
            >
              Sign Up
            </DefaultButton>
          ) : (
            <div className='w-full bg-[#FFD000] rounded-[16px] py-4 px-8 text-center text-black opacity-50 cursor-not-allowed'>
              Sign Up
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Roles;
