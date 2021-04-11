import React from 'react'
import styles from './TodoList.module.scss';

function FilteredTodo({ todos}) {
    return (
        <div className={styles.todoList}>
            {todos.map( todo => {
                return(
                    <li key={todo.id} className= {`${todo.completed ? styles.completedItem : "" }`}>
                        <input 
                            type="text" 
                            value={todo.text} 
                            onChange={(e) => e.preventDefault()}
                            className= {`${todo.completed ? styles.completedItem : "" }`}
                            readonly
                        />
                    </li>
                )

            })}
            <div>
                
                    
                    
                
            </div>
        </div>
        
    )
}

export default FilteredTodo