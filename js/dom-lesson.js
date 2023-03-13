'use strict';

// query selector
// let myButton = document.querySelector('.btn');

//Get element by Id
// let myButton2 = document.getElementById('#clickMe')

//query selector all
let clickMe = document.querySelector('#clickMe');
let allButtons = document.querySelectorAll('.btn');
let pageWrapper = document.querySelector('.page-wrapper');
//How to change the click me text
// console.log(clickMe.innerText)
clickMe.innerText = 'button!'


//selecting an html element and adding a new html node using insertAdjacentHTML
let btnColumn = document.querySelector('#btnColumn')
let newHtml = `
    <button class="btn">
        New Button 
     </button>
`;
//creating a node on the fly
let buttonNode = document.createElement('button');
buttonNode.classList.add('btn');
// btnColumn.insertAdjacentHTML('beforeend', '<p>Hello codeup class!</p>')
btnColumn.insertAdjacentHTML('beforeend', newHtml)

//on the fly button things
btnColumn.appendChild(buttonNode);
buttonNode.innerHTML = `I am a new button! Third button!`
buttonNode.addEventListener('click', function(){
    alert('You clicked the third button!')
})

//
//changing background colors of a button
// allButtons.forEach(function(button) {
//     button.style.backgroundColor = 'blue';
// })


//applying a clickMe eventListener to turn the background red
// clickMe.addEventListener('click', function(){
//     pageWrapper.classList.toggle('grey')
// })

