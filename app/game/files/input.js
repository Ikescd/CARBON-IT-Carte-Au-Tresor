'use strict';
const fs = require('fs');
const file = './files/input.txt';
const input = fs
	.readFileSync(file, { encoding: 'utf8', flag: 'r' })
	.split('\n');

let gameData = {
	mapSize: [],
	treasureList: [],
	mountainList: [],
	adventurerList: [],
	mapPattern: [],
};

const checkInput = () => {
	setGameData();
	if (gameData.mapSize.length > 1) {
		return false;
	} else {
		createMapPattern();
		return true;
	}
};

const createMapPattern = () => {
	let pattern = [];
	for (let i = 0; i < gameData.mapSize[0].axisY; i++) {
		let linePattern = [];
		for (let j = 0; j < gameData.mapSize[0].axisX; j++) linePattern.push([]);
		pattern.push(linePattern);
	}
	gameData['mapPattern'] = pattern;
};

const setGameData = () => {
	input.forEach((element) => {
		const value = element.replace(/\s+/g, '').split('-');
		let array = {};

		array['type'] = value[0];
		array['axisX'] = parseInt(value[1]);
		array['axisY'] = parseInt(value[2]);

		switch (value[0]) {
			case 'C':
				gameData.mapSize.push(array);
				break;
			case 'T':
				array['nb'] = parseInt(value[3]);
				gameData.treasureList.push(array);
				break;
			case 'M':
				gameData.mountainList.push(array);
				break;
			case 'A':
				array['name'] = value[1];
				array['axisX'] = parseInt(value[2]);
				array['axisY'] = parseInt(value[3]);
				array['cardinal'] = value[4];
				array['moves'] = value[5].split('');
				array['treasures'] = 0;
				gameData.adventurerList.push(array);
			default:
				break;
		}
	});
};

module.exports = {
	checkInput,
	gameData,
};
