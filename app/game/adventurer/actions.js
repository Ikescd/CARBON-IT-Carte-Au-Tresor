'use strict';

const { gameData } = require('../input');

const movesLetter = {
	MOVE: 'A',
	RIGHT: 'D',
	LEFT: 'G',
};

const cardinalLetter = {
	NORTH: 'N',
	SOUTH: 'S',
	WEST: 'O',
	EAST: 'E',
};

const cellType = {
	TREASURE: 'T',
	MOUNTAIN: 'M',
};

const createGame = () => {
	gameData.adventurerList.forEach((element) => {
		move(element);
	});
};

const move = (element) => {
	element.moves.forEach((move) => {
		switch (move) {
			case movesLetter.MOVE:
				getNextMove(element);
				break;
			case movesLetter.LEFT:
				getNextCardinal(element, movesLetter.RIGHT);
				break;
			case movesLetter.RIGHT:
				getNextCardinal(element, movesLetter.LEFT);
			default:
				break;
		}
	});
};

const getNextCardinal = (element, direction) => {
	switch (element.cardinal) {
		case cardinalLetter.SOUTH:
			direction === movesLetter.RIGHT
				? (element.cardinal = cardinalLetter.EAST)
				: (element.cardinal = cardinalLetter.WEST);
			break;
		case cardinalLetter.NORTH:
			direction === movesLetter.RIGHT
				? (element.cardinal = cardinalLetter.WEST)
				: (element.cardinal = cardinalLetter.EAST);
			break;
		case cardinalLetter.WEST:
			direction === movesLetter.RIGHT
				? (element.cardinal = cardinalLetter.SOUTH)
				: (element.cardinal = cardinalLetter.NORTH);
			break;
		case cardinalLetter.EAST:
			direction === movesLetter.RIGHT
				? (element.cardinal = cardinalLetter.NORTH)
				: (element.cardinal = cardinalLetter.SOUTH);
			break;
		default:
			break;
	}
};

const getNextMove = (element) => {
	let axisY = element.axisY;
	let axisX = element.axisX;
	switch (element.cardinal) {
		case cardinalLetter.SOUTH:
			axisY >= gameData.mapPattern.length - 1 ? axisY : axisY++;
			break;
		case cardinalLetter.NORTH:
			axisY < 0 ? (axisY = 0) : axisY--;
			break;
		case cardinalLetter.WEST:
			axisX < 0 ? (axisX = 0) : axisX--;
			break;
		case cardinalLetter.EAST:
			axisX >= gameData.mapPattern[0].length - 1 ? axisX : axisX++;
			break;
		default:
			break;
	}
	const cell = gameData.mapPattern[axisY][axisX][0];
	isEmpty(cell, element, axisX, axisY);
};

const isEmpty = (cell, element, axisX, axisY) => {
	if (cell === cellType.MOUNTAIN) console.log('Déplacement impossible.');
	else if (cell === cellType.TREASURE) {
		gameData.treasureList.forEach((treasure) => {
			if (
				treasure.axisX === axisX &&
				treasure.axisY === axisY &&
				treasure.nb >= 1
			) {
				treasure.nb--;
				element.treasures++;
			}
		});
		element.axisX = axisX;
		element.axisY = axisY;
	} else {
		element.axisX = axisX;
		element.axisY = axisY;
	}
};

module.exports = { createGame };
