'use client';
import React from 'react';
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { FEATURED_ESTATES } from '../data/allLands';

const Estates = () => {
    const router = useRouter();
    return (
        <div className='flex flex-row overflow-x-scroll h-[480px] gap-8 items-center scrollbar-hide border-b border-white py-8 snap-x snap-mandatory'>
            {
                FEATURED_ESTATES.map((estate, index) => (
                    <div key={index} className='relative min-w-[50%] h-full overflow-hidden rounded-[10px] snap-center cursor-pointer' onClick={() => router.push(`/top-collection/${index}`)}>
                        <Image src={estate.img} alt="estate" className=' h-full w-full object-cover ' />
                        <div className='absolute left-2 bottom-0 text-white flex justify-between items-center px-8 py-2 w-full bg-gradient-to-t from-black via-transparent to-transparent'>
                            <h2 className='text-[24px] '>{estate.name}</h2>
                            <div className='flex text-[14px] justify-between bg-[#001f3f80] p-2'>
                                <div className='flex flex-col'>
                                    <span className='text-[18px] text-white'>{estate.time}</span>
                                    <span className='text-[12px] text-white'>Time remaining</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-[18px] text-white'>{estate.bid}</span>
                                    <span className='text-[12px] text-white'>Highest Bid</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Estates;
