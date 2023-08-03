import React from "react"
import { BsSearch,BsChevronDown } from "react-icons/bs"
import { BiChevronLeft, BiShareAlt,BiMenu } from "react-icons/bi"
const NavSm = () => {
    return (
        <>

            <div className="text-white flex items-center justify-between">
                <div>
                <div className="flex gap-2">

                    <BiChevronLeft className="w-8 h-8 inset-x-0" />
             

                    <h3 className="text-xl font-bold">OMG 2</h3>
                </div>
                  
                </div>
                <div className="w-8 h-8">
                    <BiShareAlt className="w-full h-full" />
                </div>
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
                        Bhuvneshavar<BsChevronDown />
                    </span>

                    <button className="bg-red-600 text-white text-sm rounded px-2 py-1">Sign In</button>
                    <div className="text-white w-8 h-8 hover:cursor-pointer"><BiMenu className="w-full h-full"/></div>

                </div>

            </div>
        </>
    )
};

const MovieNavbar = () => {
    return (
        <>
            <nav className=" absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative bg-navCol-100 px-4 py-2">
                <div className="md:hidden">{

                    <NavSm />

                }

                </div>
                <div className="hidden lg:hidden md:block">

                    <NavSm />
                </div>
                <div className="hidden lg:flex">

                    <NavLg />
                </div>


            </nav>

        </>
    )
};

export default MovieNavbar;