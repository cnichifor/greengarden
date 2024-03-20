// Preluarea pre'ului salvat anterior
const price = sessionStorage.getItem('price');

// Afișarea prețului în buton


const subtotal = price;
const shipping = 5;
const total = Number(subtotal) + Number(shipping);

const checkoutBtn = document.getElementById('checkout-btn');
const priceElement = checkoutBtn.querySelector('.money');
priceElement.innerHTML = `$${total}`;

// Actualizarea datelor în HTML
const subtotalElement = document.getElementById('subtotal');
subtotalElement.innerHTML = `$${subtotal}`;

const shippingElement = document.getElementById('shipping');
shippingElement.innerHTML = `$${shipping}`;

const totalElement = document.getElementById('total');
totalElement.innerHTML = `$${total}`;

function validateCardNumber(input) {
  const cardNumber = input.value.replace(/\D/g, '');
  const maxLength = 19;
  const formattedCardNumber = formatCardNumber(cardNumber);
  input.value = formattedCardNumber.slice(0, maxLength);
}

function formatCardNumber(cardNumber) {
  const regex = /(\d{4})(?=\d)/g;
  return cardNumber.replace(regex, '$1-');
}



const numberinput = document.querySelector('.cardnumber').querySelector('input');
numberinput.addEventListener('input', (e) => {
  validateCardNumber(e.target);
})

//Verificarea daca cardul nu e expirat
function validateExpirationDate(input) {
  const currentDate = new Date();
  const inputDate = new Date();
  const dateParts = input.value.split('/');

  if (dateParts.length === 2) {
    const month = parseInt(dateParts[0], 10);
    const year = parseInt(dateParts[1], 10) + 2000; //Verificarea anului

    if (month >= 1 && month <= 12 && year >= currentDate.getFullYear()) {
      inputDate.setFullYear(year, month, 1);

      if (inputDate > currentDate) {
        console.log('Valid expiration date');
        return;
      }
    }
  }

  alert('Date invalide');
}

const expirationInput = document.querySelector('input[name="date"]');
expirationInput.addEventListener('change', function () {
  validateExpirationDate(this);
});

function getCardType(cardNumber) {
  //Definirea formatului pentru Visa sau Mastercard
  const visaPattern = /^4[0-9]{3}(-?[0-9]{4}){3}(?:[0-9]{3})?$/;
  const mastercardPattern = /^5[1-5][0-9]{2}(-?[0-9]{4}){3}(?:[0-9]{3})?$/;

  if (visaPattern.test(cardNumber)) {
    return 'Visa';
  } else if (mastercardPattern.test(cardNumber)) {
    return 'Mastercard';
  } else {
    return 'Unknown';
  }
}

function updateCardType(cardNumberInput) {
  const cardTypeElement = document.getElementById('card-type');
  const cardType = getCardType(cardNumberInput.value);

  cardTypeElement.textContent = cardType;
}

const cardNumberInput = document.querySelector('input[name="number"]');
cardNumberInput.addEventListener('input', function () {
  updateCardType(this);
});

const submitBtn = document.querySelector('#checkout-btn');
submitBtn.addEventListener('click', () => {
  const nameInput = document.querySelector('input[name="name"]');
  const numberInput = document.querySelector('input[name="number"]');
  const expirationInput = document.querySelector('input[name="date"]');
  const cvvInput = document.querySelector('input[name="cvv"]');

  // Validate name
  if (nameInput.value.trim() === '') {
    alert("Please enter the name.");
    return;
  }

  // Validate card number
  const cardNumber = numberInput.value.replace(/\D/g, '');
  const cardType = getCardType(cardNumber);
  if (cardNumber.length !== 16 || cardType === 'Unknown') {
    alert("Please enter a valid card number.");
    return;
  }

  // Validate expiration date
  const currentDate = new Date();
  const dateParts = expirationInput.value.split('/');
  if (dateParts.length !== 2) {
    alert("Please respect format date.");
    return;
  }
  const month = parseInt(dateParts[0], 10);
  const year = parseInt(dateParts[1], 10) + 2000;
  const inputDate = new Date(year, month - 1);

  if (isNaN(inputDate) || inputDate <= currentDate) {
    alert("Please enter a valid date.");
    return;
  }

  // Validate CVV
  const cvv = cvvInput.value.replace(/\D/g, '');
  if (cvv.length !== 3) {
    alert("Please complete cvv.");
    return;
  }

  // Toate inputurile sunt valide
  alert("Your order is ready!");
  window.location.href = "../Home/index.html";
});

