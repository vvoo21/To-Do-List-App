import './style.css';
import DisplayTodos from './modules/functions.js';

export let todos;

window.addEventListener('load', () => {
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  const newTodoForm = document.querySelector('#new-todo-form');

  newTodoForm.addEventListener('submit', e => {
    e.preventDefault();

    const todo = {
      content: e.target.elements.content.value,
      done: false,
      id: new Date().getTime()
    }

    //Global variable = todos
    todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(todos));

    e.target.reset() 

    DisplayTodos();
  })

  DisplayTodos();
})