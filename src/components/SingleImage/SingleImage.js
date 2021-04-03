import React from 'react';
import './SingleImage.css';
import Button from '@material-ui/core/Button';
import './sty.scss'
import {Link} from 'react-router-dom'

import { Query } from 'react-apollo';
import {LatestCollection} from '../graphql/index.js'

const SingleImage = () => {


    return (
      <React.Fragment>
        <div className='outer-si'>
          <div className='title-main-ac'>New Collections</div>
          <div className='row'>

          <div className="masonry">

              <Query query={LatestCollection}>
              {({ loading, error, data }) => {
                if (loading) return <div>Fetching</div>
                if (error)   {
                    console.log(error)
                    return <div>Error</div>}
                const items = data.latests
                // console.log(data);
                return (
                    <React.Fragment>
                        {items.map((item,index)=>{
                            return  <div className="grid" key={index}>
                              <img src={item.image.url} alt={item.name} />
                              <div className="grid__body">
                                <div className="relative">
                                  {/* <a className="grid__link" href="/categories" ></a> */}
                                  {/* <h2 className="grid__title">{item.name}</h2> */}
                                  <p className="grid__author">{item.name}</p>
                                </div>
                                <div className="mt-auto" >
                                  {/* <span className="grid__tag">#tag1</span> */}
                                </div>
                              </div>
                            </div>
                        })}
                    </React.Fragment>
                )
                }}  
              </Query>

</div>
</div>
        </div>


        <div className='image-text-si'>
          <div className='image-inner-si'>
            <div className='main-text-si'>FROM HOUSE TO HOME</div>
            <div className='sub-text-si'>
              Discover people who made a space their own
            </div>

            <div className='button-si'>
               <Link to="/categories/"> <Button variant='contained'>View All Categories</Button>   </Link>
            </div>
          </div>
        </div>
        {/* <h3>Single Image</h3> */}
      </React.Fragment>
    );

}

export default SingleImage;