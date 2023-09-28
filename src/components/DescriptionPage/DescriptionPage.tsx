 
import styles from "./DescriptionPage.module.scss";  
import React from 'react';
 
export default function DescriptionPage( props){
    return(
        <>              
          <div className = {styles.context} > 
            <div className={styles.routeLine}>
                {props.propsRoute}     
            </div>
            <div className={styles.middleLine}>
                {props.propsTitle}      
            </div>
            <div className={styles.lastLine}>
                {props.propsDesc}
            </div>
          </div>
        </>
    )
}
