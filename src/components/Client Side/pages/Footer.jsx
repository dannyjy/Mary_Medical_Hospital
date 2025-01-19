import {FooterData} from "../../data.js";

const Footer = () => {
    return (
        <div className="grid sm:grid-cols-2 px-5 py-14 bg-[#F4F5F5] rounded-t-xl lg:px-24">
            <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-10 col-span-1">
                {
                 FooterData.map((item, i) => (
                    <FooterLinks key={i} footerHeading={item.footerHeader} Link1={item.link1} Link2={item.link2} Link3={item.link3} Link4={item.link4}/>
                 ))
                }
            </section>
            <Form className="col-span-1"/>
        </div>
    )
}

// eslint-disable-next-line react/prop-types
const FooterLinks = ({footerHeading,Link1,Link2,Link3,Link4}) => {
    return (
        <div>
            <h2 className="text-[1.5rem] font-medium">{footerHeading}</h2>
            <ul>
                <li className="text-xl ">{Link1}</li>
                <li className="text-xl ">{Link2}</li>
                <li className="text-xl ">{Link3}</li>
                <li className="text-xl ">{Link4}</li>
            </ul>
        </div>
    )
}

const Form = () =>{
    return (
        <div className="max-sm:pt-4 lg:px-24">
            <h1 className="pb-3 text-3xl font-medium ">Contact Us</h1>
            <form action="">
                <section className="grid grid-cols-2 gap-2 pb-2">
                    <div>
                        <label htmlFor="" className="text-xl ">Name</label>
                        <input type="text" name="" id="" className="w-full h-12 rounded-xl pl-2 mt-1 outline-[#809090]" placeholder="Name"/>
                    </div>
                    <aside>
                        <label htmlFor="" className="text-xl pb-2">Email</label>
                        <input type="email" name="" id="" className="w-full h-12 rounded-xl pl-2 mt-1 outline-[#809090]" placeholder="Email"/>
                    </aside>
                </section>
                <label htmlFor="" className="text-xl pb-2">Message</label>
                <textarea name="" id="" cols="30" rows="10" className="w-full rounded-xl px-2 pt-2 mt-1 text outline-none" placeholder="Your message...."></textarea>
                <button type="submit" className="w-full border-2 rounded-xl mt-3 h-12 bg-gray-500 text-white">Submit</button>
            </form>
        </div>
    )
}

export default Footer;