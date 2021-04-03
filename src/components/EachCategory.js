import React from 'react'
import './EachCategory.css'
import {useRouteMatch} from 'react-router-dom';
import {Chairs,ClotheRacks,PlantStands,Shelves,Sofas,Stools,CenterTables,ConsoleTables,SideTables,StudyAndOfficeTables} from './graphql/index.js'
import { Query } from 'react-apollo';
import Card2 from './Card2'


let sendingSeoDesc=""
let heading = ""

function EachCategory({comingQuery}) {

    let { url } = useRouteMatch();

    // console.log(url)
    
    let required = url.split(":")
    let newRequired = required[required.length - 1]
    
    // console.log(newRequired)

    if (newRequired.includes('Chairs')) {

      comingQuery = Chairs
      newRequired = "chairs"
      heading = "chairs"
      sendingSeoDesc = " Chairs Chairs Chairs Chairs Chairs Chairs Chairs Chairs Chairs Chairs Chairs Chairs Chairs Chairs Chairs Chairs Chairs Chairs Chairs Chairs Chairs "

    } else if (newRequired.includes('Clothe')) {

      comingQuery = ClotheRacks
      newRequired = "clotheRacks"
      heading = "clothe Racks"
      sendingSeoDesc = "ClotheRacks ClotheRacks ClotheRacks ClotheRacks ClotheRacks ClotheRacks ClotheRacks ClotheRacks ClotheRacks ClotheRacks ClotheRacks ClotheRacks "

    } else if (newRequired.includes("Plant")) {

      comingQuery = PlantStands
      newRequired = "plantStands"
      heading = "plant Stands"
      sendingSeoDesc = "PlantStands PlantStands PlantStands PlantStands PlantStands PlantStands PlantStands PlantStands PlantStands PlantStands PlantStands PlantStands "

    } else if (newRequired.includes('Shelf')) {

      comingQuery = Shelves
      newRequired = "shelves"
      heading = "shelves"
      sendingSeoDesc = ""

    } else if (newRequired.includes("Sofa")) {

      comingQuery = Sofas
      newRequired = "sofas"
      heading = "sofas"
      sendingSeoDesc = ""

    } else if (newRequired.includes('Stool')) {

      comingQuery = Stools
      newRequired = "stools"
      heading = "stools"
      sendingSeoDesc = ""

    } else if (newRequired.includes("Center")) {

      comingQuery = CenterTables
      newRequired = "centerTables"
      heading = "center Tables"
      sendingSeoDesc = ""

    } else if (newRequired.includes("Console")) {

      comingQuery = ConsoleTables
      newRequired = "consoleTables"
      heading = "console Tables"
      sendingSeoDesc = ""

    } else if (newRequired.includes("Side")) {

      comingQuery = SideTables
      newRequired = "sideTables"
      heading = "side Tables"
      sendingSeoDesc = ""

    } else if (newRequired.includes("Study")) {

      comingQuery = StudyAndOfficeTables
      newRequired = "studyAndOfficeTables"
      heading = "study And Office Tables"
      sendingSeoDesc = ""

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


    return (<React.Fragment>
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
                    <React.Fragment>

                        <div className="main">
                          <Card2 data={items} buttonText="Show Details" heading={heading} subCat={newRequired} seoDesc={sendingSeoDesc} />
                        </div>

                    </React.Fragment>
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
</React.Fragment>
    )
}

export default EachCategory
