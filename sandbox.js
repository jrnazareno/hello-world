const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', (e) => {
    e.target.style.textDecoration = 'line-through';
  });
});  
