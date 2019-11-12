import React from "react";
import TodoItem from "./TodoItem";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      value: ""
    };
  }

  onClickAdd = e => {
    const items = this.state.items;
    items.push(this.state.value);
    this.setState({
      items
    });
  };

  onClcikDel = idx => {
    const items = this.state.items;
    this.setState({
      items: [...items.slice(0, idx), ...items.slice(idx + 1)]
    });
  };

  onClickMod = (value, idx) => {
    const newItems = [
      ...this.state.items.slice(0, idx),
      value,
      ...this.state.items.slice(idx + 1)
    ];
    this.setState({ items: newItems });
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <>
        <div>
          <input type="text" onChange={this.onChange} className="text" />
          <button onClick={this.onClickAdd} className="btn">
            추가
          </button>
        </div>
        {this.state.items.map((value, idx) => (
          <TodoItem
            key={Math.random()}
            value={value}
            onClickDel={() => {
              this.onClcikDel(idx);

            }}
            onClickMod={() => {
              var value = prompt("수정");
              this.onClickMod(value, idx);
            }}
          />
        ))}
      </>
    );
  }
}
export default App;
