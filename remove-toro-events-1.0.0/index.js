const bullet = require('./bullet');
const plugin = bullet.makePlugin('remove-toro-events-1.0.0');

//run whenever an event is added to the game
plugin.on('travelers::addEvent', (id, event) => {
    
    //if the event is one of these (toro's events), set the weight to 0
    
    //CITIES
    if(event.id === 'desolate') { event.weight = 0};
    if(event.id === 'walled') { event.weight = 0 };
    if(event.id === 'blasted') { event.weight = 0 };
    if(event.id === 'governing') { event.weight = 0 };
    if(event.id === 'withered') { event.weight = 0 };
    
    //HOUSES
    if(event.id === 'barn') { event.weight = 0 };
    if(event.id === 'cabin') { event.weight = 0 };
    if(event.id === 'childcare') { event.weight = 0 };
    if(event.id === 'church') { event.weight = 0 };
    if(event.id === 'garage') { event.weight = 0 };
    if(event.id === 'humble') { event.weight = 0 };
    if(event.id === 'low') { event.weight = 0 };
    if(event.id === 'old') { event.weight = 0 };
    if(event.id === 'pet') { event.weight = 0 };
    if(event.id === 'ruined') { event.weight = 0 };
    if(event.id === 'shack') { event.weight = 0 };
    if(event.id === 'weathered') { event.weight = 0 };
    
}, 100);