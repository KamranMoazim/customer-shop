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

                <link rel="canonical" href="http://iqrasteelworks.com/" />

                <meta name="description" content="Iqra Steel Works deals in all kind of Modern Iron, Steel, Brass and Lofty Furniture in Lahore. Iqra Steel Works makes the Quality Iron, Steel and Brass Items and Furniture which Decor your Home in a Unique way to make your House a Home " />

                <meta name="keywords" content="Iron Furniture Brass Furniture Steel Furniture Modern Furniture Iron Gates Iron Sofa Outdoor furniture in Lahore Garden Furniture " />

                {/* for Facebook */}
                <meta name="og:title" content="Iqra Steel Works" />
                <meta name="og:description" content="Iqra Steel Works deals in all kind of Modern Iron, Steel, Brass and Lofty Furniture in Lahore. Iqra Steel Works makes the Quality Iron, Steel and Brass Items and Furniture which Decor your Home in a Unique way to make your House a Home " />
                <meta name="og:image" content="https://iqrasteelworks.com/static/media/logo.59601ea7.png" />
                <meta name="og:url" content="https://iqrasteelworks.com" />

                {/* for Twitter */}
                <meta name="twitter:title" content="Iqra Steel Works" />
                <meta name="twitter:description" content="Iqra Steel Works deals in all kind of Modern Iron, Steel, Brass and Lofty Furniture in Lahore. Iqra Steel Works makes the Quality Iron, Steel and Brass Items and Furniture which Decor your Home in a Unique way to make your House a Home " />
                <meta name="twitter:image" content="https://iqrasteelworks.com/static/media/logo.59601ea7.png" />
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
                    <React.Fragment>                       
                        <BedCard data={items} />
                    </React.Fragment>
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
