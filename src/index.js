import './style.css';
import DisplayTodos from './modules/functions.js';
import addTodo from './modules/addTodo.js';

window.addEventListener('load', () => {
  const newTodoForm = document.querySelector('#new-todo-form');

  newTodoForm.addEventListener('submit', addTodo);

  DisplayTodos();
});
