# BuildBook JSON CLI processor

## Overview
Greeting BuildBook team. This is my solution for the JSON coding exercise. I chose to write the solution with a combination of Node, ES6 Javascript, and JSON to create a Node wrapper for a nice CLI interface that is extensible. I implemented swithces for the `input.json`, `changes.json` and `output.json` files.  In addition I tried to address scalability in the JSON ingestion format that would allow all CRUD like operations.

## Installation
To install and run the solution, please have at least Node 16++ This can be utilized by a local global copy, or by using nvm.

* Download repository to local machine.

* From command line do `npm install`

* Once dependencies finish, issue command `npm link` to bind buildbook command line to package

## Usage
To use the took, simply type `buildbook` on the command line. I have set up the switches with the default filenames.  If you wish to try solution with different filenames I have made this available also by using the following structure:

`$ buildbook -s <input-file> -c <changes-file> -o <output-file>`

I also created a help file wrapper just for grins:

`$ buildbook help`

For CLI version

`$ buildbook --version` or `$buildbook -v`

## Notes on implementation

### Total Development Time

I spent roughly 6 hours total development with this solution broken down as follows
* Thinking about and implementing changes.json structre (1 hour)
* Coding Time for CLI wrapper (1 hour)
* Coding Time for JSON solution, and logic to process solution (3 hours)
* README creation and editing (1 hour)

TOTAL TIME FOR SOLUTION: `6 hours`

### Data structure
In thinking about the changes file and format, I thought the most scalable, flexible way to do this would be to create a JSON format that utilized and `action` and `payload` field. The `action` field allowing us to do CRUD style operations such as `create`, `update`, and `delete`. The `read` is redundant and a given. Along with the `action` we would include a `payload` field that included our new data for either creating new records and updating records.  For deleting, we would simply need to suppy the `id` field to be deleted.

This structure was imaginged as an array of objects in three data categories forming the hierarchy: `users`, `songs` and `playlists`. Each of these array of objects contain arrays of objects. So in effect, for very large ingestions, we could have multiple updates, multiple creates and multiple deletes per user, song or playlist.

### Implementation
In coding the implementation, I chose a path to do the speediest way to process the data, and that is not to ever make copies of the arrays, by iteration with `Object.key` or similar things, and then do operations on the arrays and then write back out.  Instead, I chose to mutate the source array `in place`.  What this entails, is I take the changes.json file and then walk through the source.json file and mutate this array with the delta (changes) and write back out. This way is much faster than internally making copies, concantentation, etc. and then writing back out.

## Scalability
For a discussion of scalability, it is a topic that to be precise in my answer, I would need to know the actual production layout of course.  Questions would need to be asked such as these:

* How large are the source.json files and where do they come from?
* If 3rd party JSON files, assuming they come as files, not as returns from API calls.  The files could be gigabyte in size?
* In creating a real ingestion engine, do we wish for this to run as a CRON type job on servers?
* Is there an automated way that we receive these files? Do we have infrastructure set up to direct/route/write these files?
* Is there automated naming conventions on the files we receive i.e. (name/date/version,etc)

As an aside of course of the `usual suspects` question. For scalability, I can speak to Node.js and it's non-locking event I/O loop. To write a service multi-threaded, we would use Node.Streams:

https://nodejs.org/api/stream.html#types-of-streams

This asynchronous implementation allows us a multi-threaded wrapper with the use of Promises, buffering, and many ways to mitigate the ingestion of very large files and processing them.  This is the way that I would expand my coding solution for Buildbook.  I am sure there are similar methods in other languages. The use of Promises would allow dozens, maybe hundreds of streams to be opened and then middleware function to be built to monitor process, receive status, error checking, etc. to happen while ingestion takes place.

Of course any discussion of scaling wouldn't be complete without an overall picture, in that when you build something like this, of course you do not ingest to files.  In our scalable solution, we would of course process out output into a database.  For this type of work, a key/value pair database might be nice, but also Postgres allows the storing and maniuplation of JSON as a native type, so an RDBMS might be the way to go.  Of course also, there might be multiple instances of the database, and also buffering front ends such as Redis might be used.  It really depends on the scale and size of the data, the speed of ingestion required and how the data in the end needs to look and how it will be used.

### Conclusion
Thank you BuildBook team for the opporutnity to work on the exercise. It was a unique coding excerise that I enjoyed working on.  Please let me know if you need anything further.