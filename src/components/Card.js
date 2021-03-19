import React from 'react'
import {Link} from 'react-router-dom';
import './Card.css'


function toTitleCase(str) {
  return str.replace(
    /(\w*\W*|\w*)\s*/g,
    function(txt) {
    return(txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
    }
  ); 
}



function Card({heading="All Categories", buttonText="Show More", subCat="", data=[]}) {



  if (buttonText!=="Show More") {
    return (
      // following is for Each category Page
      <div className="main">
        <h2 style={{padding:"10px", marginTop:"20px", fontSize:"50px", textAlign:"center"}}>All {toTitleCase(heading)}</h2>
        <ul className="cards">
          {data.map((each, index) => {
            // console.log(each);

            return <li className="cards_item" key={index}>
                      <div className="card">
                        <div className="card_image"><img src={each.images[0].url} alt="" /></div>
                        <div className="card_content">
                          <h2 className="card_title" style={{fontSize:"30px", textAlign:"center", marginBottom:"20px"}}>{each.name}</h2>
                          <p className="card_title" style={{fontSize:"17px", textAlign:"center", marginBottom:"10px"}}>{parseInt(each.price[0])!==0?"Estimation Rs."+each.price[0]+"/-":null}</p>
                          <p className="card_title" style={{fontSize:"17px", textAlign:"center", marginBottom:"10px"}}>Item code&nbsp; {each.itemCode}</p>
                          <Link to={`/categories/:${subCat}/:${each.name}/:${each.itemCode}`}><button className="btn card_btn">{buttonText}</button></Link>
                        </div>
                      </div>
                    </li>
          })}
      
        </ul>
      </div>
          )
  }


  return (
    // following is for categories Page
<div className="main">
  <h2 style={{padding:"10px", marginTop:"20px", fontSize:"50px", textAlign:"center"}}>{heading}</h2>
  <ul className="cards">
    {data.map((each, index) => {
      return <li className="cards_item" key={index}>
                <div className="card">
                  <div className="card_image"><img src={each.image[0].url} alt="" /></div>
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
