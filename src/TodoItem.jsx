import React from "react";
import './app.css';

class TodoItem extends React.Component {
  render() {
    return (
      <div className="full">
        <span>{this.props.value}</span>
        <button className="btn">수정</button>
        <button className="btn">삭제</button>
      </div>
    );
  }
}

export default TodoItem;