import React, { Component } from "react";
import bckgImage from "./images/home-bckg-2.png";

class Home extends Component {
    render() {
        const { startAnimation, setRef } = this.props;
        
        const checkAnimation = startAnimation.className === "home" ? "home-animation" : "";
        
        return(
            <div
                className="home"
                id="home"
                ref={setRef}
            >
                <div className="home-holder">
                    <div
                        className="info"
                        id={checkAnimation}
                    >
                        <h1>get the latest app from app stores</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ut esse molestias? Tempora exercitationem soluta, natus est voluptatibus placeat cum.</p>
                    
                        <div className="button-holder">
                            <button>free quote</button>
                            <button>free quote</button>
                        </div>
                    </div>

                    <img
                        src={bckgImage}
                        alt="PHONE"
                        id={checkAnimation}
                    />
                </div>
            </div>
        );
    }
}

export default Home;