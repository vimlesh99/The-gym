import './App.css';
import Footer from './component/footer/Footer';
import Hero from './component/hero/Hero';
import Join from './component/join/Join';
import Plans from './component/plans/Plans';
import Program from './component/program/Program';
import Reason from './component/reasons/Reason';
import Testimonials from './component/testimonial/Testimonials';

function App() {
  return (
    <div className="App">
         <Hero/>
         <Program/>
         <Reason/>
         <Plans/>
         <Testimonials/>
         <Join/>
         <Footer/>
    </div>
  );
}

export default App;
