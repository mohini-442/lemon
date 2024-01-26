import React, { useState } from 'react'
import headerimg from '../assets/images/headerimg.png'

const Headersection = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTab = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <div className='max-w-[1215px] mx-auto px-3 py-12' data-aos="fade-up">
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='lg:w-1/2 w-full px-3'>
                        <div className='flex gap-5 relative after:absolute after:w-[245px]  after:h-[1px] after:bg-[#E5E5E5] after:bottom-[-6%]  sm:after:left-[30%] md:after:left-[36%] lg:after:left-[0%] mx-auto lg:mx-0 justify-center lg:justify-start z-[0]'>
                            <button onClick={() => handleTab('tab1')} className={`${activeTab === "tab1" ? "!text-[#B00000] relative after:w-full after:h-[1px] after:absolute after:-bottom-[2px] after:left-0 after:bg-[#B00000] z-[2]" : ""} font-poppins text-[15px] font-semibold text-[#dbd9d9]`}>Hosting</button>
                            <button onClick={() => handleTab('tab2')} className={`${activeTab === "tab2" ? "!text-[#B00000] relative after:w-full after:h-[1px] after:absolute after:-bottom-[2px]  after:left-0  after:bg-[#B00000] z-[2]" : ""} font-poppins text-[15px] font-semibold text-[#dbd9d9]`}>Domain</button>
                            <button onClick={() => handleTab('tab3')} className={`${activeTab === "tab3" ? "!text-[#B00000] relative after:w-full after:h-[1px] after:absolute after:-bottom-[2px]  after:left-0  after:bg-[#B00000] z-[2]" : ""} font-poppins text-[15px] font-semibold text-[#dbd9d9]`}>SEO </button>
                            <button onClick={() => handleTab('tab4')} className={`${activeTab === "tab4" ? "!text-[#B00000] relative after:w-full after:h-[1px] after:absolute after:-bottom-[2px]  after:left-0  after:bg-[#B00000] z-[2]" : ""} font-poppins text-[15px] font-semibold text-[#dbd9d9]`}>Email</button>
                        </div>
                        {/* <h1> {activeTab} </h1> */}
                        {activeTab === 'tab1' && <p className='fw-bold'>
                            <h2 className='text-[48px] md:text-[64px] font-poppins font-bold text-[#2E2E2E] lg:max-w-[608px] leading-[77.5px] text-center lg:text-start pt-4'>Premium Web Hosting for Your Website</h2>
                            <p className=' font-inter text-[#808080] text-[16px] font-normal lg:max-w-[408px] pt-10 text-center lg:text-start'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                            <div className=' flex gap-5 pt-14 justify-center lg:justify-start'>
                                <button className="relative overflow-hidden font-poppins rounded-[8px] p-[12px] border-[1px] text-[14px] font-normal w-[160px] text-white bg-[#b00000] transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-white before:duration-300 before:ease-out hover:text-[#000] hover:border-[1px] hover:border-[#000] hover:border-solid shadow-[0px_0px_64px_0px_#B000004D] hover:before:h-[68px] hover:before:bg-[#fff] hover:before:w-[160px]">
                                    <span className="relative z-10 text-nowrap">Create an Account</span>
                                </button>
                                <button className="relative overflow-hidden font-poppins rounded-[8px] p-[12px] border-[1px] border-solid hover:border-transparent border-black text-[14px] font-normal w-[160px] text-black  transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-white before:duration-300 before:ease-out hover:shadow-[0px_0px_64px_0px_#B000004D] hover:text-[#fff] hover:before:h-[68px] hover:before:bg-[#b00000] hover:before:w-[160px]">
                                    <span className="relative z-10 text-nowrap">Choose your plan</span>
                                </button>
                            </div>
                        </p>}
                        {activeTab === 'tab2' && <p className='fw-bold'>
                            <h2 className='text-[50px] md:text-[64px] font-poppins font-bold text-[#2E2E2E] lg:max-w-[608px] leading-[77.5px] text-center lg:text-start pt-4'>Premium Web Domain for Your Website</h2>
                            <p className=' font-inter text-[#808080] text-[16px] font-normal lg:max-w-[408px] pt-10 text-center lg:text-start'>LemonWares saved our time in  Hosting my company page.</p>
                            <div className=' flex gap-5 pt-14 justify-center lg:justify-start'>
                                <button className='text-white text-[14px] font-normal font-poppins p-[12px] rounded-[8px] bg-[#B00000] shadow-[0px_0px_64px_0px_#B000004D]'>Create an Account</button>
                                <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white  group hover:shadow-[0px_0px_64px_0px_#B000004D]">
                                    <span className="w-0 h-0 rounded-[8px] bg-[#B00000] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1 hover:!border-none"></span>
                                    <span className="w-full p-[12px] text-[14px] font-poppins font-normal rounded-[8px] border-[1px] border-solid border-black hover:border-transparent text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                        Choose your plan
                                    </span>
                                </button>
                            </div>
                        </p>}
                        {activeTab === 'tab3' && <p className='fw-bold'>
                            <h2 className='text-[50px] md:text-[64px] font-poppins font-bold text-[#2E2E2E] lg:max-w-[608px] leading-[77.5px] text-center lg:text-start pt-4'>Premium Web SEO for Your Website</h2>
                            <p className=' font-inter text-[#808080] text-[16px] font-normal lg:max-w-[408px] pt-10 text-center lg:text-start'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                            <div className=' flex gap-5 pt-14 justify-center lg:justify-start'>
                                <button className='text-white text-[14px] font-normal font-poppins p-[12px] rounded-[8px] bg-[#B00000] shadow-[0px_0px_64px_0px_#B000004D]'>Create an Account</button>
                                <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white  group hover:shadow-[0px_0px_64px_0px_#B000004D]">
                                    <span className="w-0 h-0 rounded-[8px] bg-[#B00000] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1 hover:!border-none"></span>
                                    <span className="w-full p-[12px] text-[14px] font-poppins font-normal rounded-[8px] border-[1px] border-solid border-black hover:border-transparent text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                        Choose your plan
                                    </span>
                                </button>
                            </div>
                        </p>}
                        {activeTab === 'tab4' && <p className='fw-bold'>
                            <h2 className='text-[50px] md:text-[64px] font-poppins font-bold text-[#2E2E2E] lg:max-w-[608px] leading-[77.5px] text-center lg:text-start pt-4'>Premium Web Hosting for Your Website</h2>
                            <p className=' font-inter text-[#808080] text-[16px] font-normal lg:max-w-[408px] pt-10 text-center lg:text-start'>Blazing fast emil for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                            <div className=' flex gap-5 pt-14 justify-center lg:justify-start'>
                                <button className='text-white text-[14px] font-normal font-poppins p-[12px] rounded-[8px] bg-[#B00000] shadow-[0px_0px_64px_0px_#B000004D]'>Create an Account</button>
                                <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white  group hover:shadow-[0px_0px_64px_0px_#B000004D]">
                                    <span className="w-0 h-0 rounded-[8px] bg-[#B00000] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1 hover:!border-none"></span>
                                    <span className="w-full p-[12px] text-[14px] font-poppins font-normal rounded-[8px] border-[1px] border-solid border-black hover:border-transparent text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                        Choose your plan
                                    </span>
                                </button>
                            </div>
                        </p>}
                    </div>
                    <div className='lg:w-1/2 w-full px-3 pt-16 lg:pt-0 flex items-center justify-center'>
                        <img src={headerimg} alt="headerimg" className='w-[90%] lg:w-[80%]' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Headersection