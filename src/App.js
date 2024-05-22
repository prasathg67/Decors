import './App.css';
import Carol from './components/Carol';
import Contact from './components/Contact';
import CountUpPage from './components/CountUpPage';
import FloatingBtn from './components/FloatingBtn';
import FormSection from './components/FormSection';
import Gallery from './components/Gallery';
import Header from './components/Header';
import OurService from './components/OurService';
import ProjectComplete from './components/ProjectComplete';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <>
      <Header />
      <Carol />
      <FormSection />
      <Gallery />
      <ProjectComplete />
      <OurService />
      <CountUpPage />
      <Testimonial />
      <Contact />
      <FloatingBtn />
    </>
  );
}

export default App;
