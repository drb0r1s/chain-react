import React, { Component, createRef } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import "./index.css";
import "./responsive.css";

import Loading from "./loading";
import Header from "./header";
import Reviews from "./reviews";

import { mainData, headerData } from "./data";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            appear: false,
            setAnimation: false,
            app: [],
            target: "",
            isClicked: false
        };

        this.rMenu = createRef();
    }
    
    componentDidMount() {
        window.addEventListener("scroll", this.setAppear);

        let refArray = [];

        for(let i = 0; i < 5; i++) {
            refArray.push(createRef());
        }
        
        this.setState({ app: refArray });
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.setAppear);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if(prevState.app !== this.state.app) {
            setTimeout(() => {
                this.setState({ loading: false });
            }, 1500);

            return "observe";
        }

        if(prevState.isClicked !== this.state.isClicked) return "animation";

        return false;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(snapshot === "observe") {
            const responsive = window.matchMedia("(max-width: 768px)");
            const responsiveThreshold = responsive.matches ? 0.3 : 0.5;
            
            const options = {
                threshold: responsiveThreshold
            };
            
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if(entry.isIntersecting) {
                            this.setState({ target: entry.target });
                        }
                    });
                },
                options
            );

            setTimeout(() => {
                for(let i = 0; i < this.state.app.length; i++) {
                    observer.observe(this.state.app[i].current);
                }
            }, 1500);
        }

        if(snapshot === "animation") {
            setTimeout(() => {
                if(this.state.isClicked) this.rMenu.current.id = "responsive-appear";
            }, 100);
        }
    }

    setAppear = () => {
        if(window.scrollY > 100) {
            this.setState({ appear: true });

            if(window.scrollY > 200) this.setState({ setAnimation: true });
        }
        
        if(window.scrollY === 0) this.setState({ appear: false, setAnimation: false });
    }

    setIsClicked = () => {
        this.setState({ isClicked: !this.state.isClicked });
    }
    
    render() {
        const { loading, appear, setAnimation, app, target, isClicked } = this.state;
        
        if(loading) {
            return <Loading />
        }
        
        return(
            <HelmetProvider>
                <Helmet>
                    <title>drb0r1s - Chain React</title>
                    <meta name="author" description="drb0r1s" />
                    <meta name="description" description="Chain - React Class Components Project by: drb0r1s." />
                    <meta name="keywords" description="drb0r1s, react, react class components, chain, react project" />
                </Helmet>
                
                <div className="app">
                    {isClicked && <ResponsiveMenu
                        target={target}
                        isClicked={isClicked}
                        setRef={this.rMenu}
                    />}
                
                    <Header
                        observing={target}

                        isClicked={isClicked}
                        setIsClicked={this.setIsClicked}
                    />

                    {appear && <Header
                        observing={target}
                    
                        isClicked={isClicked}
                        setIsClicked={this.setIsClicked}
                    
                        styling={{
                            background: "white",
                            position: "fixed"
                        }}

                        switchPosition={appear}
                        animation={setAnimation}
                    />}

                    {mainData.map((section, index) => {
                        if(index === 3) {
                            return(
                                <React.Fragment key={section.id}>
                                    <Reviews />
                                    <section.name setRef={app[index]} />
                                </React.Fragment>
                            );
                        }
                    
                        return <section.name
                            key={section.id}
                            setRef={app[index]}
                            startAnimation={target}
                        />
                    })}
                </div>
            </HelmetProvider>
        );
    }
}

class ResponsiveMenu extends Component {
    render() {
        const { target, setRef } = this.props;

        return(
            <div className="responsive-menu" ref={setRef}>
                <nav>
                    {headerData.map((section) => {
                        return <a
                            key={section.id}
                            href={`#${section.name}`}
                            id={
                                target.className === section.name ?
                                    "selected-section"
                                : ""
                            }
                        >{section.name}</a>
                    })}

                    <a href="#home">sign in now</a>
                </nav>
            </div>
        );
    }
}

export default Main;