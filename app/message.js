'use strict';

const createErr = '# Création de la carte au trésor impossible.';
const createInPending = '# Carte en cours de création.';
const createOk = '# Carte créée avec succès !';
const errorProgram =
	'# Le programme ne peut être lancé. Veuillez corriger votre ficher avant de relancer le programme.';
const errorMove =
	"L'instruction de mouvement n'a pas été reconnu par le programme.";

module.exports = {
	createErr,
	createOk,
	createInPending,
	errorProgram,
	errorMove,
};
