import React from 'react'
import CollabCard from './CollabCard'

const Collab = () => {
    const collab =[
        {
            Name:"Unsplash",
            src:"/unsplash.png"
        },
        {
            Name:"Notion",
            src:"/notionN.png"
        },
        {
            Name:"INTERCOM",
            src:"/intercom.png"
        },
        {
            Name:"descript",
            src:"/descript.png"
        },
        {
            Name:"grammarly",
            src:"/grammer.png"
        }
    ];
  return (
    <div className='collab'>
        <h1 className="collabTytle">More than 25,000 teams use Collabs</h1>
        <div className="collabMember">
            <CollabCard ColName={collab[0].Name} Img={collab[0].src}/>
            <CollabCard ColName={collab[1].Name} Img={collab[1].src}/>
            <CollabCard ColName={collab[2].Name} Img={collab[2].src}/>
            <CollabCard ColName={collab[3].Name} Img={collab[3].src}/>
            <CollabCard ColName={collab[4].Name} Img={collab[4].src}/>
        </div>
    </div>
  )
}

export default Collab