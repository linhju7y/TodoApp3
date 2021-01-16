import React, { memo } from 'react'
import Todo from './Todo'

const TodoList = memo(props => {
    const {todoList, isCheckedAll, checkAllTodo}   = props 
    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" checked={isCheckedAll}/>
            <label htmlFor="toggle-all" onClick={checkAllTodo}>Toggle All</label>
            <ul className="todo-list">
                {
                    todoList.map ((todo, index ) => <Todo key={`todo${todo.id}`} {...{todo}} {...props} index={index}/>)
                }
            </ul>
        </section>
    )
})

export default TodoList

