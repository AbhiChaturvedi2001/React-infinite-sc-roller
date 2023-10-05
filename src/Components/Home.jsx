import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import ImageCard from './ImageCard';


const Home = ({searchImage}) => {
    const [imageData, setImageData] = useState([]);
    const [page, setPage] = useState(1);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetchData();
        filterData();
    }, [searchImage, ImageData]);

    const fetchData = async () => {
        const data = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`);
        const json = await data.json();
        setImageData((prevData) => [...prevData, ...json]);
        setFilteredData((prevData) => [...prevData, ...json])
        setPage(page + 1);
    }
    const filterData = () => {
        const filtered = imageData.filter((item) =>
            item.author.toLowerCase().includes(searchImage.toLowerCase())
        );
        setFilteredData(filtered);
    }
    
    
    return (
        <>
            <div className='mt-[100px] '>
                <div className='text-center mt-4 mb-4'>
                    <h1 className='text-3xl font-bold font-Poppins'>Unsplash</h1>
                    <p className='mt-3 font-Poppins'>The internet’s source for visuals Powered</p>
                    <p> by creators everywhere.</p>
                </div>
                <InfiniteScroll
                    dataLength={filteredData.length}
                    next={fetchData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    <div className='grid grid-cols-3 col-span-2 row-span-2 max-lg:grid-cols-2 max-md:grid-cols-1 justify-items-center justify-center w-[80%] mx-auto gap-x-4 gap-y-5'>
                        {filteredData.map((imgItems,index) => (
                            <ImageCard key={index} imgItems={imgItems} />
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )
}

export default Home
