import Header from "./components/Client Side/Header";
import Footer from "./components/Client Side/Footer";
import AboutUs from "./components/Client Side/AboutUs";
import OurDoctors from "./components/Client Side/OurDoctors.jsx";
import HospitalGallery from "./components/Client Side/HospitalGallery.jsx";
import TrustedCompanies from "./components/Client Side/TrustedCompanies.jsx";

const App = () => {
    return (
        <div>
            <Header />
            <HospitalGallery/>
            <OurDoctors/>
            <AboutUs />
            <TrustedCompanies/>
            <Footer />
        </div>
    )
}

export default App;