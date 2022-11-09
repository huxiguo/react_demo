import { Component } from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'

import './App.css'
class App extends Component {
  state = {
    todos: [
      { id: '001', name: '哈哈哈', done: true },
      { id: '002', name: 'das ', done: false },
      { id: '003', name: '哈dsada哈哈', done: true },
      { id: '004', name: 'dasdsadsa', done: false }
    ]
  }
  addTodo = (todoObj) => {
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({ todos: newTodos })
  }

  /**
   * 删除一个事件
   * @param {要删除事件的ID} id
   */
  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    this.setState({ todos: newTodos })
  }

  /**
   *
   * @param {要修改的事件id} id
   * @param {修改的状态} done
   */
  changeTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done }
      else return todoObj
    })
    this.setState({ todos: newTodos })
  }

  /**
   * 全选
   */
  checkAll = (done) => {
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done }
    })
    this.setState({ todos: newTodos })
  }
  /**
   * 清除所有完成
   */
  clearAllDone = () => {
    const { todos } = this.state
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    })
    this.setState({ todos: newTodos })
  }
  render() {
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo} />
            <List
              todos={this.state.todos}
              changeTodo={this.changeTodo}
              deleteTodo={this.deleteTodo}
            />
            <Footer
              todos={this.state.todos}
              checkAll={this.checkAll}
              clearAllDone={this.clearAllDone}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
