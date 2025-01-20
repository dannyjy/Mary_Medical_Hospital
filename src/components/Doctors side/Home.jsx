import {Outlet} from "react-router";
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import { LuPanelLeftOpen,LuPanelRightOpen } from "react-icons/lu";
import React from "react";

const Home = () => {
    const [isSideBarOpen,setIsSideBarOpen] = React.useState(false);
    const handleSideOpen = () => {
        setIsSideBarOpen(!isSideBarOpen);
    }
    React.useEffect(() =>{
        let handler = () => {
            setIsSideBarOpen(false)
        }
        document.addEventListener('mousedown', handler)
    })

  return (
    <div className="grid lg:grid-cols-12 h-[100vh] bg-[#FAFAFA]">
      <aside className="max-lg:hidden lg:col-span-3 2xl:col-span-2 lg:flex-col lg:flex lg:justify-between p-8 bg-[#EFF0F1] rounded-br-3xl rounded-tr-2xl">
        <article className="flex flex-col gap-24 ">
          <Header/>
          <Section/>
        </article>
      </aside>
      <section className="lg:col-span-9 2xl:col-span-10 p-10 max-sm:px-5">
          {
              isSideBarOpen ? <LuPanelLeftOpen className="text-3xl lg:hidden" onClick={handleSideOpen}/> : <LuPanelRightOpen className="text-3xl lg:hidden" onClick={handleSideOpen}/>
          }
          {
             !isSideBarOpen &&
              <aside className="col-span-2 flex-col flex justify-between p-8 bg-[#EFF0F1] rounded-br-3xl rounded-tr-2xl absolute top-[70px] left-0 w-[280px] h-full lg:hidden">
                  <article className="flex flex-col gap-24">
                      <Header/>
                      <Section/>
                  </article>
              </aside>
          }
        <Outlet />
      </section>
    </div>
  )
}

export default Home;