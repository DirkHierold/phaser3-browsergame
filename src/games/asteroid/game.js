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
		getRandomEnemyPos()
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
	[targetX, targetY] = getRandomTargetPos();
}

function drawTarget() {
	gameFieldContext.drawImage(target, targetX, targetY, targetSize, targetSize);
}

function getNewEnemy() {
	enemyPositions.push(getRandomEnemyPos())
	enemyDirection.push(getRandomDirection())
}

function targetReached() {

	if (targetComplete &&
		isPixelColliding(
			gameFieldContext,
			player, playerX, playerY, playerSize, playerSize,
			target, targetX, targetY, targetSize, targetSize
		)) {
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

function getRandomEnemyPos() {
	// Find the center of the player
	const playerCenterX = playerX + playerSize / 2;
	const playerCenterY = playerY + playerSize / 2;

	// Decide which half to spawn in (opposite of player)
	let x, y;
	if (playerCenterX < gameField.width / 2) {
		// Player is on the left, spawn enemy on the right
		x = gameField.width / 2 + enemySize + Math.floor(Math.random() * (gameField.width / 2 - 2 * enemySize));
	} else {
		// Player is on the right, spawn enemy on the left
		x = enemySize + Math.floor(Math.random() * (gameField.width / 2 - 2 * enemySize));
	}

	if (playerCenterY < gameField.height / 2) {
		// Player is on the top, spawn enemy on the bottom
		y = gameField.height / 2 + enemySize + Math.floor(Math.random() * (gameField.height / 2 - 2 * enemySize));
	} else {
		// Player is on the bottom, spawn enemy on the top
		y = enemySize + Math.floor(Math.random() * (gameField.height / 2 - 2 * enemySize));
	}

	return [x, y];
}

function getRandomTargetPos() {
	return [enemySize + Math.floor(Math.random() * (gameField.width - 2 * enemySize)),
	enemySize + Math.floor(Math.random() * (gameField.height - 2 * enemySize))];
}

function getRandomDirection() {
	// Bereich: [-3, -1] ∪ [1, 3]
	function randomComponent() {
		const sign = Math.random() < 0.5 ? -1 : 1;
		// Wert zwischen 1 und 3
		return sign * (1 + Math.random() * 2);
	}
	return [randomComponent(), randomComponent()];
}

function checkCollidingWithEnemies() {
	for (let nr = 0; nr < enemyPositions.length; nr++) {
		// if (isColliding(playerX, playerY, playerSize, enemyPositions[nr][0], enemyPositions[nr][1], enemySize)) {
		// 	// Zusammenstoß
		// 	collideWithEnemy();
		// }

		if (isPixelColliding(
			gameFieldContext,
			player, playerX, playerY, playerSize, playerSize,
			enemy, enemyPositions[nr][0], enemyPositions[nr][1], enemySize, enemySize
		)) {
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

/**
 * Pixelperfekte Kollision zweier Bilder auf dem Canvas.
 * Nutzt als Vorfilter einen Bounding-Box-Test.
 * @param {CanvasRenderingContext2D} ctx - Der Canvas-Kontext.
 * @param {Image} imgA - Erstes Bild.
 * @param {number} ax - X-Position von Bild A.
 * @param {number} ay - Y-Position von Bild A.
 * @param {number} aw - Breite von Bild A.
 * @param {number} ah - Höhe von Bild A.
 * @param {Image} imgB - Zweites Bild.
 * @param {number} bx - X-Position von Bild B.
 * @param {number} by - Y-Position von Bild B.
 * @param {number} bw - Breite von Bild B.
 * @param {number} bh - Höhe von Bild B.
 * @returns {boolean} true, wenn eine pixelgenaue Kollision vorliegt.
 */
function isPixelColliding(ctx, imgA, ax, ay, aw, ah, imgB, bx, by, bw, bh) {
	// Bounding-Box-Test (frühzeitiger Ausstieg)
	if (
		ax + aw <= bx || bx + bw <= ax ||
		ay + ah <= by || by + bh <= ay
	) {
		return false;
	}

	// Überlappenden Bereich berechnen
	const left = Math.max(ax, bx);
	const right = Math.min(ax + aw, bx + bw);
	const top = Math.max(ay, by);
	const bottom = Math.min(ay + ah, by + bh);
	let width = right - left;
	let height = bottom - top;

	// Immer aufrunden, damit Canvas gültige Werte bekommt
	width = Math.ceil(width);
	height = Math.ceil(height);

	if (!width || !height || width <= 0 || height <= 0) return false;

	// Quell-Offsets und Skalierung berechnen (wie gehabt)
	const sxA = (left - ax) * (imgA.width / aw);
	const syA = (top - ay) * (imgA.height / ah);
	const swA = width * (imgA.width / aw);
	const shA = height * (imgA.height / ah);

	const sxB = (left - bx) * (imgB.width / bw);
	const syB = (top - by) * (imgB.height / bh);
	const swB = width * (imgB.width / bw);
	const shB = height * (imgB.height / bh);

	// Offscreen-Canvas für beide Bilder erzeugen
	const canvasA = document.createElement('canvas');
	canvasA.width = width;
	canvasA.height = height;
	const ctxA = canvasA.getContext('2d');
	ctxA.drawImage(imgA, sxA, syA, swA, shA, 0, 0, width, height);

	const canvasB = document.createElement('canvas');
	canvasB.width = width;
	canvasB.height = height;
	const ctxB = canvasB.getContext('2d');
	ctxB.drawImage(imgB, sxB, syB, swB, shB, 0, 0, width, height);

	// Bilddaten holen
	const dataA = ctxA.getImageData(0, 0, width, height).data;
	const dataB = ctxB.getImageData(0, 0, width, height).data;

	// Pixelweise prüfen (nur Alpha-Kanal)
	for (let i = 0; i < width * height; i++) {
		if (dataA[i * 4 + 3] > 0 && dataB[i * 4 + 3] > 0) {
			return true;
		}
	}
	return false;
}