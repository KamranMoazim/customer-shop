/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import './NavBar.css'

function NavBar() {

      const [click, setClick] = useState(false);
      const [defaultClass, setDefaultClass] = useState("topnav");

      const showButton = () => {
        setClick(!click)
        if (window.innerWidth <= 800 && !click) {
        setDefaultClass("topnav responsive")
        setClick(!click)
        } else if (window.innerWidth <= 800 && click){
        setDefaultClass("topnav")
        } else {
        setDefaultClass("topnav")
        }
      };

    return (<div >
        <div className={defaultClass} style={{fontFamily:"cursive"}}>
            <a href="/" style={{borderBottom:"0", paddingRight:"70px"}}>Iqra Steel Works</a>
            {/* <div style={{fontFamily:"cursive"}}> */}
            <a href="/">Home</a>
            <a href="/categories" >Categories</a>
            <a href="/orderStatus">Order Status</a>
            <a href="/blogs">Blogs</a>
            <a href="/appointment">Appointment</a>
            <button className="icon" onClick={showButton}>&#9776;</button>
            {/* </div> */}
        </div>
        </div>
    )
}

export default NavBar
