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
          <TodoItem key={idx} value={value} />
        ))}
      </>
    );
  }
}
export default App;
