import Home from "./home";
import Services from "./services";
import About from "./about";
import Pricing from "./pricing";
import Newsletter from "./footer";

import icon1 from "./images/service-icon-1.png";
import icon2 from "./images/service-icon-2.png";
import icon3 from "./images/service-icon-3.png";
import icon4 from "./images/service-icon-4.png";

import footerLogo from "./images/header-logo.png";

export const mainData = [
    { id: 1, name: Home },
    { id: 2, name: Services },
    { id: 3, name: About },
    { id: 4, name: Pricing },
    { id: 5, name: Newsletter }
];

export const headerData = [
    { id: 1, name: "home" },
    { id: 2, name: "services" },
    { id: 3, name: "about" },
    { id: 4, name: "pricing" },
    { id: 5, name: "newsletter" }
];

export const servicesData = [
    {
        id: 1,
        icon: icon1,
        name: "app maintenance",
        description: "You are not allowed to redistribute this template ZIP file on any other website."
    },

    {
        id: 2,
        icon: icon2,
        name: "rocket speed of app",
        description: "You are allowed to use the Chain App Dev HTML template. Feel free to modify or edit this layout."
    },

    {
        id: 3,
        icon: icon3,
        name: "multi workflow idea",
        description: "If this template is beneficial for your work, please support us a little via PayPal. Thank you."
    },

    {
        id: 4,
        icon: icon4,
        name: "24/7 help & support",
        description: "Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg photo booth quinoa and fashion axe."
    }
];

export const aboutData = [
    {
        id: 1,
        name: "maintance problems",
        description: "lorem ipsum text"
    },

    {
        id: 2,
        name: "24/7 support & help",
        description: "lorem ipsum text"
    },

    {
        id: 3,
        name: "fixing issues about",
        description: "lorem ipsum text"
    },

    {
        id: 4,
        name: "co. development",
        description: "lorem ipsum text"
    }
];

export const reviewsData = [
    {
        id: 1,
        name: "david martino co",
        title: "financial apps",
        rate: "4.8",
        date: "30 november 2021",
        realName: "david martino",
        ceo: "ceo of david company",
        lorem: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
    },

    {
        id: 2,
        name: "jake harris nyo",
        title: "digital business",
        rate: "4.5",
        date: "29 november 2021",
        realName: "jake h. nyo",
        ceo: "ceo of digital company",
        lorem: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance."
    },

    {
        id: 3,
        name: "may catherina",
        title: "business & economics",
        rate: "4.7",
        date: "27 november 2021",
        realName: "may c.",
        ceo: "founder of catherina co.",
        lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere risus massa. Donec sollicitudin non turpis nec pellentesque. Integer pellentesque lorem vitae arcu porttitor, at fermentum lectus semper. Integer sit amet est elementum, consectetur nulla vel, vestibulum odio. Phasellus congue et ipsum nec porttitor."
    },

    {
        id: 4,
        name: "random user",
        title: "new app ecosystem",
        rate: "3.9",
        date: "24 november 2021",
        realName: "random stuff",
        ceo: "manager, digital company",
        lorem: "Aliquam erat volutpat. Ut vulputate eget purus ornare sodales. In eu congue elit. Ut scelerisque mi at mi efficitur, eget pulvinar purus mollis. Nunc sodales ligula lectus, ac efficitur libero condimentum in. Ut et viverra ipsum."
    },

    {
        id: 5,
        name: "mark amber do",
        title: "web development",
        rate: "4.3",
        date: "21 november 2021",
        realName: "mark am",
        ceo: "cto, amber do company",
        lorem: "Nam fermentum magna ac tellus facilisis, et hendrerit lorem sagittis. Vestibulum molestie, lorem sit amet ornare viverra, augue mauris iaculis sem, interdum finibus massa leo ut quam."
    }
];

export const pricingData = [
    {
        id: 1,
        price: "$12",
        name: "standard plan app",
        plan: [
            "20 tb of storage"
        ],
        notPlan: [
            "life time support",
            "premium add ons",
            "fastest network",
            "more options"
        ]
    },

    {
        id: 2,
        price: "$25",
        name: "business plan app",
        plan: [
            "50 tb of storage",
            "life time support",
            "premium add ons",
        ],
        notPlan: [
            "fastest network",
            "more options"
        ]
    },

    {
        id: 3,
        price: "$66",
        name: "premium plan app",
        plan: [
            "120 tb of storage",
            "life time support",
            "premium add ons",
            "fastest network",
            "more options"
        ]
    }
];

export const footerData = [
    {
        id: 1,
        name: "contact us",
        content: {
            text: "Rio de Janeiro - RJ, 22795-008, Brazil",
            buttons: [
                "010-020-0340",
                "info@company.co"
            ]
        }
    },

    {
        id: 2,
        name: "about us",
        content: {
            buttons: [
                "home", "services", "about", "testimonials",
                "pricing", "about", "tesimonials", "pricing"
            ]
        }
    },

    {
        id: 3,
        name: "useful links",
        content: {
            buttons: [
                "free apps", "app engine", "programming",
                "development", "app news", "app dev team",
                "digital web", "normal apps"
            ]
        }
    },

    {
        id: 4,
        name: "about our company",
        content: {
            image: footerLogo,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        }
    }
];