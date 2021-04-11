import React from "react";
import TodoPage from './components/TodoPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom';
import styles from './App.module.scss';
import Completed from './components/Completed';

function App() {



  return (
    <Router>
    <div className={styles.wrapper}>
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <Link to="/todo"><button className={styles.navButton}>Добавить</button></Link>
       
          <Link to="/completed"><button className={styles.navButton}>Завершенные</button></Link>
      
      </nav>
      </div>
      <Switch>
          <Route path="/completed">
            <Completed />
          </Route>
          <Route path="/todo">
            <TodoPage />
          </Route>
        </Switch>
    </div>
    </ Router>
  );
}

export default App;
