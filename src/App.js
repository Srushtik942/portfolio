
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonals from "./components/Testimonals";
import Contact from "./components/Contact";

function App(){
return(
 <main className="text-gray-400 bg-gray-900">
  <Navbar/>
  <About/>
  <Projects/>
  <Skills/>
  <Testimonals/>
  <Contact/>

 </main>
)
}
export default App;