import React from 'react'
import pic1 from '../assets/images/jp.png'
import pic2 from '../assets/images/pic2.png'
import pic3 from '../assets/images/pic3.png'
import pic4 from '../assets/images/pic4.png'
import pic5 from '../assets/images/pic5.png'
import pic6 from '../assets/images/pic6.png'

const Websites = () => {
    return (
        <>
            <div className='max-w-[1194px] mx-auto px-3 py-28'>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='lg:w-1/2 w-full px-3' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <h2 className='font-inter font-extrabold text-[42px] sm:text-[48px] text-black lg:max-w-[445px] text-center lg:text-start leading-[48px]'>We serve over 100
                            Nigerian Websites</h2>
                        <p className='text-[18px] font-normal font-inter text-black lg:max-w-[445px] text-center lg:text-start pt-4'>Connect LemonWares with your favourite tools that you use daily and keep things on track.</p>
                    </div>
                    <div className='lg:w-1/2 w-full px-3 mt-12 lg:mt-0' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <div className='flex flex-wrap flex-row -mx-3'>
                            <div className='sm:w-1/3 w-1/2 px-3 flex items-center justify-center' data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom">
                                <div className='w-[222px] h-[112px] flex items-center justify-center duration-[.5s] hover:shadow-[0px_0px_4px_0px_#00000040] hover:scale-[1.02]' data-aos="flip-left">
                                    <img src={pic1} alt="cpanel" />
                                </div>
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3 flex items-center justify-center' data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom">
                                <div className='w-[222px] h-[112px] flex items-center justify-center duration-[.5s] hover:shadow-[0px_0px_4px_0px_#00000040] hover:scale-[1.02]' data-aos="flip-left">
                                    <img src={pic2} alt="imufy" />
                                </div>
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3 flex items-center justify-center' data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom">
                                <div className='w-[222px] h-[112px] flex items-center justify-center duration-[.5s] hover:shadow-[0px_0px_4px_0px_#00000040] hover:scale-[1.02]' data-aos="flip-left">
                                    <img src={pic3} alt="litespeed" />
                                </div>
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3 flex items-center justify-center' data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom">
                                <div className='w-[222px] h-[112px] flex items-center justify-center duration-[.5s] hover:shadow-[0px_0px_4px_0px_#00000040] hover:scale-[1.02]' data-aos="flip-left">
                                    <img src={pic4} alt="softa" className='pt-4' />
                                </div>
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3 flex items-center justify-center' data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom">
                                <div className='w-[222px] h-[112px] flex items-center justify-center duration-[.5s] hover:shadow-[0px_0px_4px_0px_#00000040] hover:scale-[1.02]' data-aos="flip-left">
                                    <img src={pic5} alt="wordpress" className='pt-4' />
                                </div>
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3 flex items-center justify-center' data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom">
                                <div className='w-[222px] h-[112px] flex items-center justify-center duration-[.5s] hover:shadow-[0px_0px_4px_0px_#00000040] hover:scale-[1.02]' data-aos="flip-left">
                                    <img src={pic6} alt="cloud" className='pt-4' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Websites