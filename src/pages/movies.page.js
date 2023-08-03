import React from "react";

import { BiCameraMovie } from "react-icons/bi"

import MovieHero from "../components/moviehero/allmoviehero.component";


const launchRazorPay =() => {
    let options ={
        key:"rzp_test_RiABoITTu6bYQa",
        amount: 500*100,
        currency: "INR",
        name:"Book My Show Clone",
        description:"Movie Purchase on Rental",
        image:"https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-andriod-ticket-png.png",
        handler: ()=>{
            alert("Payment Done")
        },
        theme:{color:"#c4242d"}
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
}

const Movie = () => {
    return (
        <>
            <MovieHero />
            <div className="my-12 container mx-auto px-4 lg:w-2/3 lg:ml-64 ">
                <div className="flex flex-col gap-2 items-start">
                    <h2 className="text-2xl font-bold text-gray-800">About The Movie</h2>
                    <p>Life was bliss until one day Kanti Sharan Mudgal`s son Vivek is blamed for immoral conduct and expelled from school. Overwhelmed, Kanti plans to leave town until a divine intervention leads him to seek justice by taking those responsible to court.</p>
                </div>
                <div className="my-8">
                    <hr></hr>
                </div>

                <div>
                    <h1 className="text-2xl text-gray-800 font-bold">Applicable Offers</h1>

                    <div className="flex gap-2 my-5 bg-yellow-100 border-2 w-96 border-yellow-400 border-dashed rounded-md p-3">
                        <div className="w-8 h-8">
                            <BiCameraMovie className="w-full h-full" />

                        </div>
                        <div className="flex items-start flex-col" >
                            <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
                            <p className="text-gray-600 text-sm">Get Rs.75 off on 3 movies you buy/rent on Stream. Buy Filmy pass @Rs.99</p>
                        </div>

                    </div>
                </div>

            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mt-4" onClick={launchRazorPay} >Book Tickets</button>
            </div>
        </>
    )
}
export default Movie;