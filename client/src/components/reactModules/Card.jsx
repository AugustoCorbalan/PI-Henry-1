// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import Genres from './Genres.jsx'
// import styles from '../cssModules/Card.module.css';

// const Card = ({id, name, img, genres})=>{
//     return(
//         <>
//             <NavLink to= {`/detail/${id}`} className={styles.nav_link}>

//                 <div className={styles.card}>

//                     <div className={styles.container_title}>
//                         <h3>{name}</h3>
//                     </div>

//                     <div className={styles.container_img}>
//                         <img src={img} className={styles.img}/>
//                     </div>

//                     <div  className={styles.container_genres}>

//                         <div className={styles.genres_title}>
//                             <h4 className={styles.genres_title}> Generos:</h4>
//                         </div>

//                         <div className={styles.genres_list}>
//                             <Genres genres={genres}/>
//                         </div>
                        
//                     </div>

//                 </div>
//             </NavLink>
//         </>
//     );
// }

// export default Card;

import React from "react";
import { NavLink } from 'react-router-dom';
import Genres from './Genres.jsx'
import styles from '../cssModules/Card.module.css';

class Card extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <NavLink to= {`/detail/${this.props.id}`} className={styles.nav_link}>

                    <div className={styles.card}>

                        <div className={styles.container_title}>
                            <h3>{this.props.name}</h3>
                        </div>

                        <div className={styles.container_img}>
                            <img src={this.props.img} className={styles.img}/>
                        </div>

                        <div  className={styles.container_genres}>

                            <div className={styles.genres_title}>
                                <h4 className={styles.genres_title}> Generos:</h4>
                            </div>

                            <div className={styles.genres_list}>
                                <Genres genres={this.props.genres}/>
                            </div>
                            
                        </div>

                    </div>

                </NavLink>
            </>
        )
    }
}

export default Card;