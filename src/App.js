import logo from './logo.svg';
import './App.css';
import Navbar1 from './componentes/section/Navbar1';
import Presentation from './componentes/section/Presentation';
import Projects from './componentes/section/Projects';
import Skills from './componentes/section/Skills';
import Footer from './componentes/section/Footer';
function App() {
  return (
    <div className="App">
      <Navbar1/>
      <Presentation/>
      <Skills/>
      <Projects/>
      <Footer/>

    </div>
  );
}

export default App;
