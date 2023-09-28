 
import styles from "./BtnHome.module.scss"; 
import React, { useState, useEffect } from 'react';
export default function BtnHome(){
  const [expanded, setExpanded] = useState(true);

  useEffect(() => { 
    const timeoutId = setTimeout(() => {
      setExpanded(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleMouseEnter = () => { 
    setExpanded(true);
  };

  const handleMouseLeave = () => { 
    setExpanded(false);
  };

  return (
    <div
      className={`${styles.btnCentroPokemon} ${expanded ? styles.expanded : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.favIcon}>
        <img src='/images/white-pokeball.svg' alt="Pokeball" />
      </div>
      <div className={styles.texto}>Centro Pokémon</div>
    </div>
  ); 
}

 
 