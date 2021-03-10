import React from 'react'
// import {BrowserRouter as Router, Switch, Route, useParams, useRouteMatch} from 'react-router-dom';
import {Carousel} from 'react-bootstrap'

function CarouselComponent({data=[]}) {

    // let { path, url } = useRouteMatch();

    if (data.length) {
        return <>
            
            {data.map((each,index)=>{
                    return (<div style={{margin:"10px"}} key={index}>
                        <Carousel >
                            {each.image.map((eachImage, index2)=>{
                                return <Carousel.Item key={index2}>
                                            <img
                                            className="d-block w-100"
                                            src={eachImage.url}
                                            alt="First slide"
                                            />
                                            <Carousel.Caption>
                                                <a href="/" style={{color:"white"}}> <h3>{each.name}</h3> </a>
                                                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                            </Carousel.Caption>
                                        </Carousel.Item>
                            })}
                        </Carousel>
                    </div>
    )})}
        </>
    }

    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://picsum.photos/500/300/?image=10"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://picsum.photos/500/300/?image=11"
                // height="500px"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://picsum.photos/500/300/?image=12"
                // height="500px"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselComponent
