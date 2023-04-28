import { useState } from "react";

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
        type="text"
        placeholder="Add your new Todo"
        value={todoItem.title}
        onChange={(e) => setTodoItem({ title: e.target.value })}
        onKeyDown={onEnterKeyDown}
      />
      <button onClick={onButtonClick}>ADD</button>
    </div>
  );
};

export default AddTodo;
