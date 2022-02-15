import './App.css';
import Navigation from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import React from 'react';

function App() {
  const msj = "a su tienda un millon de ilusiones...!";
  return (
    <>
      <div className="App">
        <Navigation />
        <header className='App-header'>
          <ItemListContainer greeting={msj} />
        </header>
      </div>
    </>
    
  );
}

export default App;
