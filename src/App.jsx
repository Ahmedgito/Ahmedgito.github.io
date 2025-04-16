import './App.css';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import Home from './section/home/Homebg';
import Navbar from './section/navbar/Navbar';
import Portfolio from './section/portfolio/Portfolio';
import Top from "./components/Top";
import LoadingScreen from "./components/Loadingscreen";
import { useState } from 'react';
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Muhammad Ahmed's portfolio website showcasing full stack web development, React, Node.js, and modern web technologies." />
        <meta name="keywords" content="M.Ahmed, Full Stack Developer, React, JavaScript, Portfolio, Web Development, Node.js, MERN Stack, Vite, Tailwind CSS" />
        <meta name="author" content="Muhammad Ahmed" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="M.Ahmed - Full Stack Web Developer Portfolio" />
        <meta property="og:description" content="Explore Muhammad Ahmed's full stack web development portfolio, showcasing projects built with React, Node.js, and modern technologies." />
        <meta property="og:image" content="/og.jpg" /> {/* Replace with actual OG image path */}
        <meta property="og:url" content="https://yourdomain.com" /> {/* Replace with actual URL */}
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="M.Ahmed - Full Stack Web Developer Portfolio" />
        <meta name="twitter:description" content="Muhammad Ahmed's portfolio showcasing full stack web development and his expertise in React, Node.js, Vite, and more." />
        <meta name="twitter:image" content="/og.jpg" /> {/* Replace with actual image */}

        {/* Page Title */}
        <title>M.Ahmed - Full Stack Web Developer Portfolio</title>
        
        {/* JSON-LD Schema for Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "M.Ahmed",
              "alternateName": "Muhammad Ahmed",
              "url": "https://yourdomain.com", 
              "image": "https://yourdomain.com/og.jpg", 
              "jobTitle": "Full Stack Web Developer",
              "sameAs": [
                "https://github.com/Ahmedgito",
                "https://www.linkedin.com/in/m-ahmedd390/"
              ],
              "description": "M.Ahmed is a full stack web developer skilled in building responsive and performant web applications using React, Node.js, and modern web technologies.",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance / Self-employed"
              }
            }
          `}
        </script>
      </Helmet>

      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
    
      <Navbar />

      <Home
        particleColors={['#ffffff', '#ffffff']}
        particleCount={300}
        particleSpread={20}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      <Portfolio />
      <div className='md:block hidden'>
      <Top/>
      </div>
      </div>
    </>
  );
}

export default App;
