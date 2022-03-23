const bullet = require('./bullet');
const plugin = bullet.makePlugin('remove-offline-killing-1.0.0');

//disable killing offline players
plugin.on('actions::int_killoffline', ()=>false, Infinity)

//inject js that will hide the kill button
bullet.patches.addJs("var offlineKillStyles = \'input[value=kill][type=button][class=int-btns] { display: none; }\'; var offlineKillStyleSheet = document.createElement('style'); offlineKillStyleSheet.innerText = offlineKillStyles; document.head.appendChild(offlineKillStyleSheet);");

//javascript uncondensed:

//  var offlineKillStyles = 'input[value=kill][type=button][class=int-btns] { display: none; }';
//  var offlineKillStyleSheet = document.createElement('style');
//  offlineKillStyleSheet.innerText = offlineKillStyles;
//  document.head.appendChild(offlineKillStyleSheet);