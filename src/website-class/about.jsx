import React, { Component } from "react";
import Title from "./title/title";
import aboutBckg from "./images/about-bckg.png";
import { aboutData } from "./data";

class About extends Component {
    render() {
        return(
            <div className="about" id="about" ref={this.props.setRef}>
                <div className="about-holder">
                    <div className="about-info">
                        <Title
                            specialClass="about-title"
                        >
                            about <span>what we do</span> &amp; who we are
                        </Title>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quae beatae quaerat inventore, corporis officia
                        velit.</p>

                        <div className="options">
                            {aboutData.map((option) => {
                                return <Option
                                    key={option.id}
                                    {...option}
                                />
                            })}
                        </div>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quae beatae quaerat inventore, corporis officia
                        velit.</p>

                        <button>start 14-day free trial</button>
                        <span>*no credit card required</span>
                    </div>

                    <img src={aboutBckg} alt="ABOUT" />
                </div>
            </div>
        );
    }
}

class Option extends Component {
    render() {
        const { name, description } = this.props;
        
        return(
            <div className="option">
                <strong>{name}</strong>
                <p>{description}</p>
            </div>
        );
    }
}

export default About;