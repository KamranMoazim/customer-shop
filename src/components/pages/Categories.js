import React from 'react'
import { Query } from 'react-apollo';
import {AllCategories_QUERY} from '../graphql/index.js';
// import ReactHtmlParser from 'react-html-parser';
import Card from '../Card.js'

import {Helmet} from "react-helmet";

function Categories() {
    return (<>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Iron Metal Steel Brass Categories</title>

                <meta name="description" content="Iqra Steel Works deals in all kind of Modern Iron, Steel, Brass and Lofty Furniture in Lahore. Iqra Steel Works makes the Quality Iron, Steel and Brass Items and Furniture which Decor your Home in a Unique way to make your House a Home " />

                <meta name="keywords" content="Iron Furniture Brass Furniture Steel Furniture Modern Furniture Iron Gates Iron Sofa Outdoor furniture in Lahore Garden Furniture " />

                {/* for Facebook */}
                <meta name="og:title" content="Iqra Steel Works Categories" />
                <meta name="og:description" content="Iqra Steel Works deals in all kind of Modern Iron, Steel, Brass and Lofty Furniture in Lahore. Iqra Steel Works makes the Quality Iron, Steel and Brass Items and Furniture which Decor your Home in a Unique way to make your House a Home " />
                <meta name="og:image" content="https://iqrasteelworks.com/static/media/logo.59601ea7.png" />
                <meta name="og:url" content="https://iqrasteelworks.com" />

                {/* for Twitter */}
                <meta name="twitter:title" content="Iqra Steel Works Categories" />
                <meta name="twitter:description" content="Iqra Steel Works deals in all kind of Modern Iron, Steel, Brass and Lofty Furniture in Lahore. Iqra Steel Works makes the Quality Iron, Steel and Brass Items and Furniture which Decor your Home in a Unique way to make your House a Home " />
                <meta name="twitter:image" content="https://iqrasteelworks.com/static/media/logo.59601ea7.png" />
                
            </Helmet>

        <Query query={AllCategories_QUERY}>

            {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error)   {
                console.log(error)
                return <div>Error</div>}
            const items = data.allCategories
            // console.log(items)
            return <Card data={items} />
            }}        

        </Query>
        </>
    )
}

export default Categories
