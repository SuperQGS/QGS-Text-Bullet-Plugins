const bullet = require('./bullet');
const plugin = bullet.makePlugin('monument-event-1.0.0');

//when plugin loads, add monument.json as event
plugin.on('ready', () => {
    bullet.emit('travelers', 'addEvent', "monument", require('./monument.json'));
});

bullet.chunks.waitForChunkToBeLoaded(0, 0).then(() => { //when chunk 0,0 is loaded
    
    if (bullet.chunks.isObjectHere(0, 0)) { //if there is an object at 0,0
        
        if (bullet.chunks.getObject(0,0).private.type !== "monument") { //if that object is not the monument
            bullet.chunks.removeObject(0,0); //delete the object
            bullet.emit('travelers', 'addEventTile', 0, 0, "▋", "monument", "monument"); //put the monument there
        }
        //if it is the monument, do nothing!
    }
    
    else { //if there is no object there
        bullet.emit('travelers', 'addEventTile', 0, 0, "▋", "monument", "monument"); //place the monument at 0,0
    }
    
});

//to change what the monument says, edit monument.json