import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component{

  state = {
    persons : [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  }

  // Switch Name 按鈕 click 事件處理函式
  switchNameHandler = () => {
    console.log('Was Clicked!');
  }
  
  // 如果使用以下JSX語法須引入React
  // JSX 語法有兩個需要注意的地方
  // 1. 如果要指定 CSS class 只能使用className來指定，因為 class 是Javascript的關鍵字
  // 2. 只能有一個根元素，因為他是
  // 3. 新增一個button 並指定click事件的處理函式為 switchNameHandler
  //    要注意 不可以寫成 this.switchNameHandler() <= 這樣的語意為直接執行該function而不是 事件發生時才調用該function
  render(){
    return (
      <div className="App">
        <h1>I'm a React App</h1>
        <p> This is really working!! </p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
  
  // 以上的JSX語法會被編譯成以下的程式碼，用來動態的產生對應的dom元件
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App'));
}

export default App;
