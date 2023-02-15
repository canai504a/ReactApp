import React, { useState } from "react";
import "./styles.css";
import InputTodo from "./components/inputTodo";
import IncompleteTodos from "./components/incompleteTodos";
import CompleteTodos from "./components/CompleteTodos";

const App = () => {
  // 配列
  const [TodoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    // "ああああ",
    // "いいいい"
  ]);
  const [CompleteList, setCompleteList] = useState([
    // "うううう"
  ]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    // alert(TodoText);
    if (TodoText === "") return;
    const newTodos = [...incompleteTodos, TodoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    // alert(index);
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    // alert();
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...CompleteList, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteList(newCompleteTodos);
  };

  const onClickback = (index) => {
    const newCompleteTodos = [...CompleteList];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, CompleteList[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteList(newCompleteTodos);
  };

  // JSXからReactに使えるよう記述を少しずつ変えていく

  // list部分は値が変化するという事でstateを使う

  // incompleteTodosの中身がListの中身というイメージ
  // ここで使えるのがmap関数（mapfilterで使った）
  // どうするのかというとulの中でループさせる

  // 前回map関数を使った時は元の配列をループさせて新しい配列を作る処理
  // ループの記述を省略して、incompleteTodosの要素を順番に使って<li>を構築する
  // incompleteTodosという配列を使って<li>~</li>までの記述がある配列を作るイメージ

  // Keyの設定が必要
  // 仮想DOMの構造上ループを使う場合は何個目の要素なのか正確に目印をつける

  // input
  // 追加ボタン
  // valueで値をとるだけでは正常に機能しない上、入力ができなくなる
  // 入力欄の値が変化した時に動作する記述が必要　onChange
  // event.target.valueは変化した値をそのままもってくる　やつ
  //

  // 配列の結合
  // newTodosに元々あるincompleteTodosに新しい値を追加
  // スプレッド構文
  // incompleteTodosの値を更新するのでsetIncompleteTodosを使って新しい配列をセットする
  // 追加ボタン後で値をリセットしたからTodoTextの値を変える意味でsetTodoTextをブランクで設定
  // 入力なしでも追加できるから、空文字の時は何もしないで処理終了するための記述
  // if文も処理が1行程度のものならブラケット（並括弧）は省略して良い

  // 削除ボタン
  // どのボタンか判別できないためmap関数に第二引数を持たせる
  // buttonタグとかで関数に引数を渡していきたい時はアロー関数の記述をする
  // splice　第一引数で番号、第二引数を何個
  // map関数でどこを処理するか、すぷらいすでどこを処理するか判定する

  // 完了ボタン
  // newTodosそのまま使うと一緒に変わっちゃうからダメ
  // 完了TODO側の配列に値を追加する
  // ややこしいが、新しく作った配列newIncompleteTodosやnewCompleteTodosに
  // 追加削除処理を行ってsetから反映させる　という感じ

  // 戻るボタン
  // 試しに作ってみる
  // 逆の処理を行えばいい

  // 最後に初期値をリセットして終わり

  // コンポーネント化
  // コードの見通しが良くなる
  // コンポーネント化しておくことで他の画面で使いたい時は呼び出す処理だけで済む
  // その場合は抽象度（誰が見ても何の事を書いてあるか分かりやすくする）を調整利用すると良い
  return (
    <>
      {/* <div className="input_area">
        <input
          placeholder="TODOを追加"
          value={TodoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div> */}
      <InputTodo
        TodoText={TodoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      {/* <div className="imcomplete_area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list_row">
                  <p>{todo}</p>
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div> */}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickcomplete={onClickComplete}
        onclickDelete={onClickDelete}
      />
      {/* <div className="complete_area">
        <p className="title">完了のTODO</p>
        <ul>
          {CompleteList.map((todo, index) => {
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
      </div> */}
      <CompleteTodos todos={CompleteList} onClickback={onClickback} />
    </>
  );
};

export default App;
