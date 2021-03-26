import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import './Card.css'
import {Helmet} from "react-helmet";

function toTitleCase(str) {
  return str.replace(
    /(\w*\W*|\w*)\s*/g,
    function(txt) {
    return(txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
    }
  ); 
}


function Card2({heading="All Categories", buttonText="Show More", subCat="", seoDesc="", data=[]}) {

  const [workingData, setWorkingData] = useState(data)
  const [inputForEachCategory, setInputForEachCategory] = useState("")
  const [inputPriceForEachCategory, setInputPriceForEachCategory] = useState(0)


    useEffect(()=>{
        let okData = data.filter((each,index)=>{
          if (each.name.toLowerCase().includes(inputForEachCategory.toLowerCase())){
            return (data[index])
          }
          return null
        })
        setWorkingData(okData)
        if (!inputForEachCategory) {
            setWorkingData(data)
        }
    },[inputForEachCategory, data])


    useEffect(()=>{
        let okData = data.filter((each,index)=>{
          if ((each.price[0])<inputPriceForEachCategory){
            return (data[index])
          }
          return null
        })
        setWorkingData(okData)
        if (parseInt(inputPriceForEachCategory)===0) {
        setWorkingData(data)
        }
    },[inputPriceForEachCategory, data])



  if (buttonText!=="Show More") {
    return (
      // following is for Each category Page like all chairs or Sofas
      <div className="main">
        <Helmet>
          <title>Iqra Steel Works All {toTitleCase(heading)} Collection</title>
          <meta name="description" content={seoDesc} />
          <meta name="keywords" content={seoDesc} />
          {/* for Facebook */}
          <meta name="og:title" content={`Iqra Steel Works All ${toTitleCase(heading)} Collection`} />
          <meta name="og:description" content={seoDesc} />
          <meta name="og:image" content="https://iqrasteelworks.com/static/media/logo.59601ea7.png" />
          <meta name="og:url" content={`https://iqrasteelworks.com/:${subCat}`} />
          {/* for Twitter */}
          <meta name="twitter:title" content={`Iqra Steel Works All ${toTitleCase(heading)} Collection`} />
          <meta name="twitter:description" content={seoDesc} />
          <meta name="twitter:image" content="https://iqrasteelworks.com/static/media/logo.59601ea7.png" />
        </Helmet>


        <h2 style={{padding:"10px", marginTop:"20px", fontSize:"50px", textAlign:"center"}}>All {toTitleCase(heading)} Collection</h2>

        <form className="form-horizontal">
            <input type="text" className="form-control" onChange={(e) => {
              setInputForEachCategory(e.target.value)
              e.preventDefault
            }} placeholder='Search By Name...' />
            <div style={{marginTop:"5%"}}>
              <p>Price Range:</p>
              <input type="range" className="slidecontainer" min={0} max={200000} value={inputPriceForEachCategory} onChange={(e) => {
              setInputPriceForEachCategory(e.target.value);
              e.preventDefault()
              }} />
              <h4>Rs.0 to Rs.{inputPriceForEachCategory}</h4>
            </div>
        </form>

        <ul className="cards">
          {workingData.map((each, index) => {

            return <li className="cards_item" key={index}>
                      <div className="card">
                        <div className="card_image"><img src={each.images[0].url} alt={each.name} /></div>
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

}

export default Card2
