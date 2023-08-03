import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import axios from "axios";



import { NextArrow, PrevArrow } from "./arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const HeroCarousal = () => {




    const [images, setImage] = useState([]);

    useEffect(() => {
        const requestNowPlayMovies = async () => {
            const getImages = await axios.get("/movie/now_playing");
            setImage(getImages.data.results);
        };
        requestNowPlayMovies();
    }, []);


    console.log({images});




    const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        centerPadding: "300px",
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />

    }
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    // const images = [
    //     "https://plus.unsplash.com/premium_photo-1689841977056-ad2539873c9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60",
    //     "https://images.unsplash.com/photo-1682685797229-b2930538da47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60",
    //     "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    //     "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //     "https://images.unsplash.com/photo-1690484814049-2ab2002b0dea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    // ]

    return (
        <>


            <div className="lg:hidden">



                <HeroSlider {...settings} >
                    {
                        images.map((image) => (
                            <div className="w-full h-64md:h-80 py-3">
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                    alt="testing" className="w-full h-full rounded-md" />
                            </div>
                        ))
                    }
                </HeroSlider>


            </div>






            <div className="hidden lg:block">



                <HeroSlider {...settingsLg} >
                    {
                        images.map((image) => (
                            <div className="w-full  h-96 px-2 py-3">
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-md" />
                            </div>
                        ))
                    }
                </HeroSlider>

            </div>










        </>
    )
}


export default HeroCarousal;