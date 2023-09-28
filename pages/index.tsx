import { Inter } from '@next/font/google' 
import Navbar from '../src/components/Navbar/Navbar'
import Footer from '../src/components/Footer/Footer'
import ImagemComponent from '../src/components/Basics/ImagemComponent'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='container'>
        <div className='box'>
          <Navbar></Navbar>
        </div>
        <div className='box'>
          <ImagemComponent></ImagemComponent>  
        </div>
        <div className='box'>
          <Footer></Footer>  
        </div>
    </div>
      
    </>
  )
}
