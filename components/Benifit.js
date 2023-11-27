import React from 'react'
import Image from 'next/image'
import styles from '/styles/Benifit.css'


const Benifit = () => {
  return (
    <div className='beniCompo'>
    <div className='beniLeft'>
        <h1 className='beniHead'>What Benifit Will You Get</h1>
        <div className='beniPoint'>
          <span><img src="/checked.png" alt=""  className='ckdeImg'/></span>
          <span className='pointName'>Free Consulting With Experet Saving Money</span>
        </div>
        <div className='beniPoint'>
          <span><img src="/checked.png" alt=""  className='ckdeImg'/></span>
          <span className='pointName'>Online Banking</span>
        </div>
        <div className='beniPoint'>
          <span><img src="/checked.png" alt=""  className='ckdeImg'/></span>
          <span className='pointName'>Investment Report Every Month</span>
        </div>
        <div className='beniPoint'>
          <span><img src="/checked.png" alt=""  className='ckdeImg'/></span>
          <span className='pointName'>Saving Money For The Future</span>
        </div>
        <div className='beniPoint'>
          <span><img src="/checked.png" alt=""  className='ckdeImg'/></span>
          <span className='pointName'>Online Transection</span>
        </div>
    </div>
    <div className='beniRight'>
        <div className='transectionCard'>
            <div className="Eac">
                <Image src="/fm4.png" alt="" width={100} height={100} id='profileImg' />
                <div className="nameExperty">
                    <span id='expertName'>Amanda Young</span>
                    <span id='expertArea'>Expert Saving Money</span>
                </div>
                <div className="messageQ"><Image src="/messageQ1.png" alt="" width={100} height={100} id='sendMessage' /></div>
            </div>
            <Image src="/photosign.png" alt="" width={100} height={100} id='photosign' />
            <div className="moneyTransfer">
                <Image src="/moneyChecked.png" alt="" width={100} height={100} id='moneyChecked' />
                <p id="transfered">Money Transfer Succesfull</p>
            </div>
        </div>
        <div><Image src="/laptop1.png" alt="" width={1000} height={1000} id='lapImg' /></div>
        <div className='inMoney'>
        <div className="inMoneyCard">
            <p id='totalIn'>Total Income</p>
            <div className='moneyGraph'>
                <span id="moneyIncom">$245.00</span>
                <span id="graph"><Image src="/graph.png" alt="" width={100} height={100} id='graphIncome' /></span>
            </div>
        </div>
        </div>

    </div>
    </div>
  )
}

export default Benifit