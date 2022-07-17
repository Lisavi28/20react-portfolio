import { useState } from 'react';

import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  const [navLinks] = useState([
    { name: 'About'},
    { name: 'Portfolio'},
    { name: 'Contact'},
    { name: 'Resume'},
  ])

  const [selectedNavLink, setSelectedNavLink] = useState(navLinks[0].name);

  return (
    <div>
        <Nav
          navLinks={navLinks}
          selectedNavLink={selectedNavLink}
          setSelectedNavLink={setSelectedNavLink}
        />
        <main>
          {selectedNavLink === 'About' ? (
            <>
              <About />
            </>
          ) : selectedNavLink === 'Portfolio' ? (
            <>
              <Portfolio />
            </>
          ) : selectedNavLink === 'Contact' ? (
            <>
              <Contact />
            </>
          ) : (
            <>
              <Resume />
            </>
          )}
        </main>
        <Footer />
    </div>
  );
}

export default App;
