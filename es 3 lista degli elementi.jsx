import React from 'react';

function App() {
  const items = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
  
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default App;
