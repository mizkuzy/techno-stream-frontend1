'use strict';

const fs = require('fs');

const text = fs.readFileSync('first.js', 'utf8');
console.log(text);