import React from 'react'
import { Query } from 'react-apollo';
import {AllCategories_QUERY} from '../graphql/index.js';
// import CarouselComponent from '../Carousel.js'
import MainCarousel from '../MainCarousel/MainCarousel.js'
// import AllCategories from '../AllCategories/AllCategories.js'
import BedCard from '../AllCards/BedCard/BedCard'
import Banner from '../AllCards/Banner/Banner'
import SingleImage from '../SingleImage/SingleImage'
import ImageText from '../ImageText/ImageText'
import MapComponent from '../MapComponent/MapComponent'

// import Card from '../Card.js'
// import MapLocation from '../MapLocation.js'
import '../AllCategories/AllCategories.css'
import {Helmet} from "react-helmet";
            

function Home() {
    return (
        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Iqra Steel Works</title>
                <link rel="canonical" href="https://iqrasteelworks.com" />
                <meta name="description" content="" />
            </Helmet>


            <MainCarousel />

            <div className='title-main-ac' style={{color:"black"}}>Our Services</div>

            <Query query={AllCategories_QUERY}>

                {({ loading, error, data }) => {
                if (loading) return <div>Fetching</div>
                if (error)   {
                    console.log(error)
                    return <div>Error</div>}
                const items = data.allCategories
                // console.log(items);
                return (
                    <>                       
                        <BedCard data={items} />
                    </>
                )
                }}        
                
            </Query>

            <Banner />
            <SingleImage />
            <ImageText />
            <MapComponent />
        </div>
    )
}

export default Home
