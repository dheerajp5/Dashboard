import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar";
import ASideBar from './components/sidebar';


function App() {
  return (
    <>
      <section className="grid grid-cols-12 min-h-[100%]">
        <ASideBar />
        <main id="main" className="col-span-12 sm:col-span-9 min-h-[100vh] ">
          <NavBar />

          <Outlet />
        </main>
      </section>
    </>
  )
}

export default App
