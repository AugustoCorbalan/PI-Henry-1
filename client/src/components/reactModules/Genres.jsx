import React from 'react';

const Genres = ({genres})=>{
    if (!genres) return <></>
    else{
        return(
            genres.map((genre)=>{
             return(
                 <li>{genre}</li>
             );
            })
        )
    }
};

export default Genres;