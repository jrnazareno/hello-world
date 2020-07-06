const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')

const generateTemplate = (todo) => {
    const added_html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `;
  list.innerHTML += added_html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
//  console.log(todo);
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
});

// delete items in TODOS list
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) => {
//    console.log(term);
//    console.log(Array.from(list.children));

    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'))

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'))

};

// keyup event
search.addEventListener('keyup', () => {
    const search_term = search.value.trim().toLowerCase();
    filterTodos(search_term);
});
