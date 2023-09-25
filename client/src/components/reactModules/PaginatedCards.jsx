import React from "react";
import { useState } from "react";
import Card from "./Card";
import styles from "../cssModules/PaginatedCards.module.css"


const PaginatedCards= (props)=>{
    const [limit, setLimit] = useState(0);
    

    const anterior= ()=>{
        if(limit>0){
            setLimit(limit-15);
        }
    };

    const siguiente= ()=>{
        if( limit < (props.videogames.length-15) ){
            setLimit(limit+15);
        }
    };
    
    const videogames = props.videogames.slice(limit, limit+15);

    return(
        <>
            <div className={styles.container_cards}>
                {videogames.map((videogame)=>{
                            return <Card id= {videogame.id} name={videogame.name} img={videogame.img} genres={videogame.genres}/>
                        })}
            </div>
            <div className={styles.container_button}>
                <button onClick={anterior} className={styles.button}>Anterior</button>
                <button onClick={siguiente} className={styles.button}>Siguiente</button>
            </div>
        </>
    )
}



export default PaginatedCards;