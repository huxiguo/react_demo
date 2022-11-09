import React, { Component } from 'react'

import './index.css'

export default class Footer extends Component {
  handleCheckAll = (e) => {
    this.props.checkAll(e.target.checked)
  }
  handleClearDone = () => {
    this.props.clearAllDone()
  }
  render() {
    const { todos } = this.props
    const doneCount = todos.reduce(
      (pre, current) => pre + (current.done ? 1 : 0),
      0
    )
    const tatil = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={doneCount === tatil && tatil !== 0 ? true : false}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{tatil}
        </span>
        <button onClick={this.handleClearDone} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    )
  }
}
