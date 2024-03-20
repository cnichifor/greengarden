const currentUser = sessionStorage.getItem('currentUser');
  if (!currentUser) {
    sessionStorage.setItem('currentUser', JSON.stringify({username: 'guest', password: '', cartitems: []}));
}

const header = document.createElement('header');
document.body.appendChild(header);
// header.className = 'container-fluid';

const nav = document.createElement('nav');
nav.style.position = 'relative';
// nav.className = '.collapse.navbar-collapse';
header.appendChild(nav);

const leftnav = document.createElement('div');
leftnav.className = 'nav-left';
nav.appendChild(leftnav);

const lnavlist = document.createElement('ul');
lnavlist.className = 'lnav-list';
leftnav.appendChild(lnavlist);

const logo = document.createElement('img');
const logoa = document.createElement('a');
logoa.href = '../Home/index.html';
logoa.appendChild(logo);
logo.src = '../img/logo.svg';
logo.className = 'logo';

nav.appendChild(logoa.cloneNode(true));

const rightnav = document.createElement('div');
rightnav.className = 'nav-right';
nav.appendChild(rightnav);

const llinks = [  {    text: 'Home',    type: 'a',    href: '../Home/index.html',  },  {    text: 'All For Garden',    type: 'input',    id: 'allFor',  },  {    text: 'About Us',    type: 'a',    href: '../AboutUs/about.html',  },];

for (let i = 0; i < llinks.length; i++) {
  let li = document.createElement('li');
  li.className = 'link';
  lnavlist.appendChild(li);

  if (llinks[i].type == 'input') {
    let input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.id = llinks[i].id;

    let label = document.createElement('label');
    label.setAttribute('for', llinks[i].id);
    label.innerText = llinks[i].text;

    li.appendChild(label); 
    li.appendChild(input);
    input.style.display = 'none';
  } else {
    let a = document.createElement('a');
    a.innerText = llinks[i].text;
    a.href = llinks[i].href;

    li.appendChild(a);
  }
}

const rlinks = [  {    file: '../img/user.svg',    link: '../Login/login.html',    type: 'a',  id: 'user-btn'},  {    file: '../img/cart.svg',    type: 'input',    id: 'cart-btn',  },];

for (let i = 0; i < rlinks.length; i++) {
  let img = document.createElement('img');
  img.src = rlinks[i].file;

  if (rlinks[i].type == 'input') {
    let input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.id = rlinks[i].id;

    let label = document.createElement('label');
    label.setAttribute('for', rlinks[i].id);
    label.appendChild(img);

    rightnav.appendChild(label); 
    rightnav.appendChild(input);
    input.style.display = 'none';
  } else {
    let a = document.createElement('a');
    a.appendChild(img);
    a.href = rlinks[i].link;
    a.id = rlinks[i].id;

    rightnav.appendChild(a);
  }
}

const showsearch = document.createElement('button');
showsearch.className = 'search-btn';
rightnav.appendChild(showsearch);
showsearch.innerHTML = `<img src="../img/search.svg">`;

const searchcontainer = document.createElement('div');
searchcontainer.className = 'search';
searchcontainer.id = 'searchContainer';
const search = document.createElement('input');
search.id = 'searchInput';
search.setAttribute('list', 'searchOptions');
const searchbtt = document.createElement('button');
searchcontainer.appendChild(search);
searchcontainer.appendChild(searchbtt);
searchbtt.innerHTML = `<img src="../img/search.svg">`;
rightnav.appendChild(searchcontainer);
search.setAttribute('type', 'text');
search.placeholder = 'Search';
searchcontainer.style.display = 'none';

searchbtt.addEventListener('click', () => {
  let idx = allproducts.findIndex(item => item.name == search.value);
  localStorage.setItem('itemidx', JSON.stringify(idx));
  localStorage.setItem('selectedItem', JSON.stringify(allproducts[allproducts.findIndex(item => item.name == search.value)]));
  window.location.href = '../Productpage/product.html';
})

