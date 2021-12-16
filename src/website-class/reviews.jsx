import React, { Component } from "react";
import Title from "./title/title";
import { reviewsData } from "./data";
import reviewer from "./images/reviews-person.jpg";

class Reviews extends Component {
    constructor(props) {
        super(props);

        this.state = { clicked: reviewsData[0], animation: false };
        this.isClicked = this.isClicked.bind(this);
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if(
            prevState.clicked !== this.state.clicked &&
            !this.state.animation
        ) {
            this.setState({ animation: true });
            return true;
        }

        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(snapshot !== null) {
            setTimeout(() => {
                this.setState({ animation: false });
            }, 500);
        }
    }
    
    isClicked(person) {
        this.setState({ clicked: person });
    }
    
    render() {
        return(
            <div className="reviews">
                <Title
                    specialClass="reviews-title"
                >
                    check what <span>the clients say</span> about our app dev
                </Title>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Optio quibusdam velit quas fuga adipisci quisquam repudiandae
                cumque suscipit voluptas autem?</p>

                <div className="reviews-holder">
                    <div className="people">
                        {reviewsData.map((person) => {
                            return <Person
                                key={person.id}
                                {...person}
                                isClicked={() => this.isClicked(person)}
                                clicked={this.state.clicked}
                            />
                        })}
                    </div>

                    <div
                        className="people-info"
                        id={this.state.animation ? "animation" : ""}
                    >
                        <div className="info-holder">
                            <span>,,</span>
                            <p>{!this.state.animation && this.state.clicked.lorem}</p>
                        </div>

                        <div className="info-profile">
                            <img src={reviewer} alt="person" />

                            <div className="info-text">
                                <strong>{!this.state.animation && this.state.clicked.realName}</strong>
                                <p>{!this.state.animation && this.state.clicked.ceo}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Person extends Component {
    constructor(props) {
        super(props);

        this.state = { rate: "" };
        this.setRate = this.setRate.bind(this);
    }
    
    componentDidMount() { this.setRate(this.props.rate) }
    
    setRate(x) {
        let collector = "";
        
        for(let i = 0; i < parseInt(x); i++) {
            collector += "+";
        }

        this.setState({ rate: collector });
    }
    
    render() {
        const { name, title, rate, date, isClicked, clicked } = this.props;

        const defBlue = "#3ba3ed";
        const clickedColor = clicked.name === name ? { color: defBlue } : { color: "black" };
        
        return(
            <div
                className="person"
                onClick={isClicked}
            >
                <div className="person-title">
                    <strong
                        style={clickedColor}
                    >{name}</strong>
                    <p>{date}</p>
                </div>

                <p>{title}</p>
                
                <div className="person-rate">
                    <p style={clickedColor}>{this.state.rate}</p>
                    <p style={clickedColor}>{rate}</p>
                </div>
            </div>
        );
    }
}

export default Reviews;