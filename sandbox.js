// const items = document.querySelectorAll('li');

// items.forEach(item => {
//  item.addEventListener('click', (e) => {
//    e.target.style.textDecoration = 'line-through';
//  });
//});  

const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  // ul.appendChild(li);  
  ul.prepend(li);
});

ul.addEventListener('click', e => {
  // console.log('event in UL');
  // console.log(e);
  // console.log(e.target, e);
  if(e.target.tagName === 'LI'){
    e.target.remove();
  }
});

