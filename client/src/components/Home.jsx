import React from "react";
import Cards from "./Cards.jsx";
import Nav from "./Nav_bar";
import styles from "./Home.module.css";
import { useParams } from "react-router-dom";


const Home=({props})=>{
    const {genre}=useParams();
    return(
        <>
            <div className={styles.container}>
                <Nav/>
                <Cards genre={genre}/>
            </div>
        </>
    );
};


export default Home;
