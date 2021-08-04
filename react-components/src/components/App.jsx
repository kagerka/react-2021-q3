import React from 'react';
import Search from './search/Search';
import Card from './cards/Cards';

function App() {
  return (
    <React.StrictMode>
      <div>
        <Search />
        <Card />
      </div>
    </React.StrictMode>
  );
}

export default App;
