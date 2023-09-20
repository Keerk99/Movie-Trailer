import { Header } from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main';
import './App.css';
import { createContext, useState } from 'react';

export const searchContext = createContext();

function App() {
  const [searchKey, setSearchKey] = useState("");
  const [selectedMovie, setSelectedMovie] = useState({});

  return (
    <>
      <searchContext.Provider value={{ searchKey, setSearchKey, selectedMovie, setSelectedMovie }} >
        <Header />
        <Main />
      </searchContext.Provider>
      <Footer />
    </>
  );
}

export default App;
