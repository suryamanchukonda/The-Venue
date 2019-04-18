import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';

const featured = () => {
    return (

        <div style={{position: "relative"}}>

            <Carrousel/>

            <div className="artist_name">

                <div className="wrapper">
                    Ariana Grande
                </div>

            </div>

            <TimeUntil/>
            
        </div>

    );
};

export default featured;