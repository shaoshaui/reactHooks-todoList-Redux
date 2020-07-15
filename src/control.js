import React, {useRef} from "react";
import "./styles.css";
let idSeq = Date.now();
function Control(props) {
  const { addTodo } = props;
  const inputRef = useRef();
  const onSubmit = e => {
    e.persist();
    const newText = inputRef.current.value.trim();
    if (newText.length === 0) {
      return;
    }
    addTodo({
      id: ++idSeq,
      text: newText,
      complete: false
    });
    inputRef.current.value = "";
  };
  return (
    <div className="control">
      <h1>少帅的经典todos</h1>
      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="text"
          className="new-todo"
          placeholder="大兄弟，大妹子，输入按回车哦~~~"
        />
      </form>
    </div>
  );
}
export default Control;
