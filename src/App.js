import './App.css';
import Carol from './components/Carol';
import Contact from './components/Contact';
import CountUpPage from './components/CountUpPage';
import FloatingBtn from './components/FloatingBtn';
import FormSection from './components/FormSection';
import Header from './components/Header';
import Testimonial from './components/Testimonial';
import WhyShakthi from './components/WhyShakthi';

function App() {
  return (
    <>
      <Header />
      <Carol />
      <CountUpPage />
      <FormSection />
      <WhyShakthi />
      <Testimonial />
      <Contact />
      <FloatingBtn />
    </>
  );
}

export default App;
