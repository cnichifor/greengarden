const productcontainer = document.querySelector('.products');
const paginationcontainer = document.querySelector('.pagination');
let filterproducts = allproducts.filter((element) => element.type == 'fc');
let elonpage = 8;

showproducts(elonpage, 1, filterproducts, productcontainer);
pagination(elonpage, filterproducts, paginationcontainer, productcontainer);

const options = document.querySelector('.options');
filteroptions(options, filterproducts);

let elsonpage = options.querySelector('.elonpage');
elsonpage.value = '8';

elsonpage.addEventListener('input', (event) => {
    elonpage = Number(event.target.value);
    showproducts(elonpage, 1, filterproducts, productcontainer);
    pagination(elonpage, filterproducts, paginationcontainer, productcontainer);
});

let sort = options.querySelector('.sort');

sort.addEventListener('change', (event) => {
    if(event.target.value == 'Highest'){
        showproducts(elonpage, 1, filterproducts.sort((a, b) => b.price - a.price), productcontainer);
        pagination(elonpage, filterproducts.sort((a, b) => b.price - a.price), paginationcontainer, productcontainer);
    }
    else{
        showproducts(elonpage, 1, filterproducts.sort((a, b) => a.price - b.price), productcontainer);
        pagination(elonpage, filterproducts.sort((a, b) => a.price - b.price), paginationcontainer, productcontainer);
    }
})