import React, { Component } from "react";
import { footerData } from "./data";
import Signature from "./signature/signature";

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = { email: "", address: "" };
        this.submitEmail = this.submitEmail.bind(this);
    }

    submitEmail(event) {
        event.preventDefault();

        this.setState({ address: this.state.email });
        this.setState({ email: "" });

        setTimeout(() => {
            this.setState({ address: "" });
        }, 3000);
    }
    
    render() {
        return(
            <footer className="newsletter" id="newsletter" ref={this.props.setRef}>
                <h3>join our mailing list to receive the news &amp; latest trends</h3>
            
                <form onSubmit={this.submitEmail}>
                    <input
                        type="email"
                        id="email"
                        placeholder="email address..."
                        value={this.state.email}
                        onChange={(event) => this.setState({
                            email: event.target.value
                        })}
                    />

                    <button>subscribe now &gt;</button>
                </form>

                {this.state.address && <strong>subscribed! email address: <span>{this.state.address}</span></strong>}
            
                <div className="footer-holder">
                    {footerData.map((section) => {
                        return <Section
                            key={section.id}
                            {...section}
                        />
                    })}
                </div>

                <Signature />
            </footer>
        );
    }
}

class Section extends Component {
    render() {
        const { name, content } = this.props;
        const { image, text, buttons } = content;

        return(
            <div className="section">
                <h4>{name}</h4>

                {image !== undefined && <img src={image} alt="LOGO" />}
                {text !== undefined && <p>{text}</p>}

                {buttons !== undefined && buttons.map((button, index) => {
                    return <a
                        key={index}
                        href="#home"
                    >{button}</a>
                })}
            </div>
        );
    }
}

export default Footer;