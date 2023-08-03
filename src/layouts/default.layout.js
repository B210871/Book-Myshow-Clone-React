import React from "react" ;


//Components

import Navbar from "../components/navbar/navbar.component"
import HeroCarousal from "../components/herocarousal/herocarousal.component";
const DefaultLayout = (props) => {
    return (
        <>
            <Navbar />
            <HeroCarousal />
            {props.children}
        </>
    );
};

export default DefaultLayout;