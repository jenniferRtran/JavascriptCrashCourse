const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const storeInput = document.querySelector('#store');
const priceInput = document.querySelector('#price');
const msg = document.querySelector('.msg');
const productList = document.querySelector('#products');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    // Stop/prevent the default behavior
    e.preventDefault();
    
    if (nameInput.value === '' ||
    storeInput.value === '' ||
    priceInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 2000)
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`
        ${nameInput.value} | ${storeInput.value} |
        ${priceInput.value}`));

        productList.appendChild(li);

        nameInput.value = '';
        storeInput.value = '';
        priceInput.value = '';
    }
}

