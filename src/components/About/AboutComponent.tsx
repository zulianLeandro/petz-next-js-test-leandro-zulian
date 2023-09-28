 
import styles from "./AboutComponent.module.scss";  
import DescriptionPage from "../DescriptionPage/DescriptionPage"
import React from 'react';

export default function AboutComponent(){
  const propsRoute = 'Home > Quem Somos';
  const propsTitle = 'Quem Somos';
  const propsDesc = 'A Maior rede de tratamento pokémon';

    return(
        <>
        <div className='container'>
          <div className='box'>
            <DescriptionPage  propsRoute={propsRoute} propsTitle={propsTitle} propsDesc={propsDesc} />
          </div>
          <div className='box'>
            <div className = {styles.imag}>
              <img src='/images/about.jpg' ></img>
            </div>            
          </div>        
        </div>
        </>
    )
}
