$(document).ready(function () {
	startNewGame();
});

let gameField;
let gameFieldContext;
let target, enemy, player, background;
let playerX;
let playerY;
let playerSize;

let targetX;
let targetY;
let targetSize;
let targetComplete;

let score;

const maxGameTime = 45;
let remainingTime;
let startTime;

let gameOver;

let enemyDirection;
let enemySize;
let enemyPositions;

let isTouch;
let isClicked;

let localStorage;
let highscore;
let alltime;

let actualTouchX = 0;
let actualTouchY = 0;
let oldTouchX = 0;
let oldTouchY = 0;

function startNewGame() {
	isClicked = false;

	playerX = 0;
	playerY = 0;
	playerSize = 0;

	targetX = 0;
	targetY = 0;
	targetSize = 0;
	targetComplete = false;

	remainingTime = 0;
	startTime = new Date();

	gameOver = false;

	enemySize = 0;

	gameField = document.getElementById("gameField");
	gameFieldContext = gameField.getContext("2d");

	let reloadButton = document.getElementById("reloadButton");

	window.addEventListener('resize', resizeCanvas, false);

	resizeCanvas();

	score = 0;
	$('#score').html('Score: ' + score);

	localStorage = window.localStorage;
	highscore = 0;
	if (localStorage.getItem("highscore") != null) {
		highscore = localStorage.getItem("highscore")
	}
	$('#highscore').html('Highscore: ' + highscore);

	alltime = 0;
	if (localStorage.getItem("alltime") != null) {
		alltime = localStorage.getItem("alltime")
	}
	$('#alltime').html('Alltime: ' + alltime);

	player = new Image();
	player.src = '/images/dino.png';

	player.onload = function () {
		drawPlayer();
	}

	background = new Image();
	background.src = '/images/grass.jpg';

	background.onload = function () {
		drawBackground();
	}

	target = new Image();
	target.src = '/images/blue-dino.png';

	target.onload = function () {
		getNewTarget();
		drawTarget();
		targetComplete = true;
	}

	// function spielende() {
	// 	clearInterval(takt);
	// 	$('#spielendeanzeige').show();
	// }

	enemy = new Image();
	enemy.src = '/images/asteroid.png';

	enemyPositions = [
		getRandomPos()
	];

	enemyDirection = [
		getRandomDirection()
	];

	enemy.onload = function () {
		for (let i = 0; i < enemyPositions.length; i++) {
			drawEnemy(enemyPositions[i])
		}
	}

	reloadButton.addEventListener("click", reloadClick)

	gameField.addEventListener('touchstart', handleStart);
	gameField.addEventListener('mousedown', handleStart);
	// spielfeld.addEventListener('touchend', handleEnd);
	// spielfeld.addEventListener('touchcancel', handleCancel);
	gameField.addEventListener('touchmove', handleMove);
	gameField.addEventListener('mousemove', handleMove);
	gameField.addEventListener('mouseup', handleEnd);

	window.requestAnimationFrame(loop);
}

function isColliding(x1, y1, size1, x2, y2, size2) {
	const r1 = 0.5 * size1
	const r2 = 0.5 * size2

	const dx = (x2 + r2) - (x1 + r1)
	const dy = (y2 + r2) - (y1 + r1)

	const dx2 = Math.pow(dx, 2)
	const dy2 = Math.pow(dy, 2)

	const distance = Math.sqrt(dx2 + dy2)
	return (distance - r1 - r2 <= 0)
}

function getNewTarget() {
	[targetX, targetY] = getRandomPos();
}

function drawTarget() {
	gameFieldContext.drawImage(target, targetX, targetY, targetSize, targetSize);
}

function getNewEnemy() {
	enemyPositions.push(getRandomPos())
	enemyDirection.push(getRandomDirection())
}

function targetReached() {

	if (targetComplete && isColliding(playerX, playerY, playerSize, targetX, targetY, targetSize)) {
		// Ziel erreicht!
		console.log(playerX, playerY, playerSize, targetX, targetY, targetSize)
		console.log("Target reached!");

		// neues Ziel erzeugen
		getNewTarget();

		// neuen Gegner erzeugen
		getNewEnemy();

		score++;
		alltime++;
		// console.log(localStorage)
		localStorage.setItem("score", score)
		$('#score').html('Score: ' + score);

		localStorage.setItem("alltime", alltime)
		$('#alltime').html('Alltime: ' + alltime);
		// console.log(localStorage)
		if (score > highscore) {
			highscore = score;
			localStorage.setItem("highscore", highscore)
			$('#highscore').html('Highscore: ' + highscore);
		}
	}
}

