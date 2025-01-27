//use id tags to create variables
const myInput = document.getElementById("addInput");
const myButton = document.getElementById("addButton");
const myList = document.getElementById('myList');


//create event listener for every "click" of the button
myButton.addEventListener('click', function() {
	const userInput = myInput.value; //takes the value of the input
	
    const item = document.createElement('li'); //creates the list element
	item.innerHTML = userInput; //sets content to the input value
	myList.appendChild(item); //adds item to the ul
});

    

