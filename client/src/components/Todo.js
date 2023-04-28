import { useState } from "react";

const Todo = ({ item, deleteItem }) => {
  console.log(item);

  const [todoItem, setTodoItem] = useState(item);
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteButtonClick = () => {
    deleteItem(todoItem);
  };

  const offReadOnlyMode = () => {
    setReadOnly(false); // title input이 편집이 가능한 상태
  };
  // title input 에서 enter키; readOnly state를 true로 변경
  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true);
    }
    //사용자가 키보드 입력할 때 마다 item의 title을 입력한 값으로 변경
  };
  const editEventHandler = (e) => {
    // rest: id, done 정보
    const { title, ...rest } = todoItem;

    setTodoItem({
      title: e.target.value,
      ...rest,
    });
  };
  const checkBoxEventHandler = (e) => {
    const { done, ...rest } = todoItem;

    setTodoItem({
      done: e.target.value,
      ...rest,
    });
    // console.log(todoItem);
    // e.target.checked
    todoItem.done = !todoItem.done;
    setTodoItem(todoItem);
  };
  return (
    <div className="Todo">
      <input
        type="checkbox"
        id={`todo${item.id}`}
        name={`todo${item.id}`}
        value={`todo${item.id}`}
        defaultChecked={item.done}
        onChange={checkBoxEventHandler}
      />
      <input
        type="text"
        value={todoItem.title}
        onClick={offReadOnlyMode}
        onKeyDown={enterKeyEventHandler}
        onChange={editEventHandler}
      />
      <button onClick={onDeleteButtonClick}>delete</button>
    </div>
  );
};

export default Todo;
