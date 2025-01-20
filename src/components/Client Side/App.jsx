import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";
import OurDoctors from "./pages/OurDoctors.jsx";
import HospitalGallery from "./pages/HospitalGallery.jsx";
import TrustedCompanies from "./pages/TrustedCompanies.jsx";
import {Outlet} from "react-router";

const App = () => {
    return (
        <div className="bg-[#FAFAFA]">
            <Header />
            <div className="max-w-[1400px] m-auto">
                <HospitalGallery/>
                <OurDoctors/>
                <Outlet/>
                <TrustedCompanies/>
                <Footer />
            </div>
        </div>
    )
}

export default App;