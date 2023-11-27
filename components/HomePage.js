import React from 'react'
import Image from 'next/image'
import styles from '/styles/HomePage.css'

const HomePage = () => {
  return (
    <div className='introPage'>
      <div className="introLeft">
        <h1 id='introHead'>We’re here to Increase your Productivity</h1>
        <Image src="/parabolic1.png" alt="" width={100} height={100} id='parabolic' />
        <p id='introPara'>Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.</p>
        <div className='hbtn'>
          <button className='hbtn1'>Try free trial</button>
          <button className='hbtn2'>
            <Image src="/play.png" alt="" width={100} height={100} id='play' />
            <p>View Demo</p>
          </button>
        </div>
      </div>
      <div className='introRight'>
        <div className='introtransectionCard'>
            <div className="introEac">
              <span className='introamount'>
                <p id='introamountPara'>Enter amount</p>
                <span id='intromoney'>$450..00</span>
              </span>
              <span id='introsendbtn'>Send</span>
                {/* <Image src="/fm4.png" alt="" width={100} height={100} id='introprofileImg' />
                <div className="intronameExperty">
                    <span id='introexpertName'>Amanda Young</span>
                    <span id='introexpertArea'>Expert Saving Money</span>
                </div>
                <div className="intromessageQ"><Image src="/messageQ1.png" alt="" width={100} height={100} id='introsendMessage' /></div> */}
            </div>
            <Image src="/checkmark.png" alt="" width={100} height={100} id='introphotosign' />
            <div className="introinMoneyCard">
            <p id='intrototalIn'>Total Income</p>
            <div className='intromoneyGraph'>
                <span id="intromoneyIncom">$245.00</span>
                <span id="intrograph"><Image src="/graph.png" alt="" width={100} height={100} id='intrographIncome' /></span>
            </div>
            </div>
            {/* <div className="intromoneyTransfer">
                <Image src="/moneyChecked.png" alt="" width={100} height={100} id='intromoneyChecked' />
                <p id="introtransfered">Money Transfer Succesfull</p>
            </div> */}
        </div>
        <div><Image src="/manb.png" alt="" width={1000} height={1000} id='introlapImg' /></div>
        <div className='introinMoney'>
          <div className='introMC'>
            <Image src="/hdatabase.png" alt="" width={100} height={100} id='hdata' />
            <div className="intodownCard">
              <Image src="/creditCard.png" alt="" width={100} height={100} id='credit' />
              <Image src="/messageOrage.png" alt="" width={100} height={100} id='messorange' />
            </div>
          </div>
        {/* <div className="introinMoneyCard">
            <p id='intrototalIn'>Total Income</p>
            <div className='intromoneyGraph'>
                <span id="intromoneyIncom">$245.00</span>
                <span id="intrograph"><Image src="/graph.png" alt="" width={100} height={100} id='intrographIncome' /></span>
            </div>
        </div> */}
        </div>

      </div>
    </div>
  )
}

export default HomePage