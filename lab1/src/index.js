import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo'
import TodoList from './TodoList'

import TodoApp from './TodoApp'

const all = [{ text: "Learn React", priority: 5, dueDate: new Date() },
{ text: "Learn about APIs", priority: 4, dueDate: new Date(2018, 8, 30) },
{ text: "write TODO App", priority: 3, dueDate: new Date(2018, 9, 30) }];



ReactDOM.render(<TodoList todoList={all}/>, document.getElementById('root'));




