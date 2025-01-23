import {FooterData} from "../../../data.jsx";
import axios from "axios";
import {useState} from "react";

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
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error,setError] = useState({});

    const validation = () =>{
        const newError = {};
        if (!name) newError.name = 'Name is required';
        if (!email) newError.email = 'Email is required';
        if (!message) newError.message = 'Message is required';

        setError(newError);
        return Object.keys(newError).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(validation()){
            axios.post('http://localhost:3555/feedback', {name,email,message})
            .then(result => {
                console.log(result);
                console.log(result.data);
                alert("Thank you for your feedback");
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <div className="max-sm:pt-4 lg:px-24">
            <h1 className="pb-3 text-3xl font-medium ">Contact Us</h1>
            <form action="">
                <section className="grid grid-cols-2 gap-2 pb-2">
                    <div>
                        <label htmlFor="" className="text-xl ">Name</label>
                        <input type="text" name="" id=""
                               className={`w-full h-12 rounded-xl pl-2 mt-1 outline-[#809090] bg-gray-200 ${error.name && "border-red-500"}`}
                               placeholder="Name"
                               onChange={(e) => setName(e.target.value)}
                        />
                        {error.name && (<p className="text-red-500 text-xs mt-1">{error.name}</p>)}
                    </div>
                    <aside>
                        <label htmlFor="" className="text-xl pb-2">Email</label>
                        <input type="email" name="" id=""
                               className={`w-full h-12 rounded-xl pl-2 mt-1 outline-[#809090] bg-gray-200 ${error.email && "border-red-500"}`}
                               placeholder="Email"
                               onChange={(e) => setEmail(e.target.value)}
                        />
                        {error.email && (<p className="text-red-500 text-xs mt-1">{error.email}</p>)}
                    </aside>
                </section>
                <label htmlFor="" className="text-xl pb-2">Message</label>
                <textarea name="" id="" cols="30" rows="10"
                          className={`w-full rounded-xl px-2 pt-2 mt-1 text outline-none max-h-[150px] bg-gray-200 ${error.message && "border-red-500"}`}
                          placeholder="Your message...."
                          onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {error.message && (<p className="text-red-500 text-xs mt-1">{error.message}</p>)}
                <button type="button" onClick={handleSubmit} className="w-full border-2 rounded-xl mt-3 h-12 bg-gray-500 text-white">Submit</button>
            </form>
        </div>
    )
}

export default Footer;