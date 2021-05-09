import React, { useState, useEffect } from "react";
import '../assets/scss/Navbar.scss';

function Navbar() {

    useEffect(() => {
    //     var navbar = document.getElementById("navbar");
    // var sticky = document.getElementById("navbar").offsetTop;
    console.log("dekho",document.getElementById("navbar").offsetTop)
    },[])

    window.onscroll = function() {myFunction()};

    // var navbar = document.getElementById("navbar");
    // var sticky = navbar.offsetTop;
    
    // function myFunction() {
    //   if (window.pageYOffset >= document.getElementById("navbar").offsetTop) {
    //     document.getElementById("navbar").classList.add("sticky")
    //   } else {
    //     document.getElementById("navbar").classList.remove("sticky");
    //   }
    // }

    function myFunction() {
        if (window.pageYOffset >= document.getElementById("navbar").offsetTop && window.pageYOffset >= window.innerHeight) {
          document.getElementById("navbar").classList.add("sticky")
        } else {
          document.getElementById("navbar").classList.remove("sticky");
        }
      }

    return (
        // <React.Fragment>
            <div id="navbar" className="navbar-div">
                <div className="navbar-items">
                    <div className="navbar-brand">
                        <p>Phalgun</p> 
                    </div>
                    <div className="navbar-list">
                        <ul className="navbar-list-items">
                            <li><p>Home</p></li>
                            <li><p>About</p></li>
                            <li><p>Resume</p></li>
                            <li><p>Services</p></li>
                            <li><p>Projects</p></li>
                            <li><p>My Blog</p></li>
                            <li><p>Contacts</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        // </React.Fragment>
    )
}

export default Navbar;