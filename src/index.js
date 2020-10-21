import React from 'react';
import ReactDOM from 'react-dom';
// import Header from './Header';
import ToDoList from './ToDoList';
// import Todo from './Todo';


const App = () => {
    return (
        <div>
            <ToDoList />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));