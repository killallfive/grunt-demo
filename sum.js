#!/usr/bin/node

if(process.argv.length != 4) {
    console.log('sum x y');
    process.exit(1);
}

var x = Number(process.argv[2]);
var y = Number(process.argv[3]);

console.log(`${x} + ${y} = ${x+y}`);