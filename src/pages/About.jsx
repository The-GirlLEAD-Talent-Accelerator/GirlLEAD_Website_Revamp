import Navbar from "../components/Navbar";

const About = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <div className="h-[7vh]">
          <Navbar />
        </div>
        <div className="py-10 mx-auto max-w-7xl px-6">
            About page
        </div>
        
    </main>
  )
}

export default About