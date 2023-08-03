// transforns components into another component
// Adding aditional functionalities to the existing components


import React from "react"

import {  Route } from "react-router-dom";

import DefaultLayout from "../layouts/default.layout"

const DefaultHoc = ({ component: Component, ...rest }) => {

    //component
    //props => path exact
    return (
        <>
          
                <Route
                    {...rest}

                    component={(props) => (
                        <DefaultLayout>
                            <Component {...props} />
                        </DefaultLayout>
                    )}


                />


           
        </>
    )
}
export default DefaultHoc;