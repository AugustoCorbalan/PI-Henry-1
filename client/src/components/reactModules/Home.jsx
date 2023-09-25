import React from "react";
import Cards from "./Cards.jsx";
import Nav from "./Nav_bar";
import styles from "../cssModules/Home.module.css";
import { useParams } from "react-router-dom";


const Home=({location})=>{
    const {genre}=useParams();
    const order= location.search;
    
    return(
        <>
            <div className={styles.container}>
                <Nav/>
                <Cards genre={genre} order={order}/>
            </div>
        </>
    );
};


export default Home;
