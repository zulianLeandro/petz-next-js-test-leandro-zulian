import styles from "../FormSchedule/FormScheduleComponent.module.scss";  
import React, { useState, useEffect } from 'react';

export default function DateComponent({ onDateChange }) {  
    const [dates, setDates] = useState([]); 
    const [selectedDate, setSelectedDate] = useState("");

    useEffect(() => {
        async function fetchAvailableDates() {
            try {
                const response = await fetch('http://localhost:3000/api/scheduling/date');
                if (!response.ok) {
                    throw new Error('Erro ao buscar datas disponíveis');
                }
                const data = await response.json();
                setDates(data);
            } catch (error) {
                console.error('Erro:', error);
            }
        }

        fetchAvailableDates(); 
    }, []);

  
    const handleDateChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedDate(selectedValue);
        onDateChange(selectedValue);
    };

    return (
        <>
            <select
                className={styles.formDrop}
                onChange={handleDateChange}
                value={selectedDate}
            >    
                <option value="">Selecione uma data</option>
                {dates.map((date, index) => (
                    <option key={index} value={date}>
                        {date}
                    </option>
                ))}
            </select>
        </>
    );
}
