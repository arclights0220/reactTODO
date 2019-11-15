// App.jsx
import React from "react";
import TodoItem from "./TodoItem";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      value: "",
      editItem: -1,
      editValue: ""
    };
  }

  onClickAdd = e => {
    const items = this.state.items;
    items.push(this.state.value);
    this.setState({
      items
    });
  };

  onClickDel = idx => {
    const newItems = [...this.state.items];
    newItems.splice(idx, 1);
    this.setState({ items: newItems });
  };

  onClickMod = idx => {
    this.setState({ editItem: idx, editValue: this.state.value });
  };

  onClickConfirm = idx => {
    const newItems = [
      ...this.state.items.slice(0, idx),
      this.state.editValue,
      ...this.state.items.slice(idx + 1)
    ];
    this.setState({ items: newItems, editItem: -1 });
  };

  onChageValue = e => {
    this.setState({ editValue: e.target.value });
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="aroot">
        <div className="inputBox">
          <input type="text" onChange={this.onChange} className="input" />
          <button onClick={this.onClickAdd} className="addBtn">
            추가
          </button>
        </div>
        {this.state.items.map((value, idx) => (
          <TodoItem
            // key={Math.random() + idx}
            value={value}
            className="list"
            onClickDel={() => this.onClickDel(idx)}
            onClickMod={() => {
              this.onClickMod(idx);
            }}
            // 수정 할 때 사용하는 props
            isEdit={this.state.editItem === idx}
            editValue={this.state.editValue}
            onChageValue={this.onChageValue}
            onClickConfirm={() => {
              this.onClickConfirm(idx);
            }}
          />
        ))}
      </div>
    );
  }
}
export default App;