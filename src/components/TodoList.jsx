import React from 'react'
import styles from './TodoList.module.scss';

function TodoList({ todos, setTodos, setEditTodo }) {

    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleComplete = (todo) => {
        setTodos(
            todos.map((el) => {
                if(el.id === todo.id){
                    return {...el, completed: !el.completed, date: getDate()}
                }
                return el;
            })
        )
    }   

    const getDate = () => {
        return new Date().toLocaleDateString("ru-RU", {
            month: "long",
            day: "numeric",
            weekday: "long",
          })
    }

    const handleEdit = ({id}) => {
        const filterTodo = todos.find((el) => el.id === id);
        setEditTodo(filterTodo);
    }
    return (
        <div className={styles.todoList}>
            {todos.map( todo => {
                return(
                    <li key={todo.id} className= {`${todo.completed ? styles.completedItem : "" }`}>
                        <button className = {`${todo.completed ? styles.completeButton : styles.checkButton }`}
                        onClick={() => handleComplete(todo)}/>
                        <input 
                            type="text" 
                            value={todo.text} 
                            onChange={(e) => e.preventDefault()}
                            className= {`${todo.completed ? styles.completedItem : "" }`}
                        />
                        
                        <button className = {styles.deleteButton} 
                                onClick={() => handleDelete(todo.id)}/>
                        <button className = {styles.editButton}
                                onClick={() => handleEdit(todo)}/>
                    </li>
                )

            })}
            <div>
                
                    
                    
                
            </div>
        </div>
        
    )
}

export default TodoList
