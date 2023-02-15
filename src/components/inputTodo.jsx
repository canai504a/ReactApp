import React from "react";

const InputTodo = (props) => {
  const { TodoText, onChange, onClick } = props;

  // CSS-IN-JSという書き方らしい
  // 正解ってわけではなくそういう使い方もあるんだなって覚えておいて
  const style = {
    background: "#c1ffff",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    BorderRadius: "8px"
  };

  return (
    // <div className="input_area">
    <div style={style}>
      <input placeholder="TODOを追加" value={TodoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};

export default InputTodo;
