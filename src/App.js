import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

function App() {
  
  // 如果使用以下JSX語法須引入React
  // JSX 語法有兩個需要注意的地方
  // 1. 如果要指定 CSS class 只能使用className來指定，因為 class 是Javascript的關鍵字
  // 2. 只能有一個根元素，因為他是
  return (
    <div className="App">
      <h1>I'm a React App</h1>
      <p> This is really working!! </p>
      <Person />
      <Person />
      <Person />
    </div>
  );
  
  // 以上的JSX語法會被編譯成以下的程式碼，用來動態的產生對應的dom元件
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App'));
}

export default App;
