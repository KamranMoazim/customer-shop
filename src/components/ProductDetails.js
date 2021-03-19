import React, { useState } from 'react'
import {Chair,ClotheRack,PlantStand,Shelf,Sofa,Stool,Table} from './graphql/index.js'
import { Query } from 'react-apollo';
import {useRouteMatch} from 'react-router-dom';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import {Badge} from 'react-bootstrap'
import  "./ProductDetails.css"
import './ImageText/ImageText.css'

import ReactHtmlParser from 'react-html-parser';

function ProductDetails({comingQuery}) {

    let { url } = useRouteMatch();
    let required = url.split(":")

    let newRequired = required[required.length - 3] // category
    newRequired = newRequired.replace("/", "")
    // console.log(newRequired)

    let newRequired2 = required[required.length - 1] // code
    newRequired2 = newRequired2.replace(" ", "")
    // console.log(newRequired2)

    if (newRequired.includes("chairs")) {

      comingQuery = Chair
      newRequired = "chair"

    } else if (newRequired.includes("clotheRacks")) {

      comingQuery = ClotheRack
      newRequired = "clotheRack"

    } else if (newRequired.includes("plantStands")) {

      comingQuery = PlantStand
      newRequired = "plantStand"

    } else if (newRequired.includes("shelves")) {

      comingQuery = Shelf
      newRequired = "shelf"

    } else if (newRequired.includes("sofas")) {

      comingQuery = Sofa
      newRequired = "sofa"

    } else if (newRequired.includes("stools")) {

      comingQuery = Stool
      newRequired = "stool"

    } else if (newRequired.includes("tables")) {
      
      comingQuery = Table
      newRequired = "table"

    }




// if (newRequired === "benches") {
//   comingQuery = Bench
//   newRequired = "bench"
// }
//  else if (newRequired === "windows") {
//   comingQuery = Window
//   newRequired = "window"
// } else if (newRequired === "metallicStructures") {
//   comingQuery = MetallicStructure
//   newRequired = "metallicStructure"
// } else if (newRequired === "stands") {
//   comingQuery = Stand
//   newRequired = "stand"
// } else if (newRequired === "doors") {
//   comingQuery = Door
//   newRequired = "door"
// } else if (newRequired === "fabrications") {
//   comingQuery = Fabrication
//   newRequired = "fabrication"
// } else if (newRequired === "gates") {
//   comingQuery = Gate
//   newRequired = "gate"
// } else if (newRequired === "grills") {
//   comingQuery = Grill
//   newRequired = "grill"
// } else if (newRequired === "stairs") {
//   comingQuery = Stair
//   newRequired = "stair"
// } else if (newRequired === "railings") {
//   comingQuery = Railing
//   newRequired = "railing"
// }




    const [activeUrl, setActiveUrl] = useState(0);

    return (
        <Query query={comingQuery} variables={({itemCode:newRequired2})}>

          {({ loading, error, data }) => {

          if (loading) return <div>Fetching</div>

          if (error)   {
              console.log(error)
              return <div>Error</div>}

          let item = data[newRequired];


          return (
              <>
              {/* <h2 style={{color:"black", textAlign:"center", marginTop:"30px"}}> {item.name}</h2> */}
              <div className='main-heading-it' style={{color:"black", textAlign:"center", marginTop:"30px"}}>
                          {item.name}
                        </div>
              <div style={{color:"black"}}>


                  <div className='wrap-it'>
                    {/* 1st 50% */}
                    <div className='row'>

                      <div className='image-it'>
                        <div className="hsf">
                          <img className="featured12" src={item.images[activeUrl].url} alt='Side' style={{padding:"15px"}} />
                        </div>
                        <div>
                          {item.images.map((eachImage, index)=>{
                            return <img className="thumbnail12" src={eachImage.url} key={index} alt={item.name} onClick={()=>setActiveUrl(index)} />
                          })}
                        </div>


                      </div>

                      {/* 2nd 50% */}
                      <div className='handle-it'>

                        {/* <div className='main-heading-it'>
                        {each.price?"Estimation Rs."+each.price:null}/-
                          {item.name}
                        </div> */}

                        <div className='sub-heading-it'>
                          <span style={{color:"black"}}>Item Code <Badge variant="warning"><b style={{fontSize:"17px"}}>{item.itemCode}</b></Badge></span>
                          <br/>
                          <br/>
                          Estimated Price : <Badge variant="dark"><b style={{fontSize:"17px"}}>{item.price[0]!==0?"Rs. "+item.price[0]:null}</b> </Badge>
                          <br/>
                          <br/>
                            <b><h3>Description</h3></b>
                            <span className="liHandler">{ReactHtmlParser(item.description.html)}</span>
                          <br/>
                          <br/>
                          
                        </div>

                        <div className='shop-it'>
                          <Link to={`/appointment/:${item.itemCode}`}><Button variant='contained'>Make Appointment</Button></Link>
                          {/* <a href={`/appointment`}><Button variant='contained'>Make Appointment</Button></a> */}
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </>
          )
          }} 


</Query>
    )
}

export default ProductDetails
