import { useState } from "react";
import "../styles/AddTodo.scss";
const AddTodo = ({ addItem }) => {
  const [todoItem, setTodoItem] = useState({
    title: "",
  });

  const onButtonClick = () => {
    // 1. props addItem 함수 실행
    addItem(todoItem);

    //2. input 초기화
    setTodoItem({ title: "" });
  };
  const onEnterKeyDown = (e) => {
    if (e.key === "Enter") {
      onButtonClick();
    }
  };

  return (
    <div className="AddTodo">
      <input
        className="AddTodo Input"
        type="text"
        placeholder="Add your new Todo"
        value={todoItem.title}
        onChange={(e) => setTodoItem({ title: e.target.value })}
        onKeyDown={onEnterKeyDown}
      />
      <br />
      <button onClick={onButtonClick} className="AddTodo Button">
        ADD
      </button>
    </div>
  );
};

export default AddTodo;
