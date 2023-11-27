import React from 'react'
import Image from 'next/image'
import styles from '/styles/Footer.css'
const Footer = () => {
  return (
    <div className="footerCompo">
      <div className='fcard'>
        <div className='box l1'>
          <h1 className='b1head'>People are Saying About DoWhith</h1>
          <p className='b1para'>Everything you need to accept to payment and grow your money of manage anywhere on planet</p>
          <Image src="/footerL.png" alt="" width={50} height={50} className='leftImg' />
          <p className='b1para'>I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍</p>
          <span className='b1span'>_ Aria Zinanrio</span>
          <div className="fImg">
            <Image src="/fm1.png" alt="" width={50} height={50} />
            <Image src="/fm2.png" alt="" width={50} height={50} />
            <Image src="/fm3.png" alt="" width={50} height={50} />
            <Image src="/fm4.png" alt="" width={50} height={50} />
            <Image src="/fp.png" alt="" width={50} height={50} />
          </div>
        </div>
        <div className='box l2'>
            <Image src="/database.png" alt="" width={50} height={70} />
            <h2>Get Started</h2>
            <form action="">
                <div className='fill email'>
                    <label htmlFor="email" className='label'>Email</label>
                    <input type="email" placeholder='Enter your email' className='inputdata'/>
                </div>
                <div className='fill message'>
                    <label htmlFor="email" className='label'>Message</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder='What are you say ?' className='inputdata inMess'></textarea>
                    {/* <input type="" placeholder='Enter your email' className='inputdata inMess' /> */}
                </div>
                <button className='fbtn'>Request Demo</button>
                <div className='freeStart'><span id='or'>or</span> Start Free Trial</div>
            </form>
        </div>
        <div className='box l3'>
        <h1 className='flogo'>Biccos</h1>
        <p>Get started now try our product</p>
        <div className='logoemail'>
          <input type="email" placeholder='Enter your email here' className='emailInput'/>
          <Image src="/rightArrow.png" alt="" width={50} height={50} id='arrow'/>
        </div>
        </div>
        <div className='box l4'>
          <div className='fcontact'>
            <p>Support</p>
            <a href="" className='fsupport'>Help centre</a>
            <a href="" className='fsupport'>Account information</a>
            <a href="" className='fsupport'>About</a>
            <a href="" className='fsupport'>Contact us</a>
          </div>
          <div className='fcontact'>
            <p>Support</p>
            <a href="" className='fsupport'>Talk to support</a>
            <a href="" className='fsupport'>Support docs</a>
            <a href="" className='fsupport'>System status</a>
            <a href="" className='fsupport'>Covid responde</a>
          </div>
          <div className='fcontact'>
            <p>Support</p>
            <a href="" className='fsupport'>Update</a>
            <a href="" className='fsupport'>Security</a>
            <a href="" className='fsupport'>Beta test</a>
            <a href="" className='fsupport'>Pricing product</a>
          </div>
        </div>
      </div>
      <div className="fcopyright">
        <span id='fcrleft'>&#169; 2022 Biccas Inc. Copyright and rights reserved</span>
        <span id='fcrright'>
          <a href="" className='fcrlink'>Terms and Condtions</a>
          <a href="" className='fcrlink'>Privacy Policy</a>
        </span>
      </div>
    </div>
  )
}

export default Footer