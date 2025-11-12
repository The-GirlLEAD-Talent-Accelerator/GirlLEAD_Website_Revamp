import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Main from "./components/Main.jsx";
import MissionSection from "./components/MissionSection.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Actions from "./components/Actions .jsx";
import './App.css'

function App() {

  return (
    <>
      <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col">
        <div className="h-[7vh]">
          <Navbar />
        </div>
        <div className="flex-1 ">
          <Hero />
        </div>
        <Main />
        
        <Testimonial />
        <MissionSection />
        <Actions />
      </main>
    </>
  )
}

export default App
