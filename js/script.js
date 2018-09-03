// Card data

const cardsArray = [
	{
		'name': 'shell',
		'img': 'img/blueshell.png',
	},	

	{
		'name': 'start',
		'img': 'img/star.png',
	},	

	{
		'name': 'bobomb',
		'img': 'img/bobomb.png' ,
	},	

	{
		'name': 'mario',
		'img': 'img/mario.png',
	},	

	{
		'name': 'luigi',
		'img': 'img/luigi.png',
	},	

	{
		'name': 'peach',
		'img': 'img/peach.png',
	},	

	{
		'name': '1up',
		'img': 'img/1up.png',
	},	

	{
		'name': 'mushroom',
		'img': 'img/mushroom.png',
	},	

	{
		'name': 'thwomp',
		'img': 'img/thwomp.png',
	},	

	{
		'name': 'bulletbill',
		'img': 'img/bulletbill.png',
	},	

	{
		'name': 'coin',
		'img': 'img/coin.png',
	},	

	{
		'name': 'goomba',
		'img': 'img/goomba.png',
	},	
];

// Get the div with id of game
const game = document.getElementById('game');

// Create a section with a class of grid
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

// append the grid section to the game div
game.appendChild(grid);



let gameGrid = cardsArray.concat(cardsArray);


// Randomize game grind on each load
gameGrid.sort(function() {
	return 0.5 - Math.random();
});
// gameGrid.forEach(function(item) {
// 	const card = document.createElement('div');
// 	card.setAttribute('class', 'card');
// 	card.dataset.name = item.name;
// 	card.style.backgroundImage = `url(${item.img})`;
// 	grid.appendChild(card);
// });

gameGrid.forEach(item => {
	const card = document.createElement('div');
	card.setAttribute('class', 'card');
	card.dataset.name = item.name;

	// Create front of card
	const front = document.createElement('div');
	front.classList.add('front');	

	// create back of card, which contains
	const back = document.createElement('div');
	back.classList.add('back');	
	back.style.backgroundImage = `url(${item.img})`;
	
	// Append card to grid, and font and back to each card	
	grid.appendChild(card);
	card.appendChild(front);
	card.appendChild(back);
})

let count = 0;
let firstGuess = '';
let secondGuess = '';
let previousTarget = null;
let delay = 1200;

// Add match CSS
const match = () => {
	var selected = document.querySelectorAll('.selected');
	selected.forEach(card => {
		card.classList.add('match');
	});
}

grid.addEventListener('click', function(event) {
	let clicked = event.target;
	if (clicked.nodeName === 'SECTION' ||
	    clicked == previousTarget ||
	    clicked.parentNode.classList.contains('selected')) { return; }
	if (count < 2) {
		count++;
		if (count === 1) {
			firstGuess = clicked.parentNode.dataset.name;
			clicked.parentNode.classList.add('selected');
		} else {
			secondGuess = clicked.parentNode.dataset.name;
			clicked.parentNode.classList.add('selected');
		}

		if (firstGuess !== '' && secondGuess !== '') {
			if (firstGuess === secondGuess) {
				setTimeout(match, delay);
				setTimeout(resetGuesses, delay);
			} else {
				setTimeout(resetGuesses, delay);
			}
		}
		// Set previous target to clicked
		previousTarget = clicked;
	}
});

const resetGuesses = () => {
	firstGuess = '';
	secondGuess = '';
	count = 0;
	var selected = document.querySelectorAll('.selected');
	selected.forEach(card => {
		card.classList.remove('selected');
	});
};

