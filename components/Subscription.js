import React from 'react'
import styles from '/styles/Subscription.css'
import PaidCard from './PaidCard'

const Subscription = () => {
  const Choose =[
    {
      chHead:"Free",
      chPara:"Have a go  and test your  superpowers",
      chPrice:"0",
      chkp1:"2 Users",
      chkp2:"2 Files",
      chkp3:"Public Share & Comments",
      chkp4:"Chat Support ",
      chkp5:"New income apps",
      chbtn:"Signup for free",
      discount:"Free"
      
    },
    {
      chHead:"Pro",
      chPara:"Experiment the power of infinite possibilities",
      chPrice:"8",
      chkp1:"4 Users",
      chkp2:"All apps",
      chkp3:"Unlimited editable exports",
      chkp4:"Folders and collaboration ",
      chkp5:"All incoming apps",
      chbtn:"Go to pro",
      discount:"Save $50 a year"
    },
    {
      chHead:"Business",
      chPara:"Unveil new superpowers and join the Design Leaque",
      chPrice:"16",
      chkp1:"All the features of pro plan",
      chkp2:"Account success Manager",
      chkp3:"Single Sign-On (SSO)",
      chkp4:"Co-conception pogram",
      chkp5:"Collaboration-Soon",
      chbtn:"Goto Business",
      discount:"Save $112 a year"
    }
  ];
  return (
    <div className='subPage'>
      <div className='chooseTop'>
        <h1 id='chooseHead'>Choose Plan <br />That’s Right For You</h1>
        <p id='choosePara'>Choose plan that works best for you, feel free to contact us</p>
        <div id='chooseBtn'>
            <button className='billbtn'>Bill Monthly</button>
            <button className='billbtn'>Bill Yearly</button>
        </div>
      </div>
        <div className='paidCard'>
            <PaidCard head={Choose[0].chHead} para={Choose[0].chPara} price={Choose[0].chPrice} kp1={Choose[0].chkp1} kp2={Choose[0].chkp2} kp3={Choose[0].chkp3} kp4={Choose[0].chkp4} kp5={Choose[0].chkp5} btn={Choose[0].chbtn} dis={Choose[0].discount}/>
            <PaidCard head={Choose[1].chHead} para={Choose[1].chPara} price={Choose[1].chPrice} kp1={Choose[1].chkp1} kp2={Choose[1].chkp2} kp3={Choose[1].chkp3} kp4={Choose[1].chkp4} kp5={Choose[1].chkp5} btn={Choose[1].chbtn} dis={Choose[1].discount}/>
            <PaidCard head={Choose[2].chHead} para={Choose[2].chPara} price={Choose[2].chPrice} kp1={Choose[2].chkp1} kp2={Choose[2].chkp2} kp3={Choose[2].chkp3} kp4={Choose[2].chkp4} kp5={Choose[2].chkp5} btn={Choose[2].chbtn} dis={Choose[2].discount}/>
        </div>
    </div>
  )
}

export default Subscription