import React from 'react';
import Footer from './components/Footer'; 
import Header from './components/Header'; 
import Content from './pages/Content';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.scss';

library.add(fab)

const navTab: string[] = ["Home", "Careers", "Projects", "About"];

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
