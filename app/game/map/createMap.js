'use strict';

const { gameData } = require('../input');

const createMap = () => {
	setItem(gameData.treasureList) ? true : false;
	setItem(gameData.mountainList) ? true : false;
	setItem(gameData.adventurerList) ? true : false;
};

const setItem = (item) => {
	item.forEach((element) => {
		if (
			gameData.mapPattern.length <= element.axisY ||
			gameData.mapPattern[0].length <= element.axisX
		) {
			console.log(
				"Impossible de positionner l'élément. Le programme est contraint de s'arrêter."
			);
			return false;
		} else {
			const cell = gameData.mapPattern[element.axisY][element.axisX];

			let content = [];

			switch (element.type) {
				case 'A':
					content = `${element.type}(${element.name})`;
					break;
				case 'M':
				case 'T':
					content = `${element.type}`;
					break;
				default:
					break;
			}
			cell.push(content);
		}
	});
	return true;
};

module.exports = {
	createMap,
};
