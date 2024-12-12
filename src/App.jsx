import Navbar from "./Components/Components/Navbar";
import Home from "./Components/Components/Home";
import About from "./Components/Components/About";
import Expertise from "./Components/Components/Expertise";
import Projects from "./Components/Components/Projects";
import Footer from "./Components/Components/Footer";

export default function App() {
  return (
   <div className="bg-[#171d32] h-auto w-full overflow-hidden">
   <Navbar/>
   <Home />
   <About />
   <Expertise/>
   <Projects />
   <Footer />
   </div>
   
  )
}