function drawBackground() {
	gameFieldContext.drawImage(background, 0, 0, gameField.width, gameField.height);
}

function setEnemies() {
	for (let nr = 0; nr < enemyPositions.length; nr++) {

		if (nr == 0) {
			enemyPositions[nr][0] += 0.01 * (playerX - enemyPositions[nr][0]);
			enemyPositions[nr][1] += 0.01 * (playerY - enemyPositions[nr][1]);
		} else {
			enemyPositions[nr][0] += enemyDirection[nr][0] * 1;
			enemyPositions[nr][1] += enemyDirection[nr][1] * 1;
		}


		if (enemyPositions[nr][0] > gameField.width - enemySize || enemyPositions[nr][0] < 0) {
			enemyDirection[nr][0] *= -1;
		}
		if (enemyPositions[nr][1] > gameField.height - enemySize || enemyPositions[nr][1] < 0) {
			enemyDirection[nr][1] *= -1;
		}
		drawEnemy(enemyPositions[nr]);
	}
}

function reloadClick(evt) {
	startNewGame();
	reloadButton.style.display = "none";
}

function drawEnemy(g) {
	gameFieldContext.drawImage(enemy, g[0], g[1], enemySize, enemySize);
}

function loop(time) {
	gameFieldContext.clearRect(0, 0, gameField.width, gameField.height);
	drawBackground();
	drawTarget();
	drawPlayer();
	targetReached();
	setEnemies();
	checkCollidingWithEnemies();

	// let aktuellezeit = new Date();
	// restzeit = spielzeit - Math.floor((aktuellezeit.getTime()-startzeit.getTime()) / 1000);
	// $('#spielzeit').html('Spielzeit: ' + restzeit);
	// if (restzeit <= 0) {
	//     // spielende();
	// }
	if (!gameOver)
		window.requestAnimationFrame(loop)
}

function getRandomPos() {
	return [enemySize + Math.floor(Math.random() * (gameField.width - 2 * enemySize)), enemySize + Math.floor(Math.random() * (gameField.height - 2 * enemySize))];
}

function getRandomDirection() {
	return [Math.floor(-3 + Math.random() * 6), Math.floor(-3 + Math.random() * 6)];
}

function checkCollidingWithEnemies() {
	for (let nr = 0; nr < enemyPositions.length; nr++) {
		if (isColliding(playerX, playerY, playerSize, enemyPositions[nr][0], enemyPositions[nr][1], enemySize)) {
			// Zusammenstoß
			collideWithEnemy();
		}
	}
}

function collideWithEnemy() {
	gameOver = true
	reloadButton.style.display = "block"
}

function setSizes() {
	let smallerSide = gameField.width;
	if (smallerSide > gameField.height) {
		smallerSide = gameField.height;
	}
	playerSize = smallerSide / 10
	targetSize = smallerSide / 10
	enemySize = smallerSide / 10
}

function drawPlayer() {
	gameFieldContext.drawImage(player, playerX, playerY, playerSize, playerSize);
}

function resizeCanvas() {
	if (window.orientation !== undefined)// if mobile
	{
		gameField.width = document.documentElement.clientWidth;
		gameField.height = document.documentElement.clientHeight;
		isTouch = true;
	}
	else { // if pc
		gameField.width = window.innerWidth;
		gameField.height = window.innerHeight;
		isTouch = false;
	}

	setSizes();
}

function handleStart(evt) {
	// console.log("start",evt,isTouch)	
	if (isTouch) {
		evt.preventDefault();

		const touches = evt.changedTouches;

		oldTouchY = touches[0].clientY;
		oldTouchX = touches[0].clientX;
	} else {
		isClicked = true;
		oldTouchY = evt.clientY;
		oldTouchX = evt.clientX;
	}
}

function handleEnd(evt) {
	// console.log("end",evt,isTouch)	
	isClicked = false;
}

function handleMove(evt) {
	// console.log("move",evt,isTouch)	
	if (isTouch) {
		evt.preventDefault();
		const touches = evt.changedTouches;
		actualTouchY = touches[0].clientY
		actualTouchX = touches[0].clientX
	} else if (isClicked) {
		actualTouchY = evt.clientY
		actualTouchX = evt.clientX
	}

	playerY += actualTouchY - oldTouchY
	playerX += actualTouchX - oldTouchX

	oldTouchY = actualTouchY
	oldTouchX = actualTouchX

	if (playerY <= 0) {
		playerY = 0;
	} else if (playerY >= gameField.height - playerSize) {
		playerY = gameField.height - playerSize;
	}
	if (playerX <= 0) {
		playerX = 0;
	} else if (playerX >= gameField.width - playerSize) {
		playerX = gameField.width - playerSize;
	}
}