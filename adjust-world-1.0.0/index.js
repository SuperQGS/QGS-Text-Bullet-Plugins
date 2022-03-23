const bullet = require('./bullet');
const plugin = bullet.makePlugin('adjust-world-1.0.0');

//change these numbers to your desired edge distance and world seed
const distance = 500000;
const seed = 20171007;

//set world edge distance
bullet.worldGen.patchGenerator(bullet.worldGen.getGeneratorRaw(), bullet.worldGen.getGeneratorRaw().replace(/edgeDist/g, distance));

//set world seed
bullet.worldGen.setSeed(seed);