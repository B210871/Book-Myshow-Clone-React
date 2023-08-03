import React from "react";

export const NextArrow = (props) => {
    //const {className,style,onClick} = props

    return (
        <>

            <div

className={props.className}
style={{ ...props.style, backgroundColor: "#525050" , padding:"30px" , display:"flex" ,justifyContent:"center",alignItems:"center",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px" ,marginRight:"-50px"}}
                onClick={props.onClick}
            />



        </>
    )

};
export const PrevArrow = (props) => {
    return (
        <>

            <div 

                className={props.className}
                style={{ ...props.style, backgroundColor: "#525050", padding:"30px" , display:"flex" ,justifyContent:"center",alignItems:"center",borderTopRightRadius:"10px",borderBottomRightRadius:"10px" ,marginLeft:"-50px"}}
                onClick={props.onClick}
                />



        </>
    )
    
};

