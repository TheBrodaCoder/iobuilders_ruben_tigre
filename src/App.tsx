import React from 'react';
import './App.css';
import Button from './components/utils/button/Button';

const App = () => {
  return (
    <div className="App">
      <Button text={'Log in!'} onClick={() => console.log('here i am')}/>
    </div>
  );
}

export default App;
