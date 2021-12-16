import React, { Component, createRef } from "react";
import { headerData } from "./data";
import headerLogo from "./images/header-logo.png";
import rMenu from "./images/header-rmenu.svg";
import rX from "./images/header-x.svg";

class Header extends Component {
    render() {
        const { styling, switchPosition, animation, observing, isClicked, setIsClicked } = this.props;
        
        const responsive = window.matchMedia("(max-width: 1024px)");
        
        return(
            <header
                style={styling}
                className={switchPosition ? "menu" : ""}
                id={animation ? "menu-animation" : ""}
            >
                <div className="header-holder">
                    <a href="#home" id="logo">
                        <img src={headerLogo} alt="LOGO" />
                    </a>

                    {responsive.matches ?
                        <ResponsiveMenu
                            isClicked={isClicked}
                            setIsClicked={setIsClicked}
                        />
                    : <ClassicMenu observing={observing} />
                    }
                </div>
            </header>
        );
    }
}

class ClassicMenu extends Component {
    render() {
        const { observing } = this.props;

        return(
            <nav>
                {headerData.map((section) => { 
                    return <a
                        key={section.id}
                        href={`#${section.name}`}
                        id={
                            observing.className === section.name ?
                                "selected-section"
                            : ""
                        }
                    >{section.name}</a>
                })}

                <a href="#home">sign in now</a>
            </nav>
        );
    }
}

class ResponsiveMenu extends Component {
    constructor(props) {
        super(props);
        
        this.state = { imgHref: rMenu };
        this.imgRef = createRef();
    }
    
    getSnapshotBeforeUpdate(prevProps) {
        if(prevProps.isClicked !== this.props.isClicked) return true;
        return false;
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(snapshot) {
            this.imgRef.current.id = "responsive-button";

            const setIcon = this.props.isClicked ? rX : rMenu;
            
            setTimeout(() => {
                this.imgRef.current.id = "";
                this.setState({ imgHref: setIcon });
            }, 150);
        }
    }
    
    render() {
        const { setIsClicked } = this.props;
        const { imgHref } = this.state;
        
        return(
            <button
                onClick={setIsClicked}
            >
                <img src={imgHref} alt="MENU" ref={this.imgRef} />
            </button>
        );
    }
}

export default Header;