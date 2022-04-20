const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: false,
		alias: `c`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	input: {
		type: `string`,
		alias: `s`,
		default: `spotify.json`,
		desc: `JSON source file`
	},
	changes: {
		type: `string`,
		alias: `c`,
		default: `changes.json`,
		desc: `JSON changes file`
	},
	output: {
		type: `string`,
		alias: `o`,
		default: `output.json`,
		desc: `JSON output file`
	},

};

const commands = {
	help: { desc: `Print help info` }
};

const helpText = meowHelp({
	name: `file`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
