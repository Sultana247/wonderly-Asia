import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full h-250">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                src="https://i.ibb.co.com/TDNkczKS/banner.jpg"
                className="w-full " />
                
                    <div className='absolute flex flex-col justify-center items-center text-white w-full h-full  '>
                    <h3 className='md:text-[56px] text-xl font-extrabold mb-15'>Discover the Soul of Asia</h3>
                    <p className='text-[16px] mb-10'>From golden beaches to ancient temples, WanderlyAsia helps you explore South Asia’s most breathtaking 
                        <br />
                        destinations one unforgettable journey at a time.</p>
                        <button className='text-lg font-bold bg-orange-400 rounded-lg p-3 hover:border hover:border-white hover:bg-transparent'>Learn More</button>
                </div>
                
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                src="https://i.ibb.co.com/s9vmgtrD/banner2.jpg"
                className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                src="https://i.ibb.co.com/8LrR7gZD/banner3.jpg"
                className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                src="https://i.ibb.co.com/ns4WGdn5/banner4.jpg"
                className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;