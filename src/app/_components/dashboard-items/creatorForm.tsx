"use client";
import { useState } from 'react'
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { ChevronDown, Upload } from '~/app/assets/icons/icons'
import DefaultButton from '../buttons/defaultButton';
import BaseModal from '../modals/basemodal';

const CreatorForm = () => {
    const router = useRouter();
    const [accountCreated, setAccountCreated] = useState(false);

    const [preview, setPreview] = useState<string | null>(null);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setPreview(fileURL);
        }
    };


    const [text, setText] = useState('');
    const maxLength = 2500;
    return (
        <div className='w-full overflow-y-scroll '>
            <div className='flex flex-row p-10 w-full '>
                <div className='flex flex-col gap-10 w-8/12'>
                    <div className='flex flex-col'>
                        <span className='text-[#FFD000] text-[24px]'>Personal Information</span>

                        <div className="grid grid-cols-2 w-full gap-20 mt-8">
                            <div className="w-full">
                                <label className="block text-gray-300 text-sm font-normal text-[20px] mb-8" htmlFor="first-name">
                                    First Name
                                </label>
                                <input
                                    className="appearance-none block w-full bg-transparent text-gray-300  border-b-2 text-[18px] border-white leading-8 focus:outline-none focus:border-white"
                                    id="first-name"
                                    type="text"

                                />
                            </div>

                            <div className="w-full">
                                <label className="block text-gray-300 text-sm font-normal text-[20px] mb-8" htmlFor="last-name">
                                    Last Name
                                </label>
                                <input
                                    className="appearance-none block w-full bg-transparent text-gray-300 border-b-2 text-[18px] border-white leading-8 focus:outline-none focus:border-white"
                                    id="last-name"
                                    type="text"
                                />
                            </div>

                            <div className="w-full">
                                <label className="block text-gray-300 text-sm font-normal text-[20px] mb-8" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="appearance-none block w-full bg-transparent text-gray-300 border-b-2 text-[18px] border-white leading-8 focus:outline-none focus:border-white"
                                    id="email"
                                    type="email"
                                />
                            </div>


                            <div className="w-full">
                                <label className="block text-gray-300 text-sm font-normal text-[20px] mb-8" htmlFor="phone-number">
                                    Phone Number
                                </label>
                                <input
                                    className="appearance-none block w-full bg-transparent text-gray-300 border-b-2 text-[18px] border-white leading-8 focus:outline-none focus:border-white"
                                    id="phone-number"
                                    type="text"

                                />
                            </div>

                            <div className="w-full">
                                <label className="block text-gray-300 text-sm font-normal text-[20px] mb-8" htmlFor="country">
                                    Location
                                </label>
                                <div className="relative">
                                    <select
                                        className="block appearance-none w-full bg-transparent text-gray-300 text-[16px] font-light border-b-2 border-white py-3 px-4 pr-8 leading-8 focus:outline-none focus:border-white"
                                        id="country"
                                    >
                                        <option>Country</option>
                                        <option>Nigeria</option>
                                        <option>Ghana</option>
                                        <option>Kenya</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-300">
                                        <ChevronDown />
                                    </div>
                                </div>

                            </div>

                            <div className="w-full">
                                <label className="block text-gray-300 text-sm font-normal text-[20px] mb-8" htmlFor="city">
                                    City
                                </label>
                                <div className="relative">
                                    <select
                                        className="block appearance-none w-full bg-transparent text-gray-300 text-[16px] font-light border-b-2 border-white py-3 px-4 pr-8 leading-8 focus:outline-none focus:border-white"
                                        id="city"
                                    >
                                        <option>State or city</option>
                                        <option>Lagos</option>
                                        <option>Accra</option>
                                        <option>Nairobi</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-300">
                                        <ChevronDown />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-20">
                            <label className="block text-gray-300 text-sm font-normal text-[20px] mb-8" htmlFor="postal-code">
                                Postal Code
                            </label>
                            <input
                                className="appearance-none block w-full bg-transparent text-gray-300 border-b-2 text-[18px] border-white leading-8 focus:outline-none focus:border-white"
                                id="postal-code"
                                type="text"
                            />
                        </div>
                        <div className="w-full mt-20">
                            <label className="block text-gray-300 text-sm font-normal text-[20px] mb-2" htmlFor="postal-code">
                                Bio
                            </label>
                            <textarea
                                id="bio"
                                name="bio"
                                maxLength={maxLength}
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                className="appearance-none block w-full bg-transparent text-gray-300 border border-white rounded-lg py-8 px-4 leading-tight focus:outline-none focus:border-white"
                                // rows="6"
                                placeholder="0/2500"
                            />
                            {/* <div className="absolute bottom-2 right-2 text-gray-300 text-sm">
                            {text.length}/{maxLength}
                        </div> */}
                        </div>
                    </div>

                    <div className='flex flex-col mt-20'>
                        <span className='text-[#FFD000] text-[24px]'>Professional Details:</span>

                        <div className="grid grid-cols-2 w-full gap-20 py-8">
                            <div className="w-full">
                                <label className="block text-gray-300 text-sm font-normal text-[20px] mb-4" htmlFor="first-name">
                                    LinkedIn link (Optional)
                                </label>
                                <input
                                    className="appearance-none block w-full bg-transparent text-gray-300  border-b-2 text-[18px] border-white leading-8 focus:outline-none focus:border-white"
                                    id="linkedin"
                                    type="text"

                                />
                            </div>

                            <div className="w-full">
                                <label className="block text-gray-300 text-sm font-normal text-[20px] mb-4" htmlFor="last-name">
                                    Company link
                                </label>
                                <input
                                    className="appearance-none block w-full bg-transparent text-gray-300 border-b-2 text-[18px] border-white leading-8 focus:outline-none focus:border-white"
                                    id="company"
                                    type="text"
                                />
                            </div>

                            <div className="w-full">
                                <label className="block text-gray-300 text-sm font-normal text-[20px] mb-4" htmlFor="email">
                                    X link (Optional)
                                </label>
                                <input
                                    className="appearance-none block w-full bg-transparent text-gray-300 border-b-2 text-[18px] border-white leading-8 focus:outline-none focus:border-white"
                                    id="x"
                                    type="text"
                                />
                            </div>


                            <div className="w-full">
                                <label className="block text-gray-300 text-sm font-normal text-[20px] mb-4" htmlFor="phone-number">
                                    Portfolio link (Optional)
                                </label>
                                <input
                                    className="appearance-none block w-full bg-transparent text-gray-300 border-b-2 text-[18px] border-white leading-8 focus:outline-none focus:border-white"
                                    id="portfolio"
                                    type="text"

                                />
                            </div>

                        </div>

                    </div>

                </div>
                <div className='flex flex-col gap-4 w-3/12 fixed right-8'>
                    <span className='text-[20px] text-white mt-14'>Upload your avatar</span>
                    <div className='w-[422px] h-[308px] bg-[#2F1145] rounded-[16px] items-center flex justify-center'>
                        <label className="cursor-pointer w-full h-full flex items-center justify-center">
                            {preview ? (
                                <Image
                                    src={preview}
                                    alt="Avatar Preview"
                                    width={300}  
                                    height={300} 
                                    className="w-full h-full object-cover rounded-[16px]"
                                />
                            ) : (
                                <Upload />
                            )}
                            <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
                        </label>
                    </div>
                    <div className='w-11/12 flex justify-center items-center ml-2 mt-4'>
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

            <div className='w-3/12 flex items-center justify-center mx-auto py-20'>
                <div className='flex px-8 w-full items-center justify-center py-3 bg-[#FFD000] rounded-[16px] text-black font-bold text-[20px] cursor-pointer' onClick={() => setAccountCreated(true)}>
                    Create Account
                </div>
                {/* <DefaultButton
                    addClass='w-6/12'
                    className="default-btn"
                    to={() => setAccountCreated(true)}
                >
                    Create Account
                </DefaultButton> */}
            </div>



            <BaseModal open={accountCreated}
                setOpen={setAccountCreated}
                className="top-0 bottom-0 justify-center items-center mx-auto my-auto special-index  flex xl:w-[450px] h-[300px] rounded-[16px] w-full">
                <div className='flex flex-col gap-8 w-full justify-center'>
                    <div className='text-[20px]'>Account Created Successfully</div>
                    <div className='px-2 w-8/12 justify-center items-center flex mx-auto rounded-[8px] py-4 bg-[#FFD000] cursor-pointer text-[#000] text-[16px]' onClick={() => router.push(`/creator`)}>
                        Proceed
                    </div>
                </div>
            </BaseModal>
        </div>
    )
}

export default CreatorForm