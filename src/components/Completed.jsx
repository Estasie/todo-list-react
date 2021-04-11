import React, { useState, useEffect} from 'react'
import Chart from "./Chart";
import FilteredTodo from './FilteredTodo';
import data from '../data.json';

import styles from "../App.module.scss";

function Completed() {
    const storeItems = JSON.parse(localStorage.getItem("todos")) || data;
    const [todos, setTodos] = useState(storeItems);
    const [filteredTodo, setFilteredTodo] = useState(todos.filter(el => el.completed));

    const [editTodo, setEditTodo] = useState(null);

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className={styles.completedContainer}>
        <Chart items = {todos}/>
 
          <FilteredTodo  todos = {filteredTodo} />

        </div>
    )
}

export default Completed