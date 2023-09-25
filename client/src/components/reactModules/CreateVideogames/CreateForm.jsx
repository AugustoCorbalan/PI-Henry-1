import React from "react";
import styles from "../../cssModules/Create.module.css";

import { validateUrl, validateName, validateDate, validateRating } from "./validationFunction/functionsValidations.js";

const CreateForm = ({ state })=>{

    const [form, setForm, error, setError]= state
    
    const nameHandler= (value)=>{
        setForm({...form, name: value}); 
        const nameError = validateName(value);
        setError({...error, name: nameError});
    };

    const imgHandler= (value)=>{
        setForm({...form, img: value})
        const imgError= validateUrl(value);
        setError({...error, img: imgError});
    };

    const dateHandler= (value)=>{
        setForm({...form, date: value})
        const dateError= validateDate(value);
        setError({...error, date: dateError})
    };

    const ratingHandler= (value)=>{
        setForm({...form, rating: value})
        const ratingError = validateRating(value);
        setError({...error, rating: ratingError})
    };

    const platformsHandler= (value)=>{
        setForm({...form, platforms: value})
    }


    return(
        <>  
            <div className={styles.h}>
                <h2>Inserte los datos: </h2>
                <div className={styles.container} >
                    <div className={styles.label}>
                        <label>Nombre: </label>
                    </div>
                    <div className={styles.input} >
                        <input key="inputName" type="text" onChange={({target})=>nameHandler(target.value)} value={form.name}></input>
                    </div>
                    
                </div>
                <div className={styles.container}>
                    <div className={styles.label}>
                        <label>URL de Imagen: </label>
                    </div> 
                    <div className={styles.input}>
                        <input key="inputImg" type="text" onChange={({target})=>imgHandler(target.value)} value={form.img} className={error.img && styles.error}></input>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.label}>
                        <label>Rating: </label>
                    </div>
                    <div className={styles.input}>
                        <input key="inputRating" type="text" onChange={({target})=>ratingHandler(target.value)} value={form.rating} className={error.rating && styles.error}></input>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.label}>
                        <label>Plataformas: </label>
                    </div>
                    <div className={styles.input}>
                        <input key="inputPlatforms" type="text" onChange={({target})=>platformsHandler(target.value)}></input>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.label}>
                        <label>Fecha de lanzamiento: </label>
                    </div>
                    <div className={styles.input}>
                        <input key="inputDate" type="date" onChange={({target})=>dateHandler(target.value)} value={form.date} className={ error.date && styles.error}></input>
                    </div>
                </div>
                <div className={styles.container}>

                </div>
            </div>
        </>
    );
};

export default CreateForm;