import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Contatore: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementa</button>
      <button onClick={() => setCount(count - 1)}>Decrementa</button>
    </div>
  );
}

export default App;
