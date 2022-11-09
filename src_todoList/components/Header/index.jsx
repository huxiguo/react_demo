import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { nanoid } from 'nanoid'

import './index.css'

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  handelKeyUp = (e) => {
    if (e.key !== 'Enter') return
    if (e.target.value.trim() === '') {
      alert('输入不能为空')
      return
    }
    const todoObj = { id: nanoid(), name: e.target.value, done: false }
    this.props.addTodo(todoObj)
    e.target.value = ''
  }
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          onKeyUp={this.handelKeyUp}
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    )
  }
}
