import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar";
import ASideBar from './components/sidebar';
import { useState } from "react";
import clsx from "clsx";


function App() {
  const [hidden, sethidden] = useState(false);

  return (
    <>
      <section className={clsx("relative lg:grid lg:grid-cols-[300px,_1fr] min-h-[100%]", hidden && "lg:grid-cols-1")}>
     
        <ASideBar hidden= {hidden} sethidden={sethidden} />
        {!hidden && <div className="absolute lg:hidden w-screen h-screen  bg-gradient-to-b "></div>}
        <main id="main" className="w-[100%]">
          <NavBar sethidden={sethidden}  />

          <Outlet />
        </main>
      </section>
    </>
  )
}



export default App
