import {Outlet} from "react-router";
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import { LuPanelLeftOpen,LuPanelRightOpen } from "react-icons/lu";
import React from "react";

const Home = () => {
    const [isSideBarOpen,setIsSideBarOpen] = React. useState(true);
    const handleSideOpen = () => {
        setIsSideBarOpen(!isSideBarOpen);
    }

  return (
    <div className="grid lg:grid-cols-12 h-[100vh] bg-[#FAFAFA] relative">
      <aside className="max-lg:hidden lg:col-span-3 2xl:col-span-2 lg:flex-col lg:flex lg:justify-between bg-[#EFF0F1] rounded-br-3xl rounded-tr-3xl shadow-2xl">
        <article className="flex flex-col gap-24 ">
          <Header/>
          <Section/>
        </article>
      </aside>
      <section className="lg:col-span-9 2xl:col-span-10 p-10 max-sm:px-5 overflow-scroll">
          {
              <div className="flex justify-between lg:hidden">
                <div/>
                  {
                    isSideBarOpen ? <LuPanelLeftOpen className="text-3xl lg:hidden flex items-end" onClick={handleSideOpen}/> : <LuPanelRightOpen className="text-3xl flex items-end" onClick={handleSideOpen}/>
                  }
              </div>
          }
          {
             !isSideBarOpen && (
              <aside className="col-span-2 flex-col flex justify-between bg-[#EFF0F1] rounded-br-3xl rounded-tr-2xl absolute top-0 left-0 w-[280px] h-full lg:hidden">
                  <article className="flex flex-col gap-24">
                      <Header/>
                      <Section/>
                  </article>
              </aside>
          )}
          <Outlet />
      </section>
    </div>
  )
}

export default Home;