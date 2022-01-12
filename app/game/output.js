const fs = require('fs');
const file = './output.txt';
const { gameData } = require('./input');

const createOutput = () => {
	let data = [];
	output(gameData.mapSize, data);
	output(gameData.mountainList, data);
	output(gameData.treasureList, data);
	output(gameData.adventurerList, data);
	fs.writeFileSync(file, data.join(''));
};

const output = (element, data) => {
	switch (element[0].type) {
		case 'C':
			data.push(`C - ${element[0].axisX} - ${element[0].axisY}\n`);
			break;
		case 'M':
			element.forEach((item) => {
				data.push(`M - ${item.axisX} - ${item.axisY}\n`);
			});
			break;
		case 'T':
			data.push(
				`# {T Comme Trésor} - {Axe horizontal} - {Axe vertical} - {Nb. de trésors restants} \n`
			);
			element.forEach((item) => {
				data.push(`T - ${item.axisX} - ${item.axisY} - ${item.nb}\n`);
			});
			break;
		case 'A':
			data.push(
				`# {A comme Aventurier} - {Nom de l'aventurier} - {Axe horizontal} - {Axe vertical} - {Orientation} - {Nb. trésors ramassés}\n`
			);
			element.forEach((item) => {
				data.push(
					`A - ${item.name} - ${item.axisX} - ${item.axisY} - ${item.cardinal} - ${item.treasures}\n`
				);
			});
			break;
		default:
			break;
	}
};

module.exports = { createOutput };
