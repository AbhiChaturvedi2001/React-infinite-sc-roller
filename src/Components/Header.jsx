import React,{useState} from 'react'
import { HiMiniBars3BottomRight } from "react-icons/hi2";

const Header = ({searchImage, setSearchImage}) => {
    return (
        <>
            <nav className='flex justify-between px-10 top-0 fixed w-full items-center min-h-[10vh]'>
                <img className='w-[60px]' src="https://seeklogo.com/images/U/unsplash-logo-50F0DCF9BD-seeklogo.com.png" alt="" />
                <div>
                    <input value={searchImage} onChange={(e) => setSearchImage(e.target.value)} className='w-[500px]  max-md:w-[450px] max-sm:w-[150px] py-2 rounded-full  placeholder  bg-gray-200 ' type="text" placeholder=' author-name' />
                </div>
                <HiMiniBars3BottomRight className='text-3xl cursor-pointer' />
            </nav>
        </>
    )
}

export default Header