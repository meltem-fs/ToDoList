
const btn = document.getElementById('todo-button');
const todoInput = document.getElementById('todo-input');
const todoUl = document.getElementById('todo-ul');


window.onload = function () {
  todoInput.focus();
};


btn.addEventListener('click', (e) => {
  if (!todoInput.value) {
    alert('Please enter your todo');
  } else {
    todoUl.innerHTML += `
    <li>
      <i class="fa fa-check"></i>
      <p>${todoInput.value}</p>
      <i class="fa fa-trash"></i>
    </li>`;
    todoInput.value = '';
  }
});

todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    btn.click();
  }
});


todoUl.addEventListener('click', (e) => {
  //!Event, sil butonlarının birisinden geldi ise
  if (e.target.classList.contains('fa-trash')) {
   
    e.target.parentElement.remove();
  }

  //!Event, silme veya ok butonlarından geldi ise
  if (e.target.classList.contains('fa-check')) {
  
    if (e.target.parentElement.classList.contains('checked')) {
      e.target.parentElement.classList.remove('checked');
    } else {
     
      e.target.parentElement.classList.add('checked');
    }
  }
});
