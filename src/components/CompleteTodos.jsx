import React from "react";

const CompleteTodos = (props) => {
  const { todos, onClickback } = props;
  return (
    <div className="complete_area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list_row">
                <p>{todo}</p>
                <button onClick={() => onClickback(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CompleteTodos;
