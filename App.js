import './App.css';
import About from './component/About';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Store from './component/Store';
import Testimonal from './component/Testimonal';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Store />
      <About/>
      <Testimonal/>
      <Footer/>
    </div>
  );
}

export default App;
