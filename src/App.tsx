import React from 'react';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Content from './pages/Content'; 
import './App.css';

const navTab: string[] = ["Home", "Projects", "About"];

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Header title={"Richard Portfolio"} text={navTab}/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
