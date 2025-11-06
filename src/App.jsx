import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Testimonial from "./components/testimonial";
import Actions from "./components/actions";
import MissionSection from "./components/MissionSection";
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
