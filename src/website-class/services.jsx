import React, { Component } from "react";
import Title from "./title/title";
import servicesBckg from "./images/services-bckg2.png";
import { servicesData } from "./data";

class Services extends Component {
    render() {
        const { startAnimation, setRef } = this.props;
        
        const checkAnimation = startAnimation.className === "services" ? "services-animation" : "";
        
        return(
            <div className="services" id="services" ref={setRef}>
                <Title
                    specialClass="special-title services-title"
                    titleId={checkAnimation}
                >
                    amazing <span>services &amp; features</span> for you
                </Title>

                <p
                    className="main-p"
                    id={checkAnimation}
                >Lorem ipsum dolor sit amet <span>consectetur adipisicing
                elit</span>. Sit, dignissimos dolorum.<span>Fugiat quos,
                fuga cumque reiciendis</span> ab saepe eligendi
                fugit neque error. Cum voluptas repudiandae, sit neque
                aspernatur obcaecati, mollitia incidunt consectetur minima quos,
                reiciendis porro. Ipsum <span>libero inventore</span> consequatur.</p>
            
                <div className="list">
                    {servicesData.map((service) => {
                        return <Service
                            key={service.id}
                            {...service}
                        />
                    })}

                    <img src={servicesBckg} alt="" id="absolute-img"/>
                </div>
            </div>
        );
    }
}

class Service extends Component {
    render() {
        const { icon, name, description } = this.props;
        
        return(
            <div className="service">
                <img src={icon} alt={name} />

                <strong>{name}</strong>
                <p>{description}</p>

                <button>read more <span>-&gt;</span></button>
            </div>
        );
    }
}

export default Services;