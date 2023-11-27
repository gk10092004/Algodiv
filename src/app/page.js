import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '/components/Navbar'
import Collab from '/components/Collab'
import AllSupCard from '../../components/AllSupCard'
import FeaturePage from '../../components/FeaturePage'
import Subscription from '../../components/Subscription'
import Benifit from '../../components/Benifit'
import Footer from '../../components/Footer'
import HomePage from '../../components/HomePage'



export default function Home() {
  return (
    <div className="wrapper">
      <div className="page1">
        <Navbar/>
        <div className="restCompo1">
            <HomePage/>
            <Collab/>
        </div>

      </div>
      <div className="page2">
        <AllSupCard/>
      </div>
      <div className="page3">
        <FeaturePage/>
      </div>
      <div className='page4'>
        <Benifit/>
      </div>
      <div className='page5'>
        <Subscription/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  )
}
