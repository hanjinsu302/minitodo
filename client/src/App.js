import { useState, useEffect } from "react";
import { API_BASE_URL } from "./app-config";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import axios from "axios";
import "./styles/_utils.scss";
import "./styles/App.scss";

console.log(API_BASE_URL);

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    console.log("mount완료");
    const getTodos = async () => {
      const res = await axios.get(`${API_BASE_URL}/api/todos`);

      setTodoItems(res.data);
    };

    getTodos();
  }, []);

  // Todo 추가하는 함수
  const addItem = async (newItem) => {
    // newItem => { title: 'xxx' }
    // newItem.id = todoItems.length + 1;
    // newItem.done = false;
    // newItem => { title: 'xxx', id: n, done: false }

    // setTodoItems([...todoItems, newItem]);

    //============sever axios 데이터 날리기
    const res = await axios.post(`${API_BASE_URL}/api/todo`, newItem);
    console.log(res.data);
    setTodoItems([newItem, ...todoItems]);
  };

  // Todo 삭제하는 함수
  const deleteItem = async (targetItem) => {
    // targetItem => { title: 'xxx', id: n, done: false }
    // 1. filter()
    // : targetItem의 id 와 todoItems state의 id가 같지 않은 애들을 새로운 배열로 반환
    // const newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    // 2. state 변경
    // setTodoItems(newTodoItems);
    //===========sever axios 데이터 지우기
    await axios.delete(`${API_BASE_URL}/api/todo/${targetItem.id}`);
    const newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    setTodoItems(newTodoItems);
  };
  //Todo 수정하는 함수
  // (1)server API를 이용해 db데이터를 업데이트
  // (2)변경된 내용을 화면에 다시 출력
  const updateItem = async (targetItem) => {
    console.log(targetItem); // {id: n, title: 'xxx', done: false }
    await axios.patch(`${API_BASE_URL}/api/todo/${targetItem.id}`, targetItem);
    // 서버에서 수정이 완료된 후에도 취소선이 유지되도록 state 업데이트
    const updatedTodoItems = todoItems.map((item) => {
      if (item.id === targetItem.id) {
        return { ...item, done: targetItem.done };
      } else {
        return item;
      }
    });
    setTodoItems(updatedTodoItems);
  };

  return (
    <div className="App">
      <h1>Todo-List</h1>
      {/* todo 추가 input */}
      {/* <AddTodo addItem={{ addItem }} /> */}

      {/* <div className="left-todos">x

      {/* <div className="left-todos">😜 {todoItems.length} Todos</div> */}

      {/* todo 목록 보이기 */}
      {todoItems.map((item) => {
        return (
          <Todo
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            updateItem={updateItem}
          />
        );
      })}
      <br />
      <AddTodo addItem={addItem} />
    </div>
  );
}

export default App;
