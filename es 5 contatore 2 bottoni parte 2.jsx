import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Contatore: ${count}`;
  }, [count]);
  
  return (
    <div>
      <p>Contatore: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementa</button>
      <button onClick={() => setCount(count - 1)}>Decrementa</button>
    </div>
  );
}

export default App;
