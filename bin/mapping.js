#!/usr/bin/env node

var base36String = '0123456789abcdefghijklmnopqrstuvwxyz';
var output = [];
for (var i = 0, len = 16; i < len; i++) {
	output.push(base36String.split('').sort(function(){
		return 0.5-Math.random();
	}).join(''));
}

console.log(output);