import React from 'react'
import styles from '/styles/Feature.css'
import FeatureCard from './FeatureCard'

const FeaturePage = () => {
  const Feature = [
    {
      fImg:"/collabe.png",
      fHead:"Collboration Teams",
      fAbout:"Here you can handle projects together with team virtually"
    },
    {
      fImg:"/cloud.png",
      fHead:"Collboration Teams",
      fAbout:"Here you can handle projects together with team virtually"
    },
    {
      fImg:"/daily.png",
      fHead:"Collboration Teams",
      fAbout:"Here you can handle projects together with team virtually"
    }
  ];
  return (
    <div className="featureComp">
        <div className='featureHead'>
            <h1 id='ourFeature'>Our Features <br />you cab get</h1>
            <p id='featurePara'>We offer a variety of interesting features that <br />you can help increase yor productivity at <br />work and manage your projrct esaly</p>
            <button id='getbtn'>Get Started</button>
        </div>
        <div className='featureCards'>
            <FeatureCard pto={Feature[0].fImg} Head={Feature[0].fHead} Para={Feature[0].fAbout}/>
            <FeatureCard pto={Feature[1].fImg} Head={Feature[1].fHead} Para={Feature[1].fAbout}/>
            <FeatureCard pto={Feature[2].fImg} Head={Feature[2].fHead} Para={Feature[2].fAbout}/>
        </div>
    </div>
  )
}

export default FeaturePage