import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";
import Main from "./components/home/Main"
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
      </main>
    </>
  )
}

export default App
