import React, { Component } from 'react';
import './Banner.css';

import {Link} from 'react-router-dom'

// import BannerImage1 from '../../../static/BannerImage.jpg';
// import BannerImage2 from '../../../static/CHI-383.jpg';
import BannerImage3 from '../../../static/Untitled-1.jpg';


class Banner extends Component {
  render() {
    return (
      <>
        {/* <div className='container'> */}
        <div className='wrap-b'>
          <div className='height-b'>
            <div className='row'>
              <div className='col-xs-12 col-sm-6 col-md-12 col-lg-6'>
                <div className='outer-first-b'>
                  <div className='first-b'>DESIGN YOUR OWN</div>
                  <div className='sub-text-b'>
                    CHOOSE FROM A CURATED SELECTION OF FABRICS AND LEATHERS.
                  </div>

                  {/* <div className='third-b'>
                    53 Leathers | 170 Fabrics | Endless Configuration
                  </div> */}

                  <div className='button-b'>
                    <Link to="/categories/">  <button>Show More</button>  </Link>
                  </div>
                </div>
              </div>
              <div className='col-xs-12 col-sm-6 col-md-12 col-lg-6'>
                <div className='outer-second-b'>
                  <div className='second-b'>
                    <img src={BannerImage3} alt='Banner' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* </div> */}
      </>
    );
  }
}

export default Banner;