search.addEventListener('change', () => {
  let idx = allproducts.findIndex(item => item.name == search.value);
  localStorage.setItem('itemidx', JSON.stringify(idx));
  localStorage.setItem('selectedItem', JSON.stringify(allproducts[allproducts.findIndex(item => item.name == search.value)]));
  window.location.href = '../Productpage/product.html';
})



const lang = document.createElement('button');
lang.innerText = 'EN';
lang.id = 'lang';
rightnav.appendChild(lang);

const pathArray = window.location.pathname.split('/');
const filename = pathArray.pop();
const parentFolder = pathArray.pop();
console.log('Filename:', filename);
console.log('Parent Folder:', parentFolder);



lang.addEventListener('click', () => {
  window.location.href = `../.Ro/${parentFolder}/${filename}`
})

const dropdown = document.createElement('div');
nav.appendChild(dropdown);
dropdown.className = 'dropdown';
dropdown.style.display = 'none';
const dropdownlist = document.createElement('ul');
dropdown.appendChild(dropdownlist);
const droplinks = [
  {
    text: 'Footwear & Clothing',
    href: '../Fc/clothing.html'
  },
  {
    text: 'Garden Tools',
    href: '../Gt/tools.html'
  },
  {
    text: 'Soils & Fertilizers',
    href: '../Sf/soils.html'
  }
];

for(let i = 0; i < droplinks.length; i++){
  let li = document.createElement('li');
  li.className = 'link';
  dropdownlist.appendChild(li);
  let a = document.createElement('a');
  a.innerText = droplinks[i].text;
  a.href = droplinks[i].href;
  li.appendChild(a);
}

leftnav.querySelector('input[type="checkbox"]').addEventListener('click', (event) => {
  const checkbox = event.target;
  if (checkbox.checked == true) {
    dropdown.style.display = "flex";
  } else {
    dropdown.style.display = "none";
  }
});

showsearch.addEventListener("click", function(){
  if(searchcontainer.style.display == "none"){
    searchcontainer.style.display = "flex";
  }
  else{
    searchcontainer.style.display = "none";
  }
});

const cartbtn = document.querySelector('#cart-btn');

const cartBg = document.createElement("div");
cartBg.classList.add("cart-bg");

const cart = document.createElement("div");
cart.classList.add("cart");

const cartTitle = document.createElement("div");
cartTitle.classList.add("cart-title");

const cartHeading = document.createElement("p");
cartHeading.classList.add("cart-heading");
cartHeading.textContent = "Shopping Cart";

const cartCount = document.createElement("p");
cartCount.classList.add("cart-count");
cartCount.innerHTML = "You have ";
const itemCount = document.createElement("span");
cartCount.appendChild(itemCount);
itemCount.innerText = "0";
itemCount.className = 'cart-items-count';
cartCount.innerHTML += " items in your cart";

cartBg.style.display = 'none';

cartTitle.appendChild(cartHeading);
cartTitle.appendChild(cartCount);
cart.appendChild(cartTitle);

const cartbuy = document.createElement('button');
cartbuy.className = "cart-buy btn";
cart.appendChild(cartbuy);

cartbuy.addEventListener('click', (e) => {
  let costjson = JSON.parse(e.target.innerHTML.replace('$', ''));
  sessionStorage.setItem('price', costjson);
  window.location.href = '../Buynow/payment.html';
})

const cartitemscontainer = document.createElement("div");
cartitemscontainer.className = "cart-items";
cart.appendChild(cartitemscontainer);



cartBg.appendChild(cart);

document.body.appendChild(cartBg);


function handleCartButtonClick() {
  const cartBtn = document.querySelector("#cart-btn");
  const cartBg = document.querySelector(".cart-bg");
  const body = document.body;

  cartBtn.addEventListener("change", function () {
    if (cartBtn.checked) {
      cartBg.style.display = "block";
      body.style.overflow = "hidden";
    } else {
      cartBg.style.display = "none";
      body.style.overflow = "auto";
    }
  });
}
handleCartButtonClick();

