// App.js
import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import Gallery from './components/Gallery';
import './style.css';

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Image />
      <h1>Галерея товарів</h1>
      <Gallery />
    </div>
  );
}

export default App;
