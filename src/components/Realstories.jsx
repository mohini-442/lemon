import React from 'react'
import colon from '../assets/images/colon.png'
import cli from '../assets/images/cli.png'
import skoma from '../assets/images/skoma.png'
import jpnl from '../assets/images/jpnl.png'
import leevon from '../assets/images/leeve.png'

const Realstories = () => {
    return (
        <>
            <div className='max-w-[960px] mx-auto px-3 pt-28'>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='lg:w-1/2 w-full px-3 flex flex-col lg:items-end items-center' data-aos="zoom-in-right">
                        <div className='relative z-2'>
                            <img src={colon} alt="colon" className='absolute top-[-32%] lg:left-[-21%] left-0 z-[-1] ' />
                            <h2 className=' font-inter text-[42px] sm:text-[48px] font-extrabold text-[#18191F] text-center lg:text-start leading-[50px] sm:leading-[58px]'>Real Stories from Real Customers</h2>
                            <p className='font-inter text-[18px] font-normal text-[#18191F] text-center lg:text-start'>Get inspired by these stories.</p>
                        </div>
                        <div className='rounded-[8px] shadow-[0px_10px_20px_0px_#29292A12] lg:p-[7px_32px_96px_64px] p-[7px_32px_46px_64px] w-full lg:max-w-[350px] mt-8 relative hover:scale-[1.01] duration-[.5s]' data-aos="zoom-in-right">
                            <img src={skoma} alt="skoma" className='absolute top-[25%] left-[8%]' />
                            <img src={cli} alt="cli" />
                            <p className='font-inter text-[16px] font-normal text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                            <h2 className='font-inter text-[18px] font-bold text-[#18191F] pt-4'>Floyd Miles</h2>
                            <p className='font-inter text-[14px] font-medium text-[#969BAB]'>Vice President, CLI</p>
                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full px-3 lg:pt-8 flex items-center lg:items-start flex-col' data-aos="zoom-in-left">
                        <div className='rounded-[8px] shadow-[0px_10px_20px_0px_#29292A12] p-[39px_32px_0px_64px] w-full pb-12 lg:pb-3.5 lg:max-w-[445px] mt-12 relative hover:scale-[1.01] duration-[.5s]' data-aos="zoom-in-left">
                            <img src={skoma} alt="skoma" className='absolute top-[34%] left-[8%]' />
                            <img src={jpnl} alt="cli" />
                            <p className='font-inter text-[16px] font-normal text-black pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                            <h2 className='font-inter text-[18px] font-bold text-[#18191F] pt-4'>CEO, JPNL</h2>
                            <p className='font-inter text-[14px] font-medium text-[#969BAB]'>CEO, JPNL</p>
                        </div>
                        <div className='rounded-[8px] shadow-[0px_10px_20px_0px_#29292A12] p-[41px_32px_32px_64px] w-full lg:max-w-[350px] mt-8 relative hover:scale-[1.02] duration-[.5s]' data-aos="zoom-in-left">
                            <img src={skoma} alt="skoma" className='absolute top-[34%] left-[8%]' />
                            <img src={leevon} alt="cli" />
                            <p className='font-inter text-[16px] font-normal text-black pt-3'>LemonWares saved our time in Hosting my company page.</p>
                            <h2 className='font-inter text-[18px] font-bold text-[#18191F] pt-4'>Kristin Watson</h2>
                            <p className='font-inter text-[14px] font-medium text-[#969BAB] pb-6 lg:pb-0'>Co-Founder, LeeveOn Branding</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Realstories