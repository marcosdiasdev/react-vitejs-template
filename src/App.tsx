import { useState } from 'react';
import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full max-w-xl my-0 mx-auto p-2 text-center">
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="h-24 p-6 hover:drop-shadow-[0_0_1em_#646cffaa]" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-24 p-6 hover:drop-shadow-[0_0_1em_#61dafbaa]" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="flex flex-col items-center gap-2 p-8">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-slate-400">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
