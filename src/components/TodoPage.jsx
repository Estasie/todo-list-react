import React, { useState, useEffect} from 'react'
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import data from '../data.json';
import styles from "../App.module.scss";

function TodoPage() {
    const storeItems = JSON.parse(localStorage.getItem("todos")) || data;
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState(storeItems);
    const [editTodo, setEditTodo] = useState(null);
  

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    return (
        <>
        <div className={styles.todoswrapper}>
          <Header />
          <div className={styles.todoContainer}>
          <TodoForm 
          input={input}
          setInput = {setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo = {setEditTodo}
            />
          <TodoList  todos = {todos} setTodos = {setTodos} setEditTodo = {setEditTodo} />
          </div>
        </div>
        </>
    )
}

export default TodoPage
