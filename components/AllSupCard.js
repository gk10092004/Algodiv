import React from 'react'
import Image from 'next/image';
import SupportCard from './SupportCard'
import styles from '/styles/page2.css'

const AllSupCard = () => {
    const Scard = [
        {
            SImg:"/publish.png",
            STytle:"Publishing",
            SBody:"Plan, collaborate, and publishing your content that drives meaningful engagement and growth for your brand"
        },
        {
            SImg:"/pie-chart.png",
            STytle:"Analytics",
            SBody:"Analyze your performance and create goegeous report"
        },
        {
            SImg:"/engage.png",
            STytle:"Engagement",
            SBody:"Quiuckly navigate you anda engage with your adience"
        }
    ];
  return (
    <div className='pageCompo'>
    <div className="suppSide">
        <h1 className='sideHead'>How we support our pratner all over the world</h1>
        <p className='sidePara'>SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software</p>
        <div className="rating">
            <div className="rating1">
                <Image src="/star5.png" alt="" width={90} height={30} className='star'/>
                <div className='point'><b>4.9</b> / 5 rating</div>
                <h2 className='ratingName'>databricks</h2>
            </div>
            <div className="rating2">
                <Image src="/star5.png" alt="" width={90} height={30} className='star'/>
                <div className='point'><b>4.9</b> / 5 rating</div>
                <h2 className='ratingName'>databricks</h2>
            </div>
        </div>
    </div>
    <div className="allCard">
        <SupportCard logo={Scard[0].SImg} title={Scard[0].STytle} content={Scard[0].SBody}/>
        <SupportCard logo={Scard[1].SImg} title={Scard[1].STytle} content={Scard[1].SBody}/>
        <SupportCard logo={Scard[2].SImg} title={Scard[2].STytle} content={Scard[2].SBody}/>
    </div>
    </div>
  )
}

export default AllSupCard