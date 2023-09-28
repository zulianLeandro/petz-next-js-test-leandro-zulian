 
import { Inter } from '@next/font/google' 
import Navbar from '../src/components/Navbar/Navbar'
import Footer from '../src/components/Footer/Footer'
import AboutComponent from '../src/components/About/AboutComponent'
export default function About(){
    return  <>
      <div className='container'>
        <div className='box'>
          <Navbar></Navbar>
        </div>
        <div className='box'>
          <AboutComponent></AboutComponent>
        </div>
        <div className='box'>
          <Footer></Footer>  
        </div>
      </div>
    </>
}