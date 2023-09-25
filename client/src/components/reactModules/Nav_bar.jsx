import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchName } from '../../Redux/actions'
import { NavLink, useLocation } from "react-router-dom";
import styles from '../cssModules/nav_bar.module.css';


const NavBar = (props)=>{
    
    const dispatch= useDispatch();
    const noneVisibiliy= styles.links;
    const url= useLocation().pathname;

    const [visibilityMenu1, setVisibility1] = useState(noneVisibiliy);
    const [visibilityMenu2, setVisibility2] = useState(noneVisibiliy);
    const [visibilityMenu3, setVisibility3] = useState(noneVisibiliy);
    const [visibilityMenu4, setVisibility4] = useState(noneVisibiliy);
    const [visibilityMenu5, setVisibility5] = useState(noneVisibiliy);
    const [visibilityMenu6, setVisibility6] = useState(noneVisibiliy);
    const [videogameName, setvideogameName] = useState("");
    
    const buscar= (name)=>{
        dispatch(searchName(name));
    } 
    
    const displayMenuFilters=(menu)=>{
        
        if(menu == "submenu"){
            if(visibilityMenu1 == noneVisibiliy && visibilityMenu2 == noneVisibiliy && visibilityMenu3 == noneVisibiliy){
                setVisibility1(styles.linksVisible);
            }
            else if(visibilityMenu1 == noneVisibiliy && (visibilityMenu2 != noneVisibiliy || visibilityMenu3 != noneVisibiliy)){
                setVisibility1(styles.linksVisible);
                setVisibility2(noneVisibiliy);
                setVisibility3(noneVisibiliy);
            }
            else{
                setVisibility1(noneVisibiliy);
                setVisibility2(noneVisibiliy);
                setVisibility3(noneVisibiliy);
            }
        }else if (menu == "genre"){
                setVisibility1(noneVisibiliy);
                setVisibility2(styles.linksVisible);
           
        }else if (menu == "origin"){    
                setVisibility1(noneVisibiliy);
                setVisibility3(styles.linksVisible);
        }   
    }

    const displayMenuOrder=(menu)=>{
        
        if(menu == "submenu"){
            if(visibilityMenu4 == noneVisibiliy && visibilityMenu5 == noneVisibiliy && visibilityMenu6 == noneVisibiliy){
                setVisibility4(styles.linksVisible);
            }else{
                setVisibility4(noneVisibiliy);
                setVisibility5(noneVisibiliy);
                setVisibility6(noneVisibiliy);
            }
        }else if (menu == "alfabet"){
                setVisibility4(noneVisibiliy);
                setVisibility5(styles.linksVisible);
           
        }else if (menu == "rating"){    
                setVisibility4(noneVisibiliy);
                setVisibility6(styles.linksVisible);
        }   
    }

    return(
        <>
            <nav className={styles.nav}>
                <div className={styles.div1}>
                <div className={styles.desplegable}>
                        <button className={styles.button_order} onClick={()=>displayMenuOrder("submenu")}>Ordenar</button>
                        <div  className={visibilityMenu4}>
                            <button onClick={()=>displayMenuOrder("alfabet")}> Alfabet. </button>
                            <button onClick={()=>displayMenuOrder("rating")}> Rating </button>
                        </div>
                        <div className={visibilityMenu5}>
                            <a href={`${url}?alf&asc`}>Ascendente</a>
                            <a href={`${url}?alf&des`}>Descendente</a>
                        </div>
                        <div className={visibilityMenu6}>
                            <a href={`${url}?rating&asc`}>Ascendente</a>
                            <a href={`${url}?rating&des`}>Descendente</a>
                        </div>
                    </div>
                </div>

                <div className={styles.div2}>
                    <form className={styles.form}>
                        <input type="text" placeholder="Buscar.." onChange={({target})=>setvideogameName(target.value)} className={styles.input}></input>
                        <input type="button" value="Buscar" onClick={()=>buscar(videogameName)} className={styles.button_search}></input>
                    </form>
                </div>

                <div className={styles.div3}>
                    <div className={styles.div3_1}>
                        <NavLink to='/create' className={styles.button_create}>Crear</NavLink>
                    </div>

                    <div className={styles.div3_2}>

                    <div className={styles.desplegable}>
                        <button className={styles.button_filter} onClick={()=>displayMenuFilters("submenu")}>Filtros</button>
                        <div  className={visibilityMenu1}>
                            <button onClick={()=>displayMenuFilters("genre")}> Genero </button>
                            <button onClick={()=>displayMenuFilters("origin")}> Origen </button>
                        </div>
                        <div className={visibilityMenu2}>
                            <a href="/videogames/all">All</a>
                            <a href="/videogames/Shooter">Shooter</a>
                            <a href="/videogames/Puzzle">Puzzle</a>
                            <a href="/videogames/Action">Action</a>
                            <a href="/videogames/Adventure">Adventure</a>
                            <a href="/videogames/RPG">RPG</a>
                            <a href="/videogames/Platformer">Platformer</a>
                        </div>
                        <div className={visibilityMenu3}>
                            <a href="/videogames/all"> All </a>
                            <a href="/videogames/api"> API </a>
                            <a href="/videogames/db"> Base de Datos </a>
                        </div>

                    </div>
                    </div>
                </div>
            </nav>
        </>
    );
};


export default NavBar;