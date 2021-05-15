import React, { useState, useEffect } from "react";

function Page1 (){
    const [browserHeight, setBrowserHeight] = useState("100px")

    // useEffect(() => {
    //     getWindowHeight()
    // },[window.innerHeight])

    useEffect(() => {
        setBrowserHeight(window.innerHeight.toString())
    }, [])

    const getWindowHeight = () => {
        let height = window.innerHeight;
        // setBrowserHeight(height)
        console.log(height)
    }

    window.onload = function() {
        console.log("height",window.innerHeight);
        // width.innerHTML = window.innerWidth;
    };
       
    // Change values when window is resized
    window.onresize = function() {
       
        // Setting the current height & width
        // to the elements
        console.log("height resized",window.innerHeight.toString()); 
        setBrowserHeight(window.innerHeight.toString())
        // width.innerHTML = window.innerWidth;
    };

    return(
        <section className="section1-wrap" style={{height: browserHeight+"px"}}>
            <div className="overlay" style={{height: browserHeight+"px"}}>

            </div>
            <div className="content">
                <div className="sub-content" style={{height: browserHeight+"px"}}>
                    <div className="col-lg-8 col-md-6">
                        <div className="name-div">
                            <span className="subheading">Hey! I am</span>
                            <h1 className="heading">Phalgun Mittal</h1>
                            {/* <h2 className="base">I'm a Front end Developer</h2> */}
                            <div className="typewriter">
                                <div className="typewriter-text">I'm a Software Engineer.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page1;