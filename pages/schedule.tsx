 

import { Inter } from '@next/font/google' 
import Navbar from '../src/components/Navbar/Navbar'
import Footer from '../src/components/Footer/Footer'
import ScheduleComponent from '../src/components/Schedule/ScheduleComponent'
export default function Schedule(){
    return  <>
      <div className='container'>
        <div className='box'>
          <Navbar></Navbar>
        </div>
        <div className='box'>
          <ScheduleComponent/>
        </div>
        <div className='box'>
          <Footer></Footer>  
        </div>
      </div>
    </>
}