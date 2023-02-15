import React from "react";

const IncompleteTodos = (props) => {
  const { todos, onClickcomplete, onclickDelete } = props;
  return (
    <div className="imcomplete_area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list_row">
                <p>{todo}</p>
                <button onClick={() => onClickcomplete(index)}>完了</button>
                <button onClick={() => onclickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IncompleteTodos;
