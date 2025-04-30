import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Footer from './Components/Footer';

const translations = {
  en: {
    data: 'Software Development Engineer at Amazon\nMcGill University Graduate',
    aboutMe: 'About Me',
    contact: 'Contact',
    projects: 'Projects',
  },
  fr: {
    data: 'Ingénieur en développement logiciel chez Amazon\nDiplômé de l\'Université McGill',
    aboutMe: 'À Propos',
    contact: 'Contact',
    projects: 'Projets',
  },
};

function Home() {
  // Initialize language from localStorage, default to English
  const [language, setLanguage] = useState(
    localStorage.getItem('language') === 'Français' ? 'fr' : 'en'
  );
  const [isAnimated, setIsAnimated] = useState(false);

  // Set document title and trigger initial animation
  useEffect(() => {
    document.title = 'Keanu Natchev | Portfolio';
    setIsAnimated(true);
  }, []);

  // Update language in localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language === 'en' ? 'English' : 'Français');
  }, [language]);

  // Get current translation based on language
  const t = translations[language];

  // Optional: Toggle language (if you want a button to switch languages)
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'fr' : 'en'));
  };

  return (
    <div className={isAnimated ? 'wrapper-home' : 'wrapper-home-white'}>
      <div className="container-home">
        <div className="user-info-home">
          <img className="profile-picture-home" alt="Profile" />
          <h1 className="user-name-element">Keanu Natchev</h1>
          <h1 className="user-info-element">
            {t.data}
          </h1>
        </div>
        <div className="menu">
          <Link className="page-link" to="/about">
            <div className="menu-element">
              <h1 className="page-name">{t.aboutMe}</h1>
            </div>
          </Link>
          {/* <Link className="page-link" to="/contact">
            <div className="menu-element">
              <h1 className="page-name">{t.contact}</h1>
            </div>
          </Link> */}
          <Link className="page-link" to="/projects">
            <div className="menu-element">
              <h1 className="page-name">{t.projects}</h1>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;