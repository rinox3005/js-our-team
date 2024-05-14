'use strict';
// array con oggetti my team
const myTeam = [{
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
}, {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
}, {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
}, {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
}, {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
}, {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
}];

// mostro l'array di oggetti in console
console.log(myTeam);

// creo la lista non ordinata
const ul = document.createElement('ul');

// prendo dal dom l'elemento con id team
const cardContainer = document.getElementById('team');

// appendo l'ul al container
cardContainer.append(ul);

// ciclo sull'array per prendere gli elementi che mi servono
for (let i = 0; i < myTeam.length; i++) {

    // assegno una variabile per una migliore lettura del codice
    const user = myTeam[i];

    // stampo in console il contenuto degli oggetti del mio array
    console.log('Name:', user.name);
    console.log('Role:', user.role);
    console.log('Image:', user.image);

    // creo degli elementi html
    const li = document.createElement('li');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    // riempio i miei elementi html
    img.src = `/img/${user.image}`;
    h3.innerText = user.name;
    p.innerText = user.role;

    // appendo i list item alla lista non ordinata
    ul.append(li);

    // appendo gli elementi html, contenuto della mia card, ad ogni ul
    li.append(img);
    li.append(h3);
    li.append(p);
}

