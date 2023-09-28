 
import styles from "./ScheduleComponent.module.scss";  
import DescriptionPage from "../DescriptionPage/DescriptionPage"
import FormScheduleComponent from "../FormSchedule/FormScheduleComponent"
import React from 'react';

export default function ScheduleComponent(){
  const propsRoute = 'Home > Agendar Consulta';
  const propsTitle = 'Agendar Consulta';
  const propsDesc = 'Recupere seus pokémons em 5 segundos';

    return(
        <>
        <div className='container'>
          <div className='box'>
            <DescriptionPage  propsRoute={propsRoute} propsTitle={propsTitle} propsDesc={propsDesc} />
          </div>
          <div className='box'>
            <div className = {styles.schedule}>
             <FormScheduleComponent/>
            </div>            
          </div>        
        </div>
        </>
    )
}
