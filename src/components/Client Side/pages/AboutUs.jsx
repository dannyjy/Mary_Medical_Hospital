import {AboutUsData} from "../../../data.jsx";
import {useLocation} from "react-router-dom";
import ContextHeader from "../../../ui/ContextHeader.jsx";
import {useEffect} from "react";

const AboutUs = () => {
    const location = useLocation();
    useEffect(() => {
        const aboutUsSection = document.getElementById("aboutUsSection");
        if (aboutUsSection) {
            aboutUsSection.scrollIntoView({behavior: "smooth"});
        }
    }, [location]);

    return (
        <div className="grid justify-items-center px-5 lg:px-8 py-8" id="aboutUsSection">
            <ContextHeader
                heading="About Us"
                Deatails="
                    No one shall be subjected to arbitrary arrest, detention or exile. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him.
                "
            />
            <section>
                {
                    AboutUsData.map((item, index) => (
                        <AboutUsComponent key={index} headerDescription={item.header} content={item.content} />
                    ))
                }
            </section>
        </div>
    )
}

// eslint-disable-next-line react/prop-types
const AboutUsComponent = ({headerDescription, content}) => {
    return (
        <div className="py-2">
            <h2 className="text-3xl">{headerDescription}</h2>
            <p className="text-xl">{content}</p>
        </div>
    )
}

export default AboutUs;