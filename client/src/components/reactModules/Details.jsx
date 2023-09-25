import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailVideogames, cleanDetail } from '../../Redux/actions';

import style from '../cssModules/Details.module.css';

const Details = (props)=>{
    const {id}= useParams();
    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(getDetailVideogames(id));

        return function(){
            dispatch(cleanDetail());
        }
    },[dispatch])
   
    const details= useSelector((state)=>state.details);
    
    return(
        <>
            <div className={style.container}>
                <div className={style.container_title}>
                    <h1 className={style.h1}>{details.name}</h1>
                </div>
                <div className={style.container_img}>
                    <img src={details.img} alt="Imagen de portada del videojuego" className={style.imagen} />
                </div>
                <div className={style.container_description}>
                    <h3 className={style.h3}>Descripción</h3>
                    <span>{details.description}</span>
                </div>
                <div className={style.container_details}>
                    <h4 className={style.h4}>Detalles:</h4>
                    <ul>
                        <li className={style.li}>Fecha de lanzamiento: {details.date}</li>
                        <li className={style.li}>Genero: {details.genres}</li>
                        <li className={style.li}>Plataformas: {details.plataformas}</li>
                        <li className={style.li}>Rating: {details.rating}</li>
                    </ul>
                </div>
            </div>
        </> 
    );
};

export default Details;