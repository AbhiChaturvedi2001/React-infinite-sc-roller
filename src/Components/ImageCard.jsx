import React from 'react'
import { ImageBaseUrl } from '../Constants';

const ImageCard = ({ imgItems }) => {
    const { id, author, download_url, } = imgItems;

    return (
        <>
            <div className='bg-white shadow-xl px-4 py-4 rounded-md'>
                <img src={download_url} className=' w-[400px] h-[300px] ' alt="Your connection is slow......." />
                <p className='mt-3'>{author}</p>
            </div>
        </>
    )
}

export default ImageCard