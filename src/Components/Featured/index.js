import React from 'react';
import Carrousel from './Carrousel';

const featured = () => {
    return (

        <div style={{position: "relative"}}>

            <Carrousel/>

            <div className="artist_name">

                <div className="wrapper">
                    Ariana Grande
                </div>

            </div>
            
        </div>

    );
};

export default featured;