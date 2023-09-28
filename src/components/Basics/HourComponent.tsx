import styles from "../FormSchedule/FormScheduleComponent.module.scss";  
import React, { useState, useEffect } from 'react'; 
import axios from 'axios';

export default function HourComponent({ onHourChange }) {  
    const [times, setTimes] = useState([]);
    const [selectedHour, setSelectedHour] = useState("");  
  
    useEffect(() => { 
      axios.get('http://localhost:3000/api/scheduling/time')
        .then(response => {
          setTimes(response.data);
        })
        .catch(error => {
          console.error('Erro ao buscar os horários:', error);
        });
    }, []);
  
    
    const handleHourChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedHour(selectedValue);  
      onHourChange(selectedValue); 
    };
  
    return (
        <select
            className={styles.formDrop}
            onChange={handleHourChange}
            value={selectedHour}
        >
          <option value="">Selecione uma hora</option>
          {times.map(time => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select> 
    ); 
}
 