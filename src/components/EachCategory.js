import React from 'react'
import './EachCategory.css'
import {useRouteMatch} from 'react-router-dom';
import {Chairs,ClotheRacks,PlantStands,Shelves,Sofas,Stools,Tables} from './graphql/index.js'
import { Query } from 'react-apollo';
import Card from './Card'

function EachCategory({comingQuery}) {

    // function openNav() {
    //     document.getElementById("mySidenav").style.width = "30%";
    // }
    // function closeNav() {
    //     document.getElementById("mySidenav").style.width = "0";
    // }

    let { url } = useRouteMatch();

    // console.log(url)
    
    let required = url.split(":")
    
    let newRequired = required[required.length - 1]
    
    // console.log(newRequired)


    if (newRequired.includes('Chairs')) {

      comingQuery = Chairs
      newRequired = "chairs"

    } else if (newRequired.includes('Clothe')) {

      comingQuery = ClotheRacks
      newRequired = "clotheRacks"

    } else if (newRequired.includes("Plant")) {

      comingQuery = PlantStands
      newRequired = "plantStands"

    } else if (newRequired.includes('Shelf')) {

      comingQuery = Shelves
      newRequired = "shelves"

    } else if (newRequired.includes("Sofa")) {
      // console.log("helllo")

      comingQuery = Sofas
      newRequired = "sofas"

    } else if (newRequired.includes('Stool')) {

      comingQuery = Stools
      newRequired = "stools"

    } else if (newRequired.includes("Tables")) {

      comingQuery = Tables
      newRequired = "tables"

    }


    
    // if (newRequired === "Benches") {
    //   comingQuery = Benches
    //   newRequired = newRequired.toLowerCase()
    // } else if (newRequired === "Doors") {
    //   comingQuery = Doors
    //   newRequired = newRequired.toLowerCase()
    // } else if (newRequired === "Fabrications") {
    //   comingQuery = Fabrications
    //   newRequired = newRequired.toLowerCase()
    // } else if (newRequired === "Gates") {
    //   comingQuery = Gates
    //   newRequired = newRequired.toLowerCase()
    // } else if (newRequired === "Grills") {
    //   comingQuery = Grills
    //   newRequired = newRequired.toLowerCase()
    // } else if (newRequired === "Stairs") {
    //   comingQuery = Stairs
    //   newRequired = newRequired.toLowerCase()
    // } else if (newRequired === "Railings") {
    //   comingQuery = Railings
    //   newRequired = newRequired.toLowerCase()
    // }
    // else if (newRequired === "Windows") {
    //   comingQuery = Windows
    //   newRequired = newRequired.toLowerCase()
    // } else if (newRequired === "Metallic Structures") {
    //   comingQuery = MetallicStructures
    //   newRequired = "metallicStructures"
    // } else if (newRequired === "Stands") {
    //   comingQuery = Stands
    //   newRequired = newRequired.toLowerCase()
    // }


    return (<>
    <Query query={comingQuery} >

    {({ loading, error, data }) => {

                if (loading) return <div>Fetching</div>

                if (error)   {
                    console.log(error)
                    return <div>Error</div>}

                const items = data[newRequired]

                // console.log(data)
                // console.log(items)
                // let data1 = items

                return (
                    <>

                      {/* <div className="row"> */}

                        {/* <div className="side">
                          <div id="mySidenav" className="sidenav">
                          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                          <a href="#">About</a>
                          <a href="#">Services</a>
                          <a href="#">Clients</a>
                          <a href="#">Contact</a>
                          </div>
                          <span style={{fontSize:"30px",cursor:"pointer"}} onClick={openNav}>&#9776; Sort BY:</span>
                        </div> */}

                        <div className="main">
                          <Card data={items} buttonText="Show Details" heading={newRequired} subCat={newRequired} />
                          {/* <p>o</p> */}
                        </div>

                      {/* </div> */}
                    </>
                )
                }} 



      {/* <div className="row">

        <div className="side">
          <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
          </div>
          <span style={{fontSize:"30px",cursor:"pointer"}} onClick={openNav}>&#9776; Sort BY:</span>
        </div>
        
        <div className="main">
          <Card />
        </div>

      </div> */}
    </Query>
</>
    )
}

export default EachCategory
