import React, { useState } from 'react'
import {Chair,ClotheRack,PlantStand,Shelf,Sofa,Stool,CenterTable,ConsoleTable,SideTable,StudyAndOfficeTable} from './graphql/index.js'
import { Query } from 'react-apollo';
import {useRouteMatch} from 'react-router-dom';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import {Badge} from 'react-bootstrap'
import  "./ProductDetails.css"
import './ImageText/ImageText.css'

import ReactHtmlParser from 'react-html-parser';
import {Helmet} from "react-helmet";

import {FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, FacebookMessengerShareButton, FacebookMessengerIcon, TelegramShareButton, TelegramIcon, TwitterShareButton, TwitterIcon} from "react-share";

function ProductDetails({comingQuery}) {

    let { url } = useRouteMatch();
    // console.log(url);
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
      // console.log(newRequired)

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

    } else if (newRequired.includes("centerTables")) {
      
      comingQuery = CenterTable
      newRequired = "centerTable"

    } else if (newRequired.includes("consoleTables")) {
      
      comingQuery = ConsoleTable
      newRequired = "consoleTable"

    } else if (newRequired.includes("sideTables")) {
      
      comingQuery = SideTable
      newRequired = "sideTable"

    } else if (newRequired.includes("studyAndOfficeTables")) {
      
      comingQuery = StudyAndOfficeTable
      newRequired = "studyAndOfficeTable"

    }


    const [activeUrl, setActiveUrl] = useState(0);

    // console.log(window.location.href);

    return (
        <Query query={comingQuery} variables={({itemCode:newRequired2})}>

          {({ loading, error, data }) => {

          if (loading) return <div>Fetching</div>

          if (error)   {
              console.log(error)
              return <div>Error</div>}

          let item = data[newRequired];


          return (
              <React.Fragment>
              <h2 className='main-heading-it' style={{color:"black", textAlign:"center", marginTop:"30px"}}>
                {item.name}
              </h2>

              <div style={{color:"black"}}>


                  <div className='wrap-it'>
                    {/* 1st 50% */}
                    <div className='row'>
                      <div className='image-it'>
                        <div className="hsf">
                          <img className="featured12" src={item.images[activeUrl].url} alt='Side' style={{padding:"15px"}} />
                        </div>
                        <div style={{display:"flex"}}>
                          {item.images.map((eachImage, index)=>{
                               return <img className="thumbnail12" key={index} src={eachImage.url} alt={item.name} onClick={()=>setActiveUrl(index)} />
                          })}
                        </div>
                      </div>

                      {/* 2nd 50% */}
                      <div className='handle-it'>

                        {/* <div className='main-heading-it'>
                        {each.price?"Estimation Rs."+each.price:null}/-  


                        <!-- AddToAny BEGIN -->
<div class="a2a_kit a2a_kit_size_32 a2a_default_style">
<a class="a2a_dd" href="https://www.addtoany.com/share"></a>
<a class="a2a_button_whatsapp"></a>
<a class="a2a_button_facebook"></a>
<a class="a2a_button_twitter"></a>
<a class="a2a_button_copy_link"></a>
<a class="a2a_button_facebook_messenger"></a>
</div>
<script async src="https://static.addtoany.com/menu/page.js"></script>
<!-- AddToAny END -->


                          {item.name}
                        </div> */}

                        <Helmet>
                            <meta name="description" content={item.description.text.substr(0, 160)} />
                            <meta name="keywords" content={item.description.text.substr(0, 160)} />
                            {/* for Facebook */}
                            <meta name="og:title" content={`${item.name} By Iqra Steel Works`} />
                            <meta name="og:description" content={item.description.text.substr(0, 160)} />
                            <meta name="og:image" content={item.images[0].url} />
                            <meta name="og:url" content={`https://iqrasteelworks.com${url}`} />
                            {/* for Twitter */}
                            <meta name="twitter:title" content={`${item.name} By Iqra Steel Works`} />
                            <meta name="twitter:description" content={item.description.text.substr(0, 160)} />
                            <meta name="twitter:image" content={item.images[0].url} />
                        </Helmet>

                        <div className='sub-heading-it'>
                          <span style={{color:"black"}}>Item Code <Badge variant="warning"><b style={{fontSize:"17px"}}>{item.itemCode}</b></Badge></span>
                          <br/>
                          <br/>
                          Estimated Price : <Badge variant="dark"><b style={{fontSize:"17px"}}>{item.price[0]!==0?"Rs. "+item.price[0]:null}</b> </Badge>
                          <br/>
                          <br/>
                            {item.description.html?<b><h3>Description</h3></b>:null}
                            {/* <b><h3>Description</h3></b> */}
                            <span className="liHandler">{ReactHtmlParser(item.description.html)}</span>
                          <br/>
                          <br/>
                          
                        </div>

                          <div className='shop-it' style={{marginBottom:"30px"}}>
                            <Link to={`/appointment/:${item.itemCode}`}><Button variant='contained'>Make Appointment</Button></Link>
                          </div>

                          <div>
                          <div className="content-for-social-share" style={{justifyContent:"center"}}>
                              <p><b>Share with Friends</b></p>
                          </div>

                            <div className="content-for-social-share">
                              <span className="span-for-social-share">
                                <FacebookShareButton url={window.location.href}>
                                  <FacebookIcon size={"2rem"} round />
                                </FacebookShareButton> 
                              </span>
                              <span className="span-for-social-share">
                                <FacebookMessengerShareButton url={window.location.href}>
                                  <FacebookMessengerIcon size={"2rem"} round />
                                </FacebookMessengerShareButton>
                              </span>
                              <span className="span-for-social-share">
                                <WhatsappShareButton url={window.location.href}>
                                  <WhatsappIcon size={"2rem"} round />
                                </WhatsappShareButton> 
                              </span>
                              <span className="span-for-social-share">
                                <TwitterShareButton url={window.location.href}>
                                  <TwitterIcon size={"2rem"} round />
                                </TwitterShareButton> 
                              </span>
                              <span className="span-for-social-share">
                                <TelegramShareButton url={window.location.href}>
                                  <TelegramIcon size={"2rem"} round />
                                </TelegramShareButton> 
                              </span>
                            </div>

                          </div>
                      </div>


                    </div>
                  </div>
                </div>
              </React.Fragment>
          )
          }} 


</Query>
    )
}

export default ProductDetails
