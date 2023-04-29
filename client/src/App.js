import { useState } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import "./styles/_utils.scss";
import "./styles/App.scss";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: "저녁먹기",
      done: false,
    },
    {
      id: 2,
      title: "리액트 공부",
      done: false,
    },
    {
      id: 3,
      title: "잠자기",
      done: true,
    },
  ]);

  // Todo 추가하는 함수
  const addItem = (newItem) => {
    // newItem => { title: 'xxx' }
    newItem.id = todoItems.length + 1;
    newItem.done = false;
    // newItem => { title: 'xxx', id: n, done: false }

    setTodoItems([...todoItems, newItem]);
  };

  // Todo 삭제하는 함수
  const deleteItem = (targetItem) => {
    // targetItem => { title: 'xxx', id: n, done: false }
    // 1. filter()
    // : targetItem의 id 와 todoItems state의 id가 같지 않은 애들을 새로운 배열로 반환
    const newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    // 2. state 변경
    setTodoItems(newTodoItems);
  };

  return (
    <div className="App">
      <h1>Todo-List</h1>
      {/* todo 추가 input */}

      {/* todo 목록 보이기 */}
      {todoItems.map((item) => {
        return <Todo key={item.id} item={item} deleteItem={deleteItem} />;
      })}
      <br />
      <AddTodo addItem={addItem} />
    </div>
  );
}

export default App;
