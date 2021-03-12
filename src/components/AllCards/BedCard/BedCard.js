import React from 'react';
import './BedCard.css';
import {Link} from 'react-router-dom'

// import BedImage from '../../../static/bed.png';

const BedCard = ({data=[]}) => {

  // console.log(data);

  if (data.length) {
    return (
      <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
      <div className='row'>


            {data.map((each,index)=>{
              return <div key={index}
              className='col-xs-12 col-sm-6 col-md-4 col-lg-3'
              style={{ paddingRight: '0px', marginTop:"10px" }}
            ><Link to={`/categories/:${each.name}`}>
              <div className='wrap-card-bc' style={{marginTop:"10px"}}>    {/* onClick={() => alert("Hello from here")} */}
                <div className='container-card-bc'>
                  <div className='inner-card-bc dealing'>
                    {}
                    <img src={each.image[0].url} alt='Bed' />

                    <div className='inner-card-text' style={{marginTop:"10px"}}>{each.name}</div>
                    {/* <button className="btn card_btn">show more</button> */}
                  </div>
                </div>
              </div>
              </Link>
            </div>
            })}

        </div>
        </div>
    )
  }

    return (
      <>
        <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
          <div className='row'>
            {/* {data.map((each,index)=>{
              return <div key={index}
              className='col-xs-12 col-sm-6 col-md-4 col-lg-3'
              style={{ paddingRight: '0px' }}
            >
              <div className='wrap-card-bc'>
                <div className='container-card-bc'>
                  <div className='inner-card-bc'>
                    <img src={each.image.url} alt='Bed' />

                    <div className='inner-card-text'>{each.name}</div>
                  </div>
                </div>
              </div>
            </div>
            })} */}
            {/* <div
              className='col-xs-12 col-sm-6 col-md-4 col-lg-3'
              style={{ paddingRight: '0px' }}
            >
              <div className='wrap-card-bc'>
                <div className='container-card-bc'>
                  <div className='inner-card-bc'>
                    <img src={BedImage} alt='Bed' />

                    <div className='inner-card-text'>Bedroom</div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* 2nd Column */}
            {/* <div
              className='col-xs-12 col-sm-6 col-md-4 col-lg-3'
              style={{ paddingRight: '0px' }}
            >
              <div className='wrap-card-bc'>
                <div className='container-card-bc'>
                  <div className='inner-card-bc'>
                    <img src={BedImage} alt='Bed' />

                    <div className='inner-card-text'>Bedroom</div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* 3rd Column */}
            {/* <div
              className='col-xs-12 col-sm-6 col-md-4 col-lg-3'
              style={{ paddingRight: '0px' }}
            >
              <div className='wrap-card-bc'>
                <div className='container-card-bc'>
                  <div className='inner-card-bc'>
                    <img src={BedImage} alt='Bed' />

                    <div className='inner-card-text'>Bedroom</div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* 4th Column */}
            {/* <div
              className='col-xs-12 col-sm-6 col-md-4 col-lg-3'
              style={{ paddingRight: '0px' }}
            >
              <div className='wrap-card-bc'>
                <div className='container-card-bc'>
                  <div className='inner-card-bc'>
                    <img src={BedImage} alt='Bed' />

                    <div className='inner-card-text'>Bedroom</div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </>
    );

}

export default BedCard;