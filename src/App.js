import React, { PureComponent } from 'react';
//css
import './App.css';
import './css/Todo.css'

//components
import Header from './components/Header'
import TodoList from './components/TodoList'
import Footer from './components/Footer'


const isNotCheckedAll = (todos = []) => todos.find(todo => !todo.isCompleted)

const filterByStatus = (todos = [], status = '', id ='') => {
  switch (status) {
    case 'ACTIVE' :
      return todos.filter(todo => !todo.isCompleted)
    case 'DONE' :
      return todos.filter(todo => todo.isCompleted)
    case 'REMOVE' :
      return todos.filter(todo => todo.id !== id)
    default:
      return todos

  }
}
class App extends PureComponent {
  state = {
    todoList: [
      {
        id :1,
        text: 'todo 1',
        isCompleted:true
      },
      {
        id :2,
        text: 'todo 2',
        isCompleted:false
      }
    ],
    todoEditingId: '',
    isCheckedAll: false,
    status: 'ALL'
  }

  componentWillMount() {
    this.setState({
      isCheckedAll: !isNotCheckedAll(this.state.todoList)
    })
  }

  // addTodo = (todo = {}) => {
  //   this.setState(preState => {
  //     
  //   })
  // }

  addTodo = (todo = {}) => {
    this.setState(preState => ({
      todoList: [...preState.todoList, todo]
    }))
  }

  getTodoEditingId =(id = '') => {
    this.setState({ todoEditingId: id })
  }

  onEditTodo =  (todo = {}, index = -1) => {
    if(index >= 0){
      const { todoList: list } = this.state
      list.splice(index, 1, todo)
      this.setState({  
        todoList: list,
        todoEditingId:''

      })
      
    }
  }

  markCompleted = (id= '') =>{
    const { todoList } = this.state
    const updateList = todoList.map(todo => todo.id === id ? ({...todo, isCompleted: !todo.isCompleted}) : todo )
    this.setState(preState => ({
      todoList: updateList,
      isCheckedAll: !isNotCheckedAll(updateList)
    }))
  }

  checkAllTodo = () => {
    const { todoList, isCheckedAll } = this.state
    this.setState(preState =>({
      todoList : todoList.map(todo => ({...todo, isCompleted: !isCheckedAll}))
      ,isCheckedAll:  !preState.isCheckedAll
    }))
  }

  setStatusFilter = (status = '') => {
    this.setState({
      status
    })
  }

  clearCompleted = () => {
    const { todoList } = this.state
    this.setState({ 
      todoList: filterByStatus(todoList, 'ACTIVE')
    })
  }

  removeTodo = (id = '') => {
    const { todoList } = this.state
    this.setState({ 
      todoList: filterByStatus(todoList, 'REMOVE', id )
    })
  }
  
  render() {

  const { todoList, todoEditingId, isCheckedAll, status} = this.state
  return (
    <div className="todoapp">
      <Header 
        addTodo={this.addTodo} 
        isCheckedAll={isCheckedAll}
      />
      <TodoList 
        todoList={filterByStatus(todoList, status)}
        getTodoEditingId={this.getTodoEditingId}
        todoEditingId={todoEditingId}
        onEditTodo={this.onEditTodo}
        markCompleted={this.markCompleted}
        isCheckedAll={isCheckedAll}
        checkAllTodo={this.checkAllTodo}
        removeTodo={this.removeTodo}
      />
      <Footer
        setStatusFilter={this.setStatusFilter}
        status={status}
        clearCompleted={this.clearCompleted}
        numOfTodoLeft = {filterByStatus(todoList, status).length}
        // numOfTodo = {todoList.length}
        
      />
    </div>
  );
  }
}

export default App;
