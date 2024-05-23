import './App.css';
import Carol from './components/Carol';
import About from './components/About';
import Contact from './components/Contact';
import CountUpPage from './components/CountUpPage';
import FloatingBtn from './components/FloatingBtn';
import FormSection from './components/FormSection';
import Gallery from './components/Gallery';
import WhySection from './components/WhySection';
import Header from './components/Header';
import OurService from './components/OurService';
import ProjectComplete from './components/ProjectComplete';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <>
      <Header />
      <Carol />
      <About />
      <CountUpPage />
      <Gallery />
      <FormSection />
      <ProjectComplete />
      <WhySection />
      <OurService />
      <Testimonial />
      <Contact />
      <FloatingBtn />
    </>
  );
}

export default App;
