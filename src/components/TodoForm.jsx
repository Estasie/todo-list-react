import React, {useEffect} from 'react'
import styles from './Form.module.scss'

function TodoForm({ input, setInput, todos, setTodos, editTodo, setEditTodo, filterComplited}) {


    const onInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!editTodo){
            setTodos([...todos, {id: Math.floor(Math.random() * 10000), text: input, completed: false, day: getDate()}])
        setInput("");
        } else {
            updateTodo(input, editTodo.id, editTodo.completed, editTodo.day)
        }
        
    }

    const getDate = () => {
        return new Date().toLocaleDateString("ru-RU", {
            weekday: "long",
          })
    }

    const updateTodo = (text, id, completed, day) => {
        const newTodo = todos.map( (todo) => 
            todo.id === id ? {text, id, completed, day} : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    }

    useEffect(() => {
        if(editTodo){
            setInput(editTodo.text);
        }else {
            setInput('');
        }
    }, [setInput, editTodo]);

    return (
        <>
        <form onSubmit={handleSubmit} className={styles.form}>
            <input 
                type="text" 
                placeholder="Enter a todo..."
                value={input}
                required
                onChange={onInputChange}
                className={styles.formInput}
            />
            <button type="submit" className={styles.formButton}>{editTodo ? "Изменить" : "Добавить"}</button>
        </form>
         
         </>
    )
}

export default TodoForm;
