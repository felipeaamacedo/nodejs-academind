# NodeJS Complete Guide

## Used modules

* nodemon


### nodemon
This is a Third-Party Package (3PP) that is used during development to restart the server everytime it has been saved, applying all modification, and no having to press ctrl+c, Y, and npm start comand again.

#### installation and instructions
https://www.npmjs.com/package/nodemon

run it as development component.
```
npm install --save-dev nodemon
```

then in the package.json add in the script section, a:

start attribute, and use **npm start** to run, 
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js"
  },
```
or dev, to run with **npm run dev**.
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon app.js"
  },
```
## Types of dependencies
* production dependency, install with **--save** tag;
* development dependency, intall package with **--save-dev** tag;
* global dependency, install package with **-g** tag.


## Types of Errors
* syntax errors;
* runtime errors; and
* logical errors.

### syntax errors
Usualy the IDE lint them for you, with linters. Therfore you have in which line it is, and then you fix it. In case of missing }, take a look in the previous code blocks and check where they close, and where they were supposed to close.

### runtime errors
Usually the code sends an error, and if you read it carefully you'll see that it gives hints of how to solve it.

### Logical error
Code runs, it doesn't show any error message, but the code doesn't behave as expected. Take a look on what it is doing wrong then go to the code and check it again. You can also use the nodejs debugger, that works well with vscode.

## Working with the debugger
* Debugging Node in Visual Studio Code: https://code.visualstudio.com/docs/nodejs/nodejs-debugging

* More on debugging Node.js: https://nodejs.org/en/docs/guides/debugging-getting-started/