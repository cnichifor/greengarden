

const product = JSON.parse(localStorage.getItem('selectedItem'));

const image = document.getElementById('image');
image.src = product.file;

const name = document.getElementById('name');
name.innerText = product.name;

const price = document.querySelector('.price');
price.innerText = `$${product.price}`;

const description = document.getElementById('description');
description.innerText = product.description;

const pcol = document.querySelector('.colors');

if(product.colors.length > 0){
product.colors.forEach((color) => {
    let span = document.createElement('span');
    span.className = 'color';
    span.style.backgroundColor = color;
    span.style.width = '20px';
    span.style.height = '20px';
    span.style.borderRadius = '50%';
    span.style.display = 'flex';
    span.style.alignItems = 'center';
    span.style.justifyContent = 'center';
    span.style.gap = '5px';
    span.style.border = '1px solid white';
    pcol.appendChild(span);

    span.addEventListener('click', function () {
        document.querySelectorAll('.color').forEach(function (el) {
            el.style.border = '1px solid white';
        });

        this.style.border = '3px solid #ffff';

        let selectedColor = this.style.backgroundColor;
        allproducts[allproducts.findIndex(item => item.name == product.name)].scolor = selectedColor;
    });
    
});
pcol.querySelector('.color').style.border = '3px solid #ffff';
}

const options = document.querySelector('.options');

let buybtn = document.createElement('button');
options.appendChild(buybtn);
buybtn.className = 'btn';
buybtn.innerText = 'Buy Now';

buybtn.addEventListener('click', () => {
    let costjson = JSON.parse(product.price);
    sessionStorage.setItem('price', costjson);
    window.location.href = '../Buynow/payment.html';
})

let addtocart = document.createElement('button');
addtocart.className = 'addtocart btn'
options.appendChild(addtocart);
addtocart.innerText = 'Add to Cart';
addtocart.addEventListener('click', () => addToCart(allproducts.findIndex(item => item.name == product.name)));