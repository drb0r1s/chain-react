import React, { Component } from "react";
import "./title.css";
import underline from "../images/underline.png";

class Title extends Component {
    render() {
        return(
            <div
                className={`title ${this.props.specialClass}`}
                id={this.props.titleId}
            >
                <h2
                    style={this.props.styling}
                >{this.props.children}</h2>
                
                <img
                    src={underline}
                    alt="underline"
                    className="underline"
                    style={this.props.uStyling}
                />
            </div>
        );
    }
}

export default Title;