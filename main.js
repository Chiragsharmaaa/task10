// single element selectors
// document.getElementById('my-form')
// document.querySelector('h1')


// multiple element selectors

// console.log(document.querySelectorAll('.item')); //converts to nodelist -- better alternative

// console.log(document.getElementsByClassName('item')); //converts to HTML collection. cannot use array properties on this.

// console.log(document.getElementsByTagName('li'));


// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item))

// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello'
// ul.children[1].innerText = 'Brad'
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>' //dynamically change HTMl

// const btn = document.querySelector('.btn')

// // btn.style.background = 'red'
// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
    // document.querySelector('#my-form').style.background = '#ccc' 
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// });

// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// // Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');
    let name = `${nameInput.value}: `
    let email = `${emailInput.value}`
    // Add text node with input values
    li.appendChild(document.createTextNode(`${name} ${email}`));
    localStorage.setItem(`${name}`.toString(),` ${email}`.toString())
    console.log(localStorage.getItem(name,email))
    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);
    
    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

// const ul = document.querySelector('.items');

// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerHTML = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const liFirst = document.querySelector('.green');
// liFirst.style.color = 'green';

const liSec = document.querySelector('.yellow');
// liSec.style.color = 'yellow';

