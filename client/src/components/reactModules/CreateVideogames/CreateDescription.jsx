import React from "react";
import { validateDescription } from "./validationFunction/functionsValidations.js";
import styles from "../../cssModules/Create.module.css"

const CreateDescription= ({state})=>{
    const [form, setForm, error, setError] = state;
    const descriptionHandler= (value)=>{
        setForm({...form, description: value})
        const errorDescr = validateDescription(value);
        setError({...error, description: errorDescr})
    };

    return(
        <div className={styles.h3}>
            <h2>Descripción:</h2>
            <div className={styles.container}>
                <div>
                    <textarea key="descriptionHandler" onChange={({target})=>descriptionHandler(target.value)} value={form.description} className={styles.input_description}></textarea>
                </div>
            </div>
        </div>
    )
}

export default CreateDescription;