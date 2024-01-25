import React, { useState } from 'react'


const warescards = [
    {
        heading: 'Starter',
        paraghraph: '$2.80',
    },
    {
        heading: 'Standard',
        paraghraph: '$4.20',
    },
    {
        heading: 'Suprem',
        paraghraph: '$7.00',
    }
]
const Lemonwares = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTab = (tab) => {
        setActiveTab(tab);
    };
    const list = warescards.map((warescards, m) => (
        <div className='lg:w-1/3 md:w-1/2 w-full px-3 mt-12 flex items-center justify-center lg:justify-start'>
            <div className='lg:max-w-[300px] w-[90%] rounded-[15px] border-[1.5px] border-solid border-[#c4c4c4] hover:scale-[1.01] duration-[.5s] shadow-[0px_0px_4px_0px_#00000040] p-[34px_29px_48px_35px]' data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <h3 className='text-black font-poppins text-[28px] font-semibold'>{warescards.heading}</h3>
                <p className='font-poppins text-[12px] font-normal text-black pt-2'>with all your customers via all conversation channels in one central dashboard.</p>
                <h2 className='font-poppins text-black text-[42px] font-semibold pt-4 mb-0'>{warescards.paraghraph}</h2>
                <p className='font-poppins text-[14px] text-black font-light'>Per month</p>
                {/* <button className='text-nowrap text-[14px] font-semibold font-poppins text-black rounded-[12px] border-[2px] mt-9 border-black border-solid p-[9px_60px]'>Choose this Plan</button> */}
                <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded hover:bg-white  group hover:shadow-[0px_0px_64px_0px_#B000004D] mt-9">
                    <span className="w-0 h-0 rounded-[12px] bg-[#B00000] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1 hover:!border-none"></span>
                    <span className="w-full text-[14px] font-poppins font-semibold rounded-[12px] border-[2px] text-nowrap p-[9px_60px] border-solid border-black hover:border-transparent text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                        Choose this plan
                    </span>
                </button>
                <div className='flex items-center gap-2 pt-7'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                    </svg>
                    <p className='text-[16px] font-inter font-bold text-[#808080]'>2GB SSD
                    </p>
                </div>
                <div className='flex items-center gap-2 pt-4'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                    </svg>
                    <p className='text-[16px] font-inter font-bold text-[#808080]'>10GB Bandwidth
                    </p>
                </div>
                <div className='flex items-center gap-2 pt-4'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                    </svg>
                    <p className='text-[16px] font-inter font-bold text-[#808080]'>15 Email Accounts
                    </p>
                </div>
                <div className='flex items-center gap-2 pt-4'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                    </svg>
                    <p className='text-[16px] font-inter font-bold text-[#808080]'>Unlimited Database
                    </p>
                </div>
                <div className='flex items-center gap-2 pt-4'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                    </svg>
                    <p className='text-[16px] font-inter font-bold text-[#808080]'>4 Subdomains
                    </p>
                </div>

                <div className='flex items-center gap-2 pt-4'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                    </svg>
                    <p className='text-[16px] font-inter font-bold text-[#808080]'>1 Parked Domain
                    </p>
                </div>
                <div className='flex items-center gap-2 pt-4'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                    </svg>
                    <p className='text-[16px] font-inter font-bold text-[#808080]'>2 Websites
                    </p>
                </div>

                <div className='flex items-center gap-2 pt-4'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                    </svg>
                    <p className='text-[16px] font-inter font-bold text-[#808080]'>Free SSL
                    </p>
                </div>

                <div className='flex items-center gap-2 pt-4'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99301 19.421L3.28601 12.58L4.71401 11.18L10.007 16.579L19.293 7.29303L20.707 8.70703L9.99301 19.421Z" fill="black" />
                    </svg>
                    <p className='text-[16px] font-inter font-bold text-[#808080]'>Softaculous
                    </p>
                </div>
            </div>
        </div>
    ));
    return (
        <>
            <div className='max-w-[1097px] mx-auto px-3 pb-8' data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <h2 className='font-poppins text-[40px] sm:text-[50px] font-semibold text-black text-center max-w-[650px] mx-auto'>Ready to get started with
                    Lemon Wares?</h2>
                <p className='font-poppins text-[25px] font-normal text-black text-center mx-auto pt-4'>Choose the package that suits you</p>
                <div className='flex items-center gap-5 mx-auto max-w-[440px] pt-8'>
                    <p className='font-poppins text-[25px] font-normal text-black'>Monthly</p>
                    <div className='w-[93px] h-[50px] rounded-[73px] bg-[#B00000] p-[9px] flex items-center'>
                        <div className='w-[30px] h-[30px] bg-white rounded-[50%]'></div>
                    </div>
                    <p className='font-poppins text-[25px] font-normal text-black'>Yearly</p>
                    <button className='font-poppins text-[10px] font-medium text-black rounded-[8px] bg-[#FFE87A] p-[7px_8px]'>20%  discount</button>
                </div>

                <div className='flex gap-12 mx-auto pt-12 max-w-[850px] relative after:absolute after:bottom-[-4%] after:left-[2%] after:bg-[#c4c4c4] after:w-[856px] after:h-[4px] z-0'>
                    <button onClick={() => handleTab('tab1')} className={`${activeTab === "tab1" ? " relative after:absolute after:w-[403px] after:h-[4px] after:bg-[#b00000] after:bottom-[-8%] after:left-[3%] z-[2]" : ""} text-[30px] text-black font-semibold font-poppins w-[443px]`}>Basic</button>
                    <button onClick={() => handleTab('tab2')} className={`${activeTab === "tab2" ? "after:absolute after:w-[463px] after:h-[4px] after:bg-[#b00000] after:bottom-[-5%] after:right-[-3%] z-[2]" : ""}  text-[30px] text-black font-semibold font-poppins w-[443px]`}>Premium</button>
                </div>
                {/* <h1> {activeTab} </h1> */}
                {activeTab === 'tab1' && <p className='fw-bold'>tab1 is Active</p>}
                {activeTab === 'tab2' && <p className='fw-bold'>tab2 is Active</p>}
                <div className='flex flex-wrap flex-row -mx-3 justify-center'>
                    {list}
                </div>
            </div>
        </>
    )
}

export default Lemonwares