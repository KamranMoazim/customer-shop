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
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="jhfjksdh fsfhjfdh ksjhfdkjsd fkjshfkjsd fdfsd" />
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
