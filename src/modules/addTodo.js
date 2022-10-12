import DisplayTodos from './functions.js';

const addTodo = (e) => {
  e.preventDefault();

  const todos = JSON.parse(localStorage.getItem('todos')) || [];

  const todo = {
    content: e.target.elements.content.value,
    done: false,
    id: todos.length + 1,
  };

  todos.push(todo);

  localStorage.setItem('todos', JSON.stringify(todos));

  e.target.reset();

  DisplayTodos();
};

export default addTodo;