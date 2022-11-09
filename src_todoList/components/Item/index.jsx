import React, { Component } from 'react'

import './index.css'

export default class Item extends Component {
  state = { mouse: false }
  // 鼠标移入移除
  handleMouse = (isEnter) => {
    return () => {
      this.setState({ mouse: isEnter })
    }
  }
  // 点击复选框回调
  handleCheck = (id) => {
    return (e) => {
      this.props.changeTodo(id, e.target.checked)
    }
  }
  // 删除一个事件
  handleDelete = (id) => {
    if (window.confirm('确定删除吗？')) {
      this.props.deleteTodo(id)
    }
  }
  render() {
    const { id, name, done } = this.props
    return (
      <li
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        style={{ backgroundColor: this.state.mouse ? '#ebe5d5' : '#fff' }}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          onClick={() => this.handleDelete(id)}
          className="btn btn-danger"
          style={{ display: this.state.mouse ? 'block' : 'none' }}
        >
          删除
        </button>
      </li>
    )
  }
}
