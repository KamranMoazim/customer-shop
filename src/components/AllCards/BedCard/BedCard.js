import React,{useState,useEffect} from 'react';
import './BedCard.css';
import {Link} from 'react-router-dom'


const BedCard = ({data=[]}) => {

  const [workingData, setWorkingData] = useState(data)
  const [inputForEachCategory, setInputForEachCategory] = useState("")

  useEffect(()=>{
      let okData = data.filter((each,index)=>{
        if (each.name.toLowerCase().includes(inputForEachCategory.toLowerCase())){
          return (data[index])
        }
        return null
      })
      setWorkingData(okData)
      if (!inputForEachCategory) {
          setWorkingData(data)
      }
  },[inputForEachCategory, data])


  if (data.length) {
    return (
      <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
          <form className="form-horizontal" onSubmit={(e)=>{e.preventDefault()}}>
              <input type="text" className="form-control" onChange={(e) => {
                setInputForEachCategory(e.target.value)
              }} placeholder='Search By Name...' />
          </form>
      <div className='row'>
            {workingData.map((each,index)=>{
              return <div key={index} className='col-xs-12 col-sm-6 col-md-4 col-lg-3' style={{ paddingRight: '0px', marginTop:"10px" }}>
                <Link to={`/categories/:${each.name}`}>
                  <div className='wrap-card-bc' style={{marginTop:"10px"}}> 
                    <div className='container-card-bc'>
                      <div className='inner-card-bc dealing'>
                        <img src={each.image[0].url} alt='Bed' />
                        <div className='inner-card-text' style={{marginTop:"10px"}}>{each.name}</div>
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
          </div>
        </div>
      </>
    );

}

export default BedCard;