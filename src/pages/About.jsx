import Navbar from "../components/Navbar";

const About = () => {
  return (
    <main className="min-h-screen bg-bg-mute text-text-main transition-colors">
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