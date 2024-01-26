import React from 'react'
import clock from '../assets/images/clock.svg'
import hosting from '../assets/images/hosting.svg'
import ssl from '../assets/images/ssl.svg'
import support from '../assets/images/support.png'

const card1 = [
    {
        svg: clock,
        heading: '99.9% Uptime',
        paragraph: 'We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.'
    },
    {
        svg: hosting,
        heading: 'Blazing Fast Web Hosting',
        paragraph: 'We Keep Your Web build Online 24x7x365.Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.'
    },
    {
        svg: ssl,
        heading: 'Free SSL Certificates',
        paragraph: 'We Keep Your Web build Online 24x7x365.Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.'
    },
    {
        svg: support,
        heading: '24x7 Friendly Support',
        paragraph: 'We Keep Your Web build Online 24x7x365.Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.'
    }
]

const Mapsec = () => {
    const list = card1.map((card1, m) => (
        <div className='lg:w-1/4 md:w-1/2 sm:w-1/2 w-full px-3 '>
            <div className='flex justify-center items-center flex-col max-w-[300px] h-[300px] hover:scale-[1.01] rounded-[40px] duration-[.5s] hover:shadow-[0px_0px_4px_0px_#00000040] mx-auto p-[12px]' data-aos="zoom-in-up">
                <div className='w-[100px] h-[100px] bg-[#f3d9d9] rounded-[50%]'>
                    <img src={card1.svg} alt="svg" className='mx-auto' />
                </div>
                <h2 className='text-black font-poppins text-[20px] font-bold text-center pt-4'>{card1.heading}</h2>
                <p className=' font-poppins text-black font-light text-[12px] max-w-[252px] mx-auto text-center pt-2'>{card1.paragraph}</p>

            </div>
        </div>
    ));
    return (
        <>
            <div className='max-w-[1284px] mx-auto px-3 py-8'>
                <div className='flex flex-wrap flex-row -mx-3 justify-center pb-12'>
                    {list}
                </div>
            </div>
        </>
    )
}

export default Mapsec