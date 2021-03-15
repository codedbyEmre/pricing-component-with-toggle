const switch_toggle = document.getElementById('switch');
const basic_price = document.querySelector('.basic_price');
const pro_price = document.querySelector('.pro_price');
const master_price = document.querySelector('.master_price');

switch_toggle.addEventListener('click', () => {
    if(basic_price.innerText == '19.99' && pro_price.innerText == '24.99'){
        basic_price.innerText = '199.99';
        pro_price.innerText = '249.99';
        master_price.innerText = '399.99';
    }else if(basic_price.innerText == '199.99' && pro_price.innerText == '249.99'){
        basic_price.innerText = '19.99';
        pro_price.innerText = '24.99';
        master_price.innerText = '39.99';
    }
});
