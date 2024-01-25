import React from 'react'
import cpanel from '../assets/images/cpanel.png'
import imufy from '../assets/images/imunify.png'
import lite from '../assets/images/litespeed.png'
import softa from '../assets/images/softa.png'
import wordpress from '../assets/images/wordpress.png'
import cloud from '../assets/images/cloudflare.png'

const Webhosting = () => {
    return (
        <>
            <div className='max-w-[1284px] mx-auto px-3 py-12'>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='lg:w-1/2 w-full px-3' data-aos="fade-up">
                        <h2 className='text-grey-900 font-inter text-[38px] sm:text-[48px] font-extrabold text-center lg:text-start' data-aos="fade-up">True Cloud Web  Hosting</h2>
                        <p className=' font-inter text-grey-900 text-[18px] font-normal lg:max-w-[573px] pt-4 text-center lg:text-start mx-auto lg:mx-0' data-aos="fade-up">
                            True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.</p>
                    </div>
                    <div className='lg:w-1/2 w-full px-3 mt-12 lg:mt-0'>
                        <div className='flex flex-wrap flex-row -mx-3'>
                            <div className='sm:w-1/3 w-1/2 px-3 flex items-center justify-center'>
                                <div className='w-[222px] h-[112px] flex items-center justify-center duration-[.5s] hover:shadow-[0px_0px_4px_0px_#00000040]' data-aos="flip-left">
                                    <img src={cpanel} alt="cpanel" />
                                </div>
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3 flex items-center justify-center'>
                                <div className='w-[222px] h-[112px] flex items-center justify-center duration-[.5s] hover:shadow-[0px_0px_4px_0px_#00000040]' data-aos="flip-left">
                                    <img src={imufy} alt="imufy" />
                                </div>
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3 flex items-center justify-center'>
                                <div className='w-[222px] h-[112px] flex items-center justify-center duration-[.5s] hover:shadow-[0px_0px_4px_0px_#00000040]' data-aos="flip-left">
                                    <img src={lite} alt="litespeed" />
                                </div>
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3 flex items-center justify-center'>
                                <div className='w-[222px] h-[112px] flex items-center justify-center duration-[.5s] hover:shadow-[0px_0px_4px_0px_#00000040]' data-aos="flip-left">
                                    <img src={softa} alt="softa" />
                                </div>
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3 flex items-center justify-center'>
                                <div className='w-[222px] h-[112px] flex items-center justify-center duration-[.5s] hover:shadow-[0px_0px_4px_0px_#00000040]' data-aos="flip-left">
                                    <img src={wordpress} alt="wordpress" />
                                </div>
                            </div>
                            <div className='sm:w-1/3 w-1/2 px-3 flex items-center justify-center'>
                                <div className='w-[222px] h-[112px] flex items-center justify-center hover:shadow-[0px_0px_4px_0px_#00000040]' data-aos="flip-left">
                                    <img src={cloud} alt="cloud" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Webhosting