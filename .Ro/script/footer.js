const footer = document.createElement('footer');
document.body.appendChild(footer);

const footersection = document.createElement('section');
footersection.className = 'footerinfo';
footer.appendChild(footersection);


footersection.appendChild(logo.cloneNode(true));


const copyright = document.createElement('section');
footer.appendChild(copyright);
copyright.className = 'copy';
const copyinfo = document.createElement('p');
copyright.appendChild(copyinfo);
copyinfo.innerText = '©2023, All right reserved.';

const hours = document.createElement('div');
hours.className = 'hours';
footersection.appendChild(hours);
const hoursh = document.createElement('p');
hoursh.innerHTML = 'Orele';
const hoursarr = [
    {
        name: 'Zilele săptămânii:',
        text: ' 7.00-18.00'
    },
    {
        name: 'Sâmbătă, Duminică:',
        text: ' 8.00-15.00'
    }
]
const hourslist = document.createElement('ul');
hours.appendChild(hoursh);
hours.appendChild(hourslist);
for(let i = 0; i < hoursarr.length; i++){ 
    const li = document.createElement('li');
    hourslist.appendChild(li);

    const name = document.createElement('span');
    name.innerText = hoursarr[i].name;
    li.appendChild(name)

    const span = document.createElement('span');
    span.style.color = '#BBBBBB'
    li.appendChild(span);
    span.innerHTML = hoursarr[i].text;
}

const adress = document.createElement('div');
adress.className = 'adress';
footersection.appendChild(adress);
const adressh = document.createElement('p');
adressh.innerHTML = 'Adresa';
const adressarr = [
    {
        text: 'Level 1, 12 Sample St, Sydney'
    },
]
const adresslist = document.createElement('ul');
adress.appendChild(adressh);
adress.appendChild(adresslist);
for(let i = 0; i < adressarr.length; i++){ 
    const li = document.createElement('li');
    adresslist.appendChild(li);

    const span = document.createElement('span');
    li.appendChild(span);
    span.innerHTML = adressarr[i].text;
}

const contact = document.createElement('div');
contact.className = 'contact';
footersection.appendChild(contact);
const contacth = document.createElement('p');
contacth.innerHTML = 'Contact';
const contactarr = [
    {
        icon: '../img/mail.svg',
        text: ' Level 1, 12 Sample St, Sydney'
    },
    {
        icon: '../img/tel.svg',
        text: ' (270) 555-0117'
    }
]

const contactlist = document.createElement('ul');
contact.appendChild(contacth);
contact.appendChild(contactlist);
for(let i = 0; i < contactarr.length; i++){ 
    const li = document.createElement('li');
    contactlist.appendChild(li);

    const icon = document.createElement('img');
    icon.src = contactarr[i].icon;
    li.appendChild(icon)

    const span = document.createElement('span');
    li.appendChild(span);
    span.innerHTML = contactarr[i].text;
}




