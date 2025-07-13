import HeroSection from '../components/HeroSection';
import Green from '../components/Green';
import Footer from '../components/Footer';

function Home() {
  return (    
    <div>
      <style>
        {`
          .page-reveal {
            clip-path: circle(0% at 50% 50%);
            transition: clip-path 1.2s ease-in-out;
          }

          .page-reveal.reveal {
            clip-path: circle(150% at 50% 50%);
          }
        `}
      </style>

      <div className="page-reveal reveal mt-5">
        <HeroSection />
        <Green/>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
