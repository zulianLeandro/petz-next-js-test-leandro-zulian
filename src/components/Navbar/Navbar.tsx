import Link from "next/link";
import styles from "./Navbar.module.scss"; 
import BtnHome from "../Buttons/BtnHome/BtnHome"; 
import React from 'react';

export default function Navbar(){
    return(
        <>              
          <div className = {styles.boxes} > 
            <div className = {styles.leftbox}>
              <Link href="/" >
                 <BtnHome></BtnHome>
              </Link>
            </div> 
              
            <div className = {styles.middlebox}  >
              <Link href="/about"  >Quem Somos</Link>
            </div>
              
            <div className = {styles.rightbox}>
              <Link href="/schedule">
                <div className = {styles.btnAgendarConsulta}>
                  Agendar Consulta  
                </div>                
              </Link>
            </div>
        </div>
        </>
    )
}

 
 