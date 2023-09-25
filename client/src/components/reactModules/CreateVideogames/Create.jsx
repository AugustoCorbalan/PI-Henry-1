import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getGenres } from "../../../Redux/actions"
import CreateForm from "./CreateForm";
import CreateGenre from "./CreateGenre";
import CreateDescription from "./CreateDescription";
import ButtonSubmit from "./ButtonSubmit";
import { postVideogames } from "../../../Redux/actions"

import styles from "../../cssModules/Create.module.css";

const Create = (props)=>{
    const dispatch = useDispatch();
    const generos= useSelector((state)=>state.genres);
    
    const [form, setForm] = useState({
      name: "",
      img: "",
      date: "",
      description: "",
      rating: "",
      genres: [],
      platforms: "",
  });

  const [error, setError] = useState({
      name: "", 
      img: "", 
      date: "", 
      rating: "", 
      platforms: "",
      genres: "",
      description: ""
  });
    
    useEffect(()=>{
        dispatch(getGenres());
    },[]);

    const submitHandler=async(evento)=>{
      evento.preventDefault();
      const dataJson= JSON.stringify(form);
      console.log(dataJson);
      await axios.post(`http://localhost:3001/videogames`,{data: dataJson});
      // console.log("Enviado")
    }

  return(
    <>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.container1}>
          <h1>Crear Videogame: </h1> 
        </div>
        <div className={styles.pepe}>
          <div className={styles.container2}>
            <CreateForm state={[form, setForm, error, setError]}/>
            <CreateDescription state={[form, setForm, error, setError]}/>
            
          </div>
          <div className={styles.container3}>
            <CreateGenre generos={generos} state={[form, setForm]}/>
          </div>
        </div>
        <div className={styles.container4}>
          <ButtonSubmit />
        </div>
      </form>
        
    </>
  )

}
export default Create;