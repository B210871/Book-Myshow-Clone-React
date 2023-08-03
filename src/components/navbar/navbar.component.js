import React from "react"
import { BsSearch,BsChevronDown } from "react-icons/bs"
import {BiChevronRight,  BiMenu } from "react-icons/bi"
const NavSm = () => {
    return (
        <>

            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">It All Starts Here!</h3>
                    <span className="text-gray-400 text-xs flex items-center">
                        Jaipur<BiChevronRight />
                    </span>
                </div>
                <div className="w-8 h-8">
                    <BsSearch className="w-full h-full" />
                </div>
            </div>
        </>
    )
};
const NavMd = () => {
    return (

        <>
            <div className="w-full  flex items-center bg-white gp-3 px-3 py-2 rounded-md">
                <BsSearch />
                <input type="search" className="w-full focus:outline-none " placeholder="Search for movies,events,plays and tvs"></input>
            </div>

        </>
    )
};
const NavLg = () => {

    return (
        <>
            <div className="container mx-auto px-4 flex items-center justify-between ">
                <div className="flex items-center w-1/2">
                    <div className="w-15 h-16">
                        < img src="https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/e-commerce-companies/bookmyshow-logo.png" alt="logo" className="w-full h-full" />
                    </div>
                    <div className="w-full  flex items-center bg-white gp-3 px-3 py-2 rounded-md">
                        <BsSearch />
                        <input type="search" className="w-full focus:outline-none " placeholder="Search for movies,events,plays and tvs"></input>
                    </div>
                    </div>

                    <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-xs flex items-center hover:text-white hover:cursor-pointer">
                        Jaipur<BsChevronDown />
                    </span>

                    <button className="bg-red-600 text-white text-sm rounded px-2 py-1">Sign In</button>
                    <div className="text-white w-8 h-8 hover:cursor-pointer"><BiMenu className="w-full h-full"/></div>

                </div>

            </div>
        </>
    )
};

const Navbar = () => {
    return (
        <>
            <nav className="bg-navCol-900 px-4 py-2">
                <div className="md:hidden">{

                    <NavSm />

                }

                </div>
                <div className="hidden lg:hidden md:flex">

                    <NavMd />
                </div>
                <div className="hidden lg:flex">

                    <NavLg />
                </div>


            </nav>

        </>
    )
};

export default Navbar;