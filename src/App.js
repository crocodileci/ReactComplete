import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

// React 支援的Event 列表
// https://reactjs.org/docs/events.html#supported-events

// 在React 版本 > 16.8可以在function based compoent中使用useState() 來控制state
// 將Class base的Compnoent轉換成 function Based的Component的步驟
// 1. 將原本class中的state與 function 移出原本的class外
// 2. 將Class 寫法先改寫為箭頭函式，return的值為原有class based中的 render function的 return值
// 3. 將引入的Componet 物件改為使用 useState的hook
// 4. 在function中使用useState()並傳入原本的state的值作為初始值
// 5. 將useState回傳的陣列的第一個元素改回 JSX原本使用this.state開頭的變數
// 6. 並使用useState回傳的陣列的第二個元素，hook function用來改變目前的state的狀態
// 7. 將原本的click事件的handler function放入function based的component中
// 8. 將click事件中改變state的方法改使用useState回傳的陣列的第二個元素
//
// 注意：改寫的過程中，遇到了function based component的 function name需要大寫開頭
//      否則會出現以下的錯誤
//      React Hook "useState" is called in function "app" which is neither a React function component 
//      or a custom React Hook function
const App = props => {

  // useState 會回傳一個陣列
  // [0] : 目前state的值
  // [1] : 可以用來設定state的hook function
  const [ personsState, setPersonsState ] = useState({
    persons : [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  });

  console.log(personsState);

  // Switch Name 按鈕 click 事件處理函式
  const switchNameHandler = () => {
    console.log('Was Clicked!');
    // 改使用 useState回傳的 hook function來改變component的狀態
    setPersonsState({
      persons : [
        {name: 'Maximilian', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27}
      ]
    });
  }
  
  // 如果使用以下JSX語法須引入React
  // JSX 語法有兩個需要注意的地方
  // 1. 如果要指定 CSS class 只能使用className來指定，因為 class 是Javascript的關鍵字
  // 2. 只能有一個根元素，因為他是
  // 3. 新增一個button 並指定click事件的處理函式為 switchNameHandler
  //    要注意 不可以寫成 this.switchNameHandler() <= 這樣的語意為直接執行該function而不是 事件發生時才調用該function
  return (
    <div className="App">
      <h1>I'm a React App</h1>
      <p> This is really working!! </p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}

export default App;
