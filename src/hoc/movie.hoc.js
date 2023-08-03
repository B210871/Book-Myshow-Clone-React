// transforns components into another component
// Adding aditional functionalities to the existing components


import React from "react"

import {  Route } from "react-router-dom";


import MovieLayout from "../layouts/movie.layout";

const MovieHoc = ({ component: Component, ...rest }) => {

    //component
    //props => path exact
    return (
        <>
                <Route
                    {...rest}

                    component={(props) => (
                        <MovieLayout>
                            <Component {...props} />
                        </MovieLayout>
                    )}

                />
           
        </>
    )
}
export default MovieHoc;