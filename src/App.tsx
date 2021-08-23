import React from 'react';
import './App.css';
import TextInput from './components/utils/TextInput/TextInput';

const App = () => {
  return (
    <div className="App">
      <TextInput placeholderText='username' name='username'/>
    </div>
  );
}

export default App;
