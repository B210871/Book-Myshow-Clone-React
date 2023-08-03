import React from "react";

import Poster from "../components/poster/poster.component";
import PlaysFilter from "../components/playsfilters/playsfliter.component";

const Plays =() => {
    return(
        <>
        <div className="container mx-auto px-4">
            <div className="w-full lg:flex lg:flex-row-reverse">
                <div className="lg:w-8/12">
                <h2 className="text-2xl mb-4 font-bold">Plays In Bhubaneswar</h2>
                <div className="flex flex-wrap">
                    <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
                    <Poster 
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365815-bsbqpjwyye-portrait.jpg"
                    title="ONLINE HORROR STORY-TELLING....."
                    subtitle="Watch on Zoom."
                    />
                     </div>
                    <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
                    <Poster 
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365815-bsbqpjwyye-portrait.jpg"
                    title="ONLINE HORROR STORY-TELLING....."
                    subtitle="Watch on Zoom."
                    />
                     </div>
                    <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
                    <Poster 
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365815-bsbqpjwyye-portrait.jpg"
                    title="ONLINE HORROR STORY-TELLING....."
                    subtitle="Watch on Zoom."
                    />
                     </div>
                    <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
                    <Poster 
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365815-bsbqpjwyye-portrait.jpg"
                    title="ONLINE HORROR STORY-TELLING....."
                    subtitle="Watch on Zoom."
                    />
                     </div>
                    <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
                    <Poster 
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365815-bsbqpjwyye-portrait.jpg"
                    title="ONLINE HORROR STORY-TELLING....."
                    subtitle="Watch on Zoom."
                    />
                     </div>
                    <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
                    <Poster 
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365815-bsbqpjwyye-portrait.jpg"
                    title="ONLINE HORROR STORY-TELLING....."
                    subtitle="Watch on Zoom."
                    />
                     </div>
                    <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
                    <Poster 
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365815-bsbqpjwyye-portrait.jpg"
                    title="ONLINE HORROR STORY-TELLING....."
                    subtitle="Watch on Zoom."
                    />
                     </div>
                    <div className="w-1/2 md:w-1/3 lg:w-1/4 my-3">
                    <Poster 
                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00365815-bsbqpjwyye-portrait.jpg"
                    title="ONLINE HORROR STORY-TELLING....."
                    subtitle="Watch on Zoom."
                    />
                     </div>
                    
                   
                   
                </div>
            </div>
            <div className="lg:w-1/4">
            <h2 className="text-2xl font-bold mb-10">Filter</h2>
            <div className="mt-15 p-3 bg-gray-100">
            <PlaysFilter  title="Date" tags={["Today","Tomorrow","This Weekend"]} />
            <PlaysFilter  title="Language" tags={["Hindi","English","Tamil"]}/>
            <PlaysFilter  title="Categories" tags={["Theater"]}/>
            <PlaysFilter  title="Genres" tags={["Horror"]}/>
            <PlaysFilter  title="More Filters" tags={["Online Streaming"]}/>
            <PlaysFilter  title="price" tags={["Frea","0-500","501-2000","Above 2000"]}/>
            

            </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Plays;