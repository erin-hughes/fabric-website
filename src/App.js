import React from 'react';
import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import Header from '../src/components/Header/Header';
import PageTitle from '../src/components/PageTitle/PageTitle';
import ConceptDescriptionContainer from './components/ConceptDescriptionContainer/ConceptDescriptionContainer';
import HomepageIllustration from './components/HomepageIllustration/HomepageIllustration';
import InteractiveTileContainer from './components/InteractiveTileContainer/InteractiveTileContainer';
import FooterContainer from './components/FooterContainer/FooterContainer';

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <PageTitle />
      <ConceptDescriptionContainer />
      <HomepageIllustration />
      <InteractiveTileContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
