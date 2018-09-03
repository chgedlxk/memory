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
	card.style.backgroundImage = `url(${item.img})`;
	grid.appendChild(card);
})
