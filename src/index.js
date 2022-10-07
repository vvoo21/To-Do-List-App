import _ from 'lodash';
import './style.css';

const todoList = document.querySelector('#todo-list-wrap');

const todos = [
  {
    content: 'Study JavaScript',
    done: false,
    id: 1
  },

  {
    content: 'Watch a video about localStorage',
    done: false,
    id: 2
  },

  {
    content: 'Build a To Do List App',
    done: false,
    id: 3
  }
]

const DisplayTodos = () => {
  todos.forEach(todo => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const label = document.createElement('div');    
    const input = document.createElement('input');
    const span = document.createElement('span');
    const content = document.createElement('div');
    const actions = document.createElement('div');
    const editImg = document.createElement('img');

    input.type ='checkbox';
    input.checked = todo.done; 
    input.setAttribute('aria-label', 'checkbox');
    editImg.setAttribute('src', 'images/more.png');
    editImg.setAttribute('alt', 'restart todo');
    editImg.setAttribute('width', '20');
    editImg.setAttribute('height', '20');

    label.classList.add('label');
    span.classList.add('bubble');
    content.classList.add('todo-content');
    actions.classList.add('actions');
   

    content.innerHTML = `<input type="text" value="${todo.content}" aria-label="task" readonly>`;

    todoList.appendChild(todoItem);
    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);
    actions.appendChild(editImg);
    label.appendChild(input);
    label.appendChild(span);
    
  });
}

DisplayTodos();

  