#!/usr/bin/env node

/**
 * buildbook
 * CLI to transform JSON changes
 *
 * @author Hannah Rachel Geisman
 */

// native node sync/async file package
const fs = require('fs');

// initialize CLI flags and log
const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);

	init({ input });

	// assign source, changes and target from command line switches
	const inputFile = flags.input;
	const changesFile = flags.changes;
	const outputFile = flags.output;
	
	// Stream in source file
	const data = JSON.parse(fs.readFileSync('./' + inputFile));

	// Stream in changes file
	const changes = JSON.parse(fs.readFileSync('./' + changesFile));

	for(const [table, actions] of Object.entries(changes)) {
		if(!(table in data))continue;
		
		// iterate through inner CRUD directives and mutate payloads
		for(const actionDetail of actions) {

			// Add a new playlist for an existing user; the playlist should contain at least one existing song.
			if(actionDetail.action === 'create') {
				// In production situation we do not know if unique ID's will already be assigned, or will we 
				// need to internally assign new ID's. For coding exercise, just using manually incremented ID in changes.json
				// If no ID exists in ingested 3rd party json, we would not have ID field in changes.json and then get
				// the length of the current array, increment, assign new ID to payload and push.
						// Get how many records to add new id number
						// let currentRecord = data[table].length;
						// currentRecord++;
						// Instantiate new key/value for ID and push
				data[table].push(...actionDetail.payload);
				// write out new source from changes
				fs.writeFileSync('output.json', JSON.stringify(data, null, 2));
			}

			// Remove an existing playlist.  To delete, in changes.json we just need the ID in payload
			if(actionDetail.action === 'delete') {
				// Get changes ID to remove element
				const indexToRemove = data.playlists.findIndex((pl) => pl.id === actionDetail.payload[0].id);
				// Mutate array in place without making a copy
			  const indexRemoved = data.playlists.splice(indexToRemove, 1);
				// Update array and remove playlist
				data[table].push();
				// Write update to source
				fs.writeFileSync('output.json', JSON.stringify(data, null, 2));
			}

			// Add an existing song to an existing playlist. 
			if(actionDetail.action === 'update') {
				// Get changes ID to remove element
				const indexToRemove = data.playlists.findIndex((pl) => pl.id === actionDetail.payload[0].id);
				// Mutate array in place without making a copy
			  const indexRemoved = data.playlists.splice(indexToRemove, 1);
				// Update array in place with additional song
				data[table].push(...actionDetail.payload);
				// Write update to source
				fs.writeFileSync('output.json', JSON.stringify(data, null, 2));
			}
		}
	}
})();
