import React from 'react'
import Image from 'next/image';
import { TRENDING_LANDS } from '../data/allLands'
import { Trending } from '~/app/assets/icons/icons';

const TrendingNow = () => {
    return (
        <div className='flex flex-col'>
            <span className='text-[28px] text-white py-8 font-bold'>Trending Now</span>

            <div className='flex flex-row overflow-x-scroll gap-8 items-center scrollbar-hide py-8 snap-x snap-mandatory'>
                {
                    TRENDING_LANDS.map((trending, index) => (
                        <div key={index} className='relative min-w-[25%] h-full overflow-hidden rounded-[16px] snap-center'>
                            <div className='flex flex-col bg-[#1C092A] w-full p-4 rounded-[16px] '>
                                <Image src={trending.img} alt="image" className='rounded-[16px] w-full h-[350px] object-cover' />
                                <div className='flex flex-row gap-2 py-4 items-center'>
                                    <span className='text-white text-[24px] font-semibold'>{trending.name}</span>
                                    <span><Trending /></span>
                                </div>

                                <div className='flex flex-row justify-between p-4 bg-[#ffffff14] rounded-[16px]'>
                                    <div className='flex flex-col'>
                                        <span className='text-white text-[20px] font-extralight'>Starts in</span>
                                        <span className='text-white text-[20px] font-bold'>{trending.startTime}</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-white text-[20px] font-extralight'>Price</span>
                                        <span className='text-white text-[20px] font-bold'>{trending.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TrendingNow
