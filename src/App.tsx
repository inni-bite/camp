import React from 'react';

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-500">Welcome to React + Tailwind CSS</h1>
        <p className="mt-4 text-gray-700">
          Edit <code className="bg-gray-200 p-1 rounded">src/App.tsx</code> and save to reload.
        </p>
        <a
          className="mt-6 inline-block text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;