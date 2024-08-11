import React from 'react'
import Image from 'next/image';
import Polygon from "../../assets/icons/polygon.png";
import Bsc from "../../assets/icons/bsc.png";
import Eth from "../../assets/icons/eth.png";
import { SelectDown } from '~/app/assets/icons/icons';

export const NETWORKS = [
    {
        img: Polygon,
        name: "Polygon",
    },
    {
        img: Bsc,
        name: "Binance",
    },
    {
        img: Eth,
        name: "Ethereum",
    },
]

export const TIMELINE = [
    {
       duration: "7D"
    },
    {
       duration: "1h"
    },
    {
       duration: "6h"
    },
    {
       duration: "1D"
    },
    {
       duration: "12h"
    },
    {
       duration: "24h"
    },
]

const TopCollections = () => {
    return (
        <div className='flex flex-col py-8'>
            <span className='text-[32px] text-white'>Top Collections</span>

            <div className='flex flex-row bg-[#1C092A] rounded-[16px] w-full p-3'>
                <div className='flex flex-row items-center'>
                    {
                        NETWORKS.map((network, index) => (
                            <div key={index} style={{ position: 'relative', left: `${index * -10}px`, zIndex: index }}>
                                <Image src={network.img} alt='images'  />
                            </div>
                        ))
                    }

                    <div className='ml-1 flex flex-row gap-2 items-center'>
                        <span className='text-white text-[24px] cursor-pointer'>All Networks</span>
                        <span>
                            <SelectDown />
                        </span>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-10 ml-16'>
                    {
                        TIMELINE.map((timeline, index) => (
                            <div key={index} className='flex gap-10 flex-row'>
                                <span className='text-white text-[28px] cursor-pointer'>{timeline.duration}</span>
                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default TopCollections