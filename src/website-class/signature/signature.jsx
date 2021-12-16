import React, { Component } from "react";
import "./signature.css";
import borisLogo from "../images/boris-logo.png";

class Signature extends Component {
    render() {
        return(
            <div className="signature">
                <strong>&copy;2021 by drb0r1s</strong>

                <a href="https://boris.gq">
                        <img src={borisLogo} alt="B O R I S" />
                </a>

                <p>Original design: TemplateMo</p>
            </div>
        );
    }
}

export default Signature;