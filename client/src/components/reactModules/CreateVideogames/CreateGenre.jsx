import React from "react";
import { useState } from "react"
import styles from "../../cssModules/Create.module.css";


const CreateGenre=({generos, state})=>{
    const [ form, setForm ]= state;
    const noneVisibility= styles.oculto;
    const stylesButton= styles.newGenre_button;
    const stylesInput= styles.newGenre_input;

    const [visiblitybutton1, setVisiblitybutton1] = useState(stylesButton);
    const [visiblitybutton2, setVisiblitybutton2] = useState(noneVisibility);
    const [visibilityInput, setVisiblityInput] = useState(noneVisibility);
    
    const clickHandler1=()=>{
        setVisiblitybutton1(noneVisibility);
        setVisiblitybutton2(stylesButton);
        setVisiblityInput(stylesInput);
    }

    const clickHandler2=()=>{
        setVisiblitybutton1(stylesButton);
        setVisiblitybutton2(noneVisibility);
        setVisiblityInput(noneVisibility);

        
    }

    const handlerCheck=(value)=>{
        let genres= form.genres;
        genres.push(value);
        setForm({ ...form, genres: genres });
    }
    return(
        <div className={styles.h2}>
            <h2> Seleccione los generos: </h2>
            <div className={styles.checkbox}>
                {generos.map((genre)=>{
                    return(
                        <div className={styles.checkbox_div}>
                            <input type="checkbox" value={genre.name} className={styles.checkbox_input} onClick={({target})=>handlerCheck(target.value)}/>
                            <label className={styles.checkbox_label}>{genre.name}</label>
                        </div>
                    )
                })}
            </div>
            <div className={styles.genre_buttons}>
                <button type="button" onClick={clickHandler1} className={visiblitybutton1}>Nuevo genero</button>
                <input type="text" placeholder="Nombre del genero.." className={visiblitybutton2}></input>
                <button type="button" onClick={clickHandler2} className={visibilityInput}>Aceptar</button>
            </div>
        </div>
    )
}


export default CreateGenre;