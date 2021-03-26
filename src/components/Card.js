import React from 'react'
import {Link} from 'react-router-dom';
import './Card.css'



function Card({heading="All Categories", buttonText="Show More", subCat="", seoDesc="", data=[]}) {

  return (
    // following is for categories Page
<div className="main">
  <h2 style={{padding:"10px", marginTop:"20px", fontSize:"50px", textAlign:"center"}}>{heading}</h2>
  <ul className="cards">
    {data.map((each, index) => {
      return <li className="cards_item" key={index}>
                <div className="card">
                  <div className="card_image"><img src={each.image[0].url} alt={each.name} /></div>
                  <div className="card_content">
                    <h2 className="card_title" style={{fontSize:"30px", textAlign:"center", marginBottom:"10px"}}>{each.name}</h2>
                    <Link to={`/categories/:${each.name}`}><button className="btn card_btn"> {buttonText}</button></Link>
                  </div>
                </div>
              </li>
    })}

  </ul>
</div>
    )
}

export default Card
