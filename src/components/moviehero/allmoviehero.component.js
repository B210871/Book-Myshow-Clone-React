import React from "react";


const MovieHero = () => {
    return (
        <>
            <div className="md:hidden" style={{ height: "calc(180vw)" }}>
                <img
                    src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/omg-2-et00361712-1689772587.jpg"
                    alt="poster"
                />
            </div>
            <div className="hidden md:block lg:hidden">
                <img
                    src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/omg-2-et00361712-1689772587.jpg"
                    alt="poster"
                />
            </div>
            <div className="relative hidden lg:block" style={{ height: "30rem" }}>

                <div className="absolute h-full w-full z-10 "


                    style={{ backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)"}}
            
            
            />

            <div className="absolute z-30 w-64 h-96 left-64 top-10  " >
                <img 
                src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/omg-2-et00361712-1689772587.jpg"
                alt="image"
                className="h-full w-full rounded-xl"

                />
            </div>

                <img
                    src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/omg-2-et00361712-1689772587.jpg"
                    alt="poster"
                    className="w-full h-full"
                />
            </div>
        </>
    )
}
export default MovieHero;