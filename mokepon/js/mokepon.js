let playerAttack;
let enemyAttack;
let playerLives = 3;
let enemyLives = 3;

function startGame() {
	let sectionSelectAttack = document.getElementById('selectAttack');
	sectionSelectAttack.style.display = 'none';

	let sectionReset = document.getElementById('reset');
	sectionReset.style.display = 'none';

	let buttonPetPlayer = document.getElementById('buttonPetPlayer');
	buttonPetPlayer.addEventListener('click', selectPetToPlayer);
	let fireButton = document.getElementById('fireButton');
	fireButton.addEventListener('click', fireAttack);
	let waterButton = document.getElementById('waterButton');
	waterButton.addEventListener('click', waterAttack);
	let earthButton = document.getElementById('earthButton');
	earthButton.addEventListener('click', earthAttack);

	let resetButton = document.getElementById('resetButton');
	resetButton.addEventListener('click', resetGame);
}

function selectPetToPlayer() {
	let sectionSelectPet = document.getElementById('petSelection');
	sectionSelectPet.style.display = 'none';

	let selectAttack = document.getElementById('selectAttack');
	selectAttack.style.display = 'block';

	let inputHipodoge = document.getElementById('hipodoge');
	let inputCapipepo = document.getElementById('capipepo');
	let inputRatigueya = document.getElementById('ratigueya');
	let spanPetPlayer = document.getElementById('petPlayer');

	if (inputHipodoge.checked) {
		spanPetPlayer.innerHTML = 'Hipodoge';
	} else if (inputCapipepo.checked) {
		spanPetPlayer.innerHTML = 'Capipepo';
	} else if (inputRatigueya.checked) {
		spanPetPlayer.innerHTML = 'Ratigueya';
	} else {
		alert('Selecciona una mascota');
	}

	selectPetEnemy();
}

function selectPetEnemy() {
	let ataqueAleatorio = aleatorio(1, 3);
	let spanPetEnemy = document.getElementById('petEnemy');
	if (ataqueAleatorio == 1) {
		spanPetEnemy.innerHTML = 'Hipodoge';
	} else if (ataqueAleatorio == 2) {
		spanPetEnemy.innerHTML = 'Capipepo';
	} else {
		spanPetEnemy.innerHTML = 'Ratigueya';
	}
}

function fireAttack() {
	playerAttack = 'FUEGO';
	aleatoryAttackEnemy();
}
function waterAttack() {
	playerAttack = 'AGUA';
	aleatoryAttackEnemy();
}
function earthAttack() {
	playerAttack = 'TIERRA';
	aleatoryAttackEnemy();
}

function aleatoryAttackEnemy() {
	let attackAleatory = aleatorio(1, 3);
	if (attackAleatory == 1) {
		enemyAttack = 'FUEGO';
	} else if (attackAleatory == 2) {
		enemyAttack = 'AGUA';
	} else {
		enemyAttack = 'TIERRA';
	}
	fight();
}
function aleatorio(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function fight() {
	let spanLivesPlayer = document.getElementById('livesPlayer');
	let spanLivesEnemy = document.getElementById('livesEnemy');
	if (playerAttack == enemyAttack) {
		createMessage('Empate');
	} else if (playerAttack == 'FUEGO' && enemyAttack == 'TIERRA') {
		createMessage('Ganaste');
		enemyLives--;
		spanLivesEnemy.innerHTML = enemyLives;
	} else if (playerAttack == 'AGUA' && enemyAttack == 'FUEGO') {
		createMessage('Ganaste');
		enemyLives--;
		spanLivesEnemy.innerHTML = enemyLives;
	} else if (playerAttack == 'TIERRA' && enemyAttack == 'AGUA') {
		createMessage('Ganaste');
		enemyLives--;
		spanLivesEnemy.innerHTML = enemyLives;
	} else {
		createMessage('Perdiste');
		playerLives--;
		spanLivesPlayer.innerHTML = playerLives;
	}
	reviewLives();
}

function createMessage(resultado) {
	let message = document.getElementById('messages');
	let paragraph = document.createElement('p');
	paragraph.innerHTML =
		'Tu mascota atacó con ' +
		playerAttack +
		', las mascota del enemigo atacó con ' +
		enemyAttack +
		'- ' +
		resultado;
	message.appendChild(paragraph);
}

function reviewLives() {
	if (playerLives == 0) {
		createFinallyMessage('Perdiste');
	} else if (enemyLives == 0) {
		createFinallyMessage('Ganaste');
	}
}

function createFinallyMessage(resultadoFinal) {
	let sectionMensajes = document.getElementById('messages');
	let paragraph = document.createElement('p');
	paragraph.innerHTML = resultadoFinal;

	sectionMensajes.appendChild(paragraph);

	let buttonWater = document.getElementById('waterButton');
	buttonWater.disabled = true;
	let buttonFire = document.getElementById('fireButton');
	buttonFire.disabled = true;
	let buttonEarth = document.getElementById('earthButton');
	buttonEarth.disabled = true;

	let resetSection = document.getElementById('reset');
	resetSection.style.display = 'block';
}
function resetGame() {
	location.reload();
}

window.addEventListener('load', startGame);
