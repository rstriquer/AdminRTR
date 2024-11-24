import React from 'react';

import Header from './components/Header';
import MainSidebar from './components/MainSidebar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <MainSidebar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
