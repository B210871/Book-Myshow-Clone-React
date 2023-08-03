import React,{useState,useEffect} from "react";
import axios from "axios";

import EnterainmentCardSlider from "../components/entertainment/entertainment.component";
//import  Premier from "../components/premier/preimer.component";
import PosterSlider from "../components/posterSlider/posterSlider.component";

import TempPosters from "../config/tempposter.config";

const HomePage = ()=> {

     const [popularMovies,setPopularMovies]=useState([]);

     useEffect(()=>{
        const requestPopularMovies = async () =>{
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
     },[]);


    //  const [popularMovie,setPopularMovie]=useState([]);

    //  useEffect(()=>{
    //     const requestPopularMovie = async () =>{
    //         const getPopularMovie = await axios.get(" /3/discover/movie");
    //         setPopularMovie(getPopularMovie.data.results);
    //     };
    //     requestPopularMovie();
    //  },[]);

     console.log({popularMovies});

    return (
        <>
       <div className="flex flex-col gap-10">
       <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-gray-800"> The Best of Entertainment</h1>
        <EnterainmentCardSlider />
        </div>
        

        <div className="bg-navCol-200 py-16">
           
            <div className="container mx-auto px-4">
            <div className="flex">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="Rupay" className="w-full h-full" />

            </div>
        <PosterSlider images={popularMovies} title="Premiers" subtitle="Brand New Released Every Friday" isDark />
            </div>
        </div>
       </div>
       <div className="container mx-auto px-4">
        <PosterSlider 
        images={popularMovies}
        title="Online Streaming Events"
        isDark={false}
        />
       </div>
       <div className="container mx-auto px-4">
        <PosterSlider 
        images={popularMovies}
        title="Outdoor Events"
        isDark={false}
        />
       </div>
        </>
    )
}


export default HomePage;