import React, { Component } from 'react';
import './ImageText.css';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

// import img1 from '../../static/720 445 new 1.jpg'
// import img2 from '../../static/720 445 new 2.jpg'
import img3 from '../../static/720 445 new 3.jpg'
import img4 from '../../static/img.jpg'
import img5 from '../../static/Untitled-2.jpg'


class ImageText extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='wrap-it'>
          {/* 1st 50% */}
          <div className='row'>

            <div className='image-it'>
              <img src={img3} alt='Side' />
            </div>

            {/* 2nd 50% */}
            <div className='handle-it'>
              <div className='main-heading-it'>STYLISH & SIMPLE</div>
              <div className='sub-heading-it'>
                Foam and feather combine to reach the pinnacle of comfort
              </div>
              <div className='shop-it'>
                <Link to="/categories/">   <Button variant='contained'>Show More</Button>   </Link>
              </div>
            </div>

            {/* <h3>Image Text</h3> */}
          </div>

        </div>

        {/* 2nd Image Section */}

        <div className='second-wrap-it'>
          {/* 1st 50% */}
          <div className='row second-it'>
            <div className='second-handle-it'>
              <div className='second-main-heading-it'>UNIQUE & VERSATILE</div>
              <div className='second-sub-heading-it'>
                The adjustable Finn Side Table is the suitable companion for your sofa or bed
              </div>
              <div className='second-shop-it'>
                  <Link to="/categories/">   <Button variant='contained'>Show More</Button>   </Link>
              </div>
            </div>

            {/* 2nd 50% */}

            <div className='second-image-it'>
              <img src={img4} alt='Side' />
            </div>
            {/* <h3>Image Text</h3> */}
          </div>
        </div>


        <div className='wrap-it'>
          {/* 1st 50% */}
          <div className='row'>

            <div className='image-it'>
              <img src={img5} alt='Side' />
            </div>

            {/* 2nd 50% */}
            <div className='handle-it'>
              <div className='main-heading-it'>FREAKISH DESIGN</div>
              <div className='sub-heading-it'>
                Simplicity carried to an extreme becomes elegance
              </div>
              <div className='shop-it'>
                  <Link to="/categories/">   <Button variant='contained'>Show More</Button>   </Link>
              </div>
            </div>

            {/* <h3>Image Text</h3> */}
          </div>

        </div>

      </React.Fragment>
    );
  }
}

export default ImageText;