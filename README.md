# BuildBook Coding Exercise

## Overview
In a programming language of your choice, create a command line (console) application that applies a batch of changes to an input file in order to create an output file.

In the instructions below, we provide you with the input JSON file, which is called `spotify.json`, and we tell you the types of changes your application should support. You will design the structure of the changes file and you will write write the code that processes the specified changes and outputs a new file.

We’ll expect to interact with your application like this:

`$ application-name <input-file> <changes-file> <output-file>`

For example:

`$ myapp spotify.json changes.json output-file.json`

## Background
### Why a take-home exercise?
In our experience take-home exercises, compared to technical phone screens, are more objective, and they facilitate a more equitable interview process.

Furthermore, in the normal course of software development, you have the freedom to mine your previous assignments, search Stack Exchange and Google, solicit advice from friends and relatives, and engage in quiet contemplation in order to solve problems. We do that too, and we’d like to see you exhibit a real-world-style work product.

### How much time should I invest?
BuildBook devs have completed this exercise ourselves, and we think that an hour or two of development time is reasonable for an engineer with the level of experience we're looking for right now. Spend more or less time on this, it’s up to you, but please don’t let perfect be the enemy of good — we’d rather see something that illustrates your talents than miss out on a chance to work with you.

We respect your time and we will accept and review any solution you submit, full or partial. If you can’t invest the time to show us your best work, we’re open to discussing alternatives.

## Considerations
### Logistics

 * Keep it simple: focus on implementing the set of changes enumerated below. Your application doesn’t need to handle any other operations.
 * Assume that other people have to run, read, and support your code, that we’re going to run tests against it, and that future assignments will build upon it.
 * Use any language, tools, or solutions you see fit.
 * If you find yourself having problems, we value something that executes but is functionally incomplete more than something that doesn't run at all.

## OK, let’s go!
### Project Requirements
Here are the basic parameters for this exercise:

 * This input JSON file consists of a set of users, songs, and playlists that are part of an online music service: [spotify.json](https://gist.githubusercontent.com/vitchell/fe0b1cb51e158058fb1b9d827584d01f/raw/f00f4d94d9d87b0d928bb3766a2667fb502d7407/spotify.json).
 * Your application ingests `spotify.json`.
 * Your application ingests a changes file, which can take whatever form you like (we use `changes.json` in our example, but you’re free to name it whatver, and format it as text, YAML, CSV, or whatever).
 * Your application outputs `output.json` in the same structure as `spotify.json`, with the changes applied. The types of changes you need to support are ennumerated below.
 * Your solution includes a README that explains how to use your application and a way to validate its output.
 * Your README describes what changes you would need to make in order to scale this application to handle very large input files and/or very large changes files. Just describe these changes — please do *not* implement a scaled-up version of the application.
 * Your README includes any thoughts on design decisions you made that you think are appropriate.
 * Your README includes how long you spent on the project, and any other thoughts you might have or want to communicate.
 * Don’t worry about creating a UI, DB, server, or deployment as a part of the code you're writing.
 * Your code should be executable on Mac or Linux.
 
 The types of changes your application needs to support are:

 * Add an existing song to an existing playlist.
 * Add a new playlist for an existing user; the playlist should contain at least one existing song.
 * Remove an existing playlist.

## Project Delivery
Send your working code and your README, which should also include instructions for how to run your project, including instructions about any dependencies.  We'd prefer this as a GitHub repo, but we'll take alternatives including a zipped up project folder. 

# What happens next?
After you submit your code, we will evaluate it, and contact you about next steps, which may involve further elaboration on your code submission.

Thanks again for your time and we look forward to receiving your reply!

The BuildBook Engineering Team
