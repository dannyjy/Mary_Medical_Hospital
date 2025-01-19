import Header from "./components/Client Side/Header";
import Footer from "./components/Client Side/Footer";
import AboutUs from "./components/Client Side/AboutUs";
import OurDoctors from "./components/Client Side/OurDoctors.jsx";
import HospitalGallery from "./components/Client Side/HospitalGallery.jsx";
import TrustedCompanies from "./components/Client Side/TrustedCompanies.jsx";

const App = () => {
    return (
        <div className="bg-[#FAFAFA]">
            <Header />
            <div className="max-w-[1400px] m-auto">
                <HospitalGallery/>
                <OurDoctors/>
                <AboutUs />
                <TrustedCompanies/>
                <Footer />
            </div>
        </div>
    )
}

export default App;