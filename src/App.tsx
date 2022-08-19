import React from 'react';
import './App.css';
import {MainUI} from "./components/dashboard/MainUI";

export const TokenContext = React.createContext<string | null>(null);

function App() {
  return (
    <div className="App">
        <MainUI />
    </div>
  );
}

export default App;
