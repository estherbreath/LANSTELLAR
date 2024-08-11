'use client';
import { useState } from 'react'
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { Funnel, SelectDown } from '~/app/assets/icons/icons';
import { NFTS_LAND, NETWORKS, TIMELINE } from '../data/allLands';

const TopCollections: React.FC = () => {
    const page: string[] = ['10', '20', '30', '40', '50'];

    const [selectedPage, setSelectedPage] = useState<string | null>(null);
    const [selectedTimeline, setSelectedTimeline] = useState<string | null>(null);


    const handleSelectPage = (number: string) => {
        setSelectedPage(prevSelected => prevSelected === number ? null : number);
    };

    const handleSelectTimeline = (timeline: { duration: string }) => {
        setSelectedTimeline(prevSelected => (prevSelected === timeline.duration ? null : timeline.duration));
    };

    const router = useRouter();
    return (
        <div className='w-full flex flex-col pt-8 overflow-y-scroll'>
            <span className='text-[28px] text-white pb-1 font-bold'>Top Collection</span>

            <div className='flex flex-row bg-[#1C092A] rounded-[16px] w-full p-3'>
                <div className='flex flex-row items-center'>
                    {
                        NETWORKS.map((network, index) => (
                            <div key={index} style={{ position: 'relative', left: `${index * -10}px`, zIndex: index }}>
                                <Image src={network.img} alt='images' />
                            </div>
                        ))
                    }

                    <div className='ml-1 flex flex-row gap-2 items-center'>
                        <span className='text-white text-[16px] cursor-pointer'>All Networks</span>
                        <span>
                            <SelectDown />
                        </span>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-10 ml-16 '>
                    {TIMELINE.map((timeline, index) => (
                        <div
                            key={index}
                            className={`text-[18px] cursor-pointer px-6 py-3 rounded-[16px] ${selectedTimeline === timeline.duration ? 'bg-[#FFD000] text-black' : 'text-white'
                                }`}
                            onClick={() => handleSelectTimeline(timeline)}
                        >
                            <span >{timeline.duration}</span>
                        </div>
                    ))}
                </div>
            </div>


            <div className='flex w-full mt-4 justify-between'>
                <table className=' w-full flex flex-col gap-1'>
                    <thead className='flex flex-row w-full pl-32  pr-4 mb-4'>
                        <td className='flex w-full items-start'>
                            <td className='flex flex-row gap-2 font-bold'>
                                <p className='text-[20px] text-white'>#</p>
                                <p className='text-[20px] text-white'>NFT Lands</p>
                            </td>
                        </td>
                        <td className='flex flex-row gap-20 justify-end items-end w-full font-bold'>
                            <td className=''>
                                <p className='text-white text-[16px] '>Attribute</p>
                            </td>

                            <td className=''>
                                <p className='text-white text-[16px]'>Price</p>
                            </td>
                            <td className=''>
                                <p className='text-white text-[16px]'>Volume</p>
                            </td>
                            <td className=''>
                                <p className='text-white text-[16px]'>Listed</p>
                            </td>
                        </td>
                    </thead>
                    {
                        NFTS_LAND.map((asset, index) => (
                            <tbody key={index} className='flex flex-row w-full mt-4 items-center overflow-y-scroll pr-4 cursor-pointer'  onClick={() => router.push(`/top-collection/${index}`)}>
                                <td className='flex w-full items-start '>
                                    <td className='flex flex-row gap-2 items-center'>
                                        <p className='text-[16px] text-white'>{index + 1}</p>
                                        <div className='relative'>
                                            <Image src={asset.img} alt='land' className='rounded-[8px] w-[40px]' />
                                            <Image src={asset.network} alt='eth' className='w-[16px] absolute top-[-1px] right-[-2px]' />
                                        </div>

                                        <p className='text-[16px] text-white'>{asset.name}</p>
                                    </td>
                                </td>
                                <td className='flex flex-row gap-20 justify-end items-end w-full '>
                                    <td className=''>
                                        <p className='text-white text-[16px] '>{asset.attribute}</p>
                                    </td>

                                    <td className=''>
                                        <p className='text-white text-[16px]'>{asset.price}</p>
                                    </td>
                                    <td className=''>
                                        <p className='text-white text-[16px]'>{asset.volume}</p>
                                    </td>
                                    <td className=''>
                                        <p className='text-white text-[16px]'>{asset.listed}</p>
                                    </td>
                                </td>
                            </tbody>
                        ))
                    }
                </table>

            </div>


            <div className='flex flex-row items-center gap-2 w-3/12 mt-10'>
                <span>
                    <Funnel />
                </span>
                <div className='flex flex-row bg-[#1C092A] rounded-[16px]  pr-3 py-2 '>

                    <div className='flex gap-14 flex-row'>
                        {page.map((number) => (
                            <span
                                key={number}
                                onClick={() => handleSelectPage(number)}
                                className={`text-[18px] cursor-pointer px-4 py-2 rounded-[16px] ${selectedPage === number ? 'bg-[#FFD000] text-black' : 'text-white'
                                    }`}
                            >
                                {number}
                            </span>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TopCollections