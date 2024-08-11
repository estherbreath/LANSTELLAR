import React from 'react';
import Image from 'next/image';
import NftSm from "../../assets/images/bgsm.png";
import BgNft from "../../assets/images/bgnft.png";
import EthIcon from "../../assets/images/ethicon.png"
import { LAND_IMG } from '~/app/_components/data/allLands';
import DashboardLayout from '~/app/_components/dashboard-items/dashboardLayout';
import DefaultButton from '~/app/_components/buttons/defaultButton';


export const LAND_INFO = [
  {
    title: "Price",
    value: "3.8",
  },
  {
    title: "Volume",
    value: "80",
  },
  {
    title: "Highest bid",
    value: "3.8",
  },
  {
    title: "Listed",
    value: "6X",
  },
]

const Portfolio = () => {
  return (
    <DashboardLayout current={1}>
      <div className='pb-[40px] gap-20 w-full flex flex-col overflow-y-scroll'>

        <div className='relative w-full'>
          <Image src={BgNft} alt='image' className='w-full h-[600px] rounded-[16px]' />

          <div className='absolute left-80 bottom-[-180px] flex flex-row gap-2 items-center'>
            <Image src={NftSm} alt='bgsm' className='w-[300px] h-[300px] rounded-[16px]' />

            <div className='flex flex-col px-1'>
              <span className='text-[40px] text-white px-2'>Green Acres</span>
              <span className='text-[22px] text-white font-extralight px-2'>Attribute: Agricultural Land</span>

              <div className='flex flex-row gap-8 mt-6'>
                {
                  LAND_INFO.map((info, index) => (
                    <div key={index} className='flex flex-col items-center border-r border-white px-2'>
                      <div className='flex flex-row items-center'>
                        <span className='text-white text-[28px]'>{info.value}</span>
                        <Image src={EthIcon} alt='eth' />
                      </div>
                      <span className='text-white text-[20px]'>{info.title}</span>
                    </div>
                  ))
                }
              </div>
              <div className='w-8/12 ml-8 flex items-center justify-center mt-8'>
                <DefaultButton
                  addClass='w-6/12'
                  className="default-btn"
                  to=""
                >
                  Upload
                </DefaultButton>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col relative mt-20'>
          <div className='flex flex-col gap-4 w-11/12'>
            <span className='text-white text-[28px] font-bold'>Description</span>
            <p className='text-white text-[16px] font-light'>
              Green Acres is a prime piece of agricultural land, perfect for investors looking to diversify their portfolio with a tangible asset. This NFT represents ownership of a fertile and well-maintained plot, ideal for farming or future development.
            </p>
          </div>


          <div className='flex flex-col gap-4 w-11/12 mt-12'>
            <span className='text-white text-[28px] font-bold'>Key Features</span>
            <span className='text-white text-[20px] font-bold'>Fertile Soil:
              <span className='text-white text-[16px] font-normal'> The land boasts rich, fertile soil, making it ideal for various agricultural activities.</span>
            </span>
            <span className='text-white text-[20px] font-bold'>Water Access :
              <span className='text-white text-[16px] font-normal'> Strategically located in a region known for its agricultural productivity.</span>
            </span>
            <span className='text-white text-[20px] font-bold'>Size:
              <span className='text-white text-[16px] font-normal'> Ample space for large-scale farming or other agricultural projects.</span>
            </span>
          </div>


          <div className='flex flex-col mt-12'>
            <span className='text-[28px] text-white py-8 font-bold'>Images of this item</span>
            <div className='flex flex-row overflow-x-scroll gap-8 items-center scrollbar-hide snap-x snap-mandatory'>
              {
                LAND_IMG.map((trending, index) => (
                  <div key={index} className='relative min-w-[25%] h-full overflow-hidden rounded-[16px] snap-center'>
                    <div className='flex flex-col  w-full p-4 rounded-[16px]'>
                      <Image src={trending.img} alt="image" className='rounded-[16px] w-full h-[350px] object-cover' />
                    </div>
                  </div>
                ))
              }
            </div>
            <div className='flex flex-row overflow-x-scroll gap-8 items-center scrollbar-hide snap-x snap-mandatory mt-8'>
              {
                LAND_IMG.map((trending, index) => (
                  <div key={index} className='relative min-w-[25%] h-full overflow-hidden rounded-[16px] snap-center'>
                    <div className='flex flex-col  w-full p-4 rounded-[16px]'>
                      <Image src={trending.img} alt="image" className='rounded-[16px] w-full h-[350px] object-cover' />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Portfolio;

