import React, { useEffect, useState } from "react";
import logo from '../assets/images/logo.png'

const Loader = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 3500);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "initial";
        }
    }
    return (
        <div>
            {loder ? (
                <section
                    style={{ zIndex: "999999999" }}
                    className="bg-white top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
                >
                    <div className="preloader flex flex-col justify-center items-center h-screen">
                        <img src={logo} alt="logo" className="zoom-in-out-box" />
                        <p className=" text-black font-roboto sm:text-[23px] font-poppins text-xl font-bold pt-6 zoom-in-out-box">Lemon Wares</p>
                    </div>
                </section>
            ) : (
                ""
            )}
        </div>
    )
}

export default Loader