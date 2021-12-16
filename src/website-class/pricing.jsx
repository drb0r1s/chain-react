import React, { Component } from "react";
import Title from "./title/title";
import { pricingData } from "./data";
import pricingBckg from "./images/pricing-bckg.png";

class Pricing extends Component {
    render() {
        return(
            <div className="pricing" id="pricing" ref={this.props.setRef}>
                <Title
                    specialClass="pricing-title"
                >
                    we have the best pre-oder <span>prices</span> you can get
                </Title>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam dolore illo eos! Deleniti eveniet repellendus
                recusandae, illum ipsam eius error.</p>

                <div className="pricing-holder">
                    {pricingData.map((plan) => {
                        return <Plan
                            key={plan.id}
                            {...plan}
                        />
                    })}
                </div>
            </div>
        );
    }
}

class Plan extends Component {
    render() {
        const { price, name, plan, notPlan } = this.props;
        
        return(
            <div className="plan">
                <p className="plan-price">{price}</p>
                
                <div className="plan-info">
                    <strong>{name}</strong>
                
                    <img src={pricingBckg} alt="PLAN" />

                    <div className="plans">
                        {plan.map((feature) => {
                            return <p key={feature}>{feature}</p>
                        })}
                    </div>

                    <div className="not-plans">
                        {notPlan !== undefined && notPlan.map((feature) => {
                            return <p key={feature}>{feature}</p>
                        })}
                    </div>

                    <button>purchase this plan now</button>
                </div>
            </div>
        );
    }
}

export default Pricing;