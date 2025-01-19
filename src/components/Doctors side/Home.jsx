import {Outlet} from "react-router";
import {Link} from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import Footer from "./components/Footer.jsx";

const Home = () => {
  return (
    <div className="grid lg:grid-cols-12 max-lg:grid-rows-10 h-[100vh] bg-[#808090]">
      <aside className="row-end-1 row-span-1 lg:col-span-2 lg:flex-col lg:flex lg:justify-between lg:p-3 xl:p-8 bg-gray-500 rounded-br-3xl rounded-tr-2xl">
        <article className="flex flex-col gap-24">
          <Header/>
          <Section/>
        </article>
        <Footer/>
      </aside>
      <section className="max-lg:row-start-1 max-lg:row-span-9 lg:col-span-10">
        <Outlet />
      </section>
    </div>
  )
}

export default Home;