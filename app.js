'use strict';

const { createMap } = require('./app/game/map/createMap');
const { checkInput } = require('./app/game/input');
const { createGame } = require('./app/game/adventurer/actions');
const { createOutput } = require('./app/game/output');

const app = () => {
	checkInput()
		? createMap()
		: console.error('Impossible de lancer le programme.');
	createGame();
	createOutput();
};

module.exports = { app };
