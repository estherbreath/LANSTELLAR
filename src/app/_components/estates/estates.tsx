import React from 'react';
import Image from 'next/image';
import Estate1 from "../../assets/images/estate1.png";
import Estate2 from "../../assets/images/estate2.png";

export const FEATURED_ESTATES = [
    {
        img: Estate1,
        name: "Oceanfront Oasis",
        time: "18h : 17m : 29s",
        bid: "17.53 ETH"
    },
    {
        img: Estate2,
        name: "Mountain Retreat",
        time: "18h : 17m : 29s",
        bid: "17.53 ETH"
    },
    {
        img: Estate2,
        name: "Mountain Retreat",
        time: "18h : 17m : 29s",
        bid: "17.53 ETH"
    },
    {
        img: Estate2,
        name: "Mountain Retreat",
        time: "18h : 17m : 29s",
        bid: "17.53 ETH"
    },
    {
        img: Estate2,
        name: "Mountain Retreat",
        time: "18h : 17m : 29s",
        bid: "17.53 ETH"
    },
    {
        img: Estate2,
        name: "Mountain Retreat",
        time: "18h : 17m : 29s",
        bid: "17.53 ETH"
    }
];

const estates = () => {
    return (
        <div className=' w-full flex flex-row overflow-x-auto h-[400px] gap-8 items-center scrollbar-hide border-b border-white pb-4'>
            {
                FEATURED_ESTATES.map((estate, index) => (
                    <div key={index} className='relative  h-full overflow-hidden rounded-[10px] min-w-[800px]'>
                        <Image src={estate.img} alt="estate" className='w-full h-full object-cover ' />
                        <div className='absolute left-2 bottom-0 text-white flex justify-between items-center w-full px-8 py-2'>
                            <h2 className='text-[24px] w-6/12'>{estate.name}</h2>
                            <div className='flex text-[14px] w-4/12 justify-between bg-[#001f3f80] p-2'>
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

export default estates;
