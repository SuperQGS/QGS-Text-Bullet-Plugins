const bullet = require('./bullet');
const plugin = bullet.makePlugin('adjust-intro-1.0.0');

//intro cutscene text
var intro = [
    "eyes wide open. heart beating furiously. mind filled with panic. an instant ago you were somewhere else. how did you get here?",
    "as you recall what you had just been doing, the memories begin to disappear. like a waking dream fading, you struggle to remember, but your previous life slips away in seconds.",
    "who are you? where were you before you appeared here? how long ago did your life start?",
    "memory is totally gone now. in shock, you stand up and look around, taking in your surroundings.",
    "the world is gray and dark, no sun or clouds visible. the sky is spotted with flowing specks of black; it is ash that cloaks the earth.",
    "the ground is hidden by a fine layer of soot as well. your body is smeared with black filth, what's left of your clothes now permanently stained.",
    "before confusion can set in, the force that pulled your memories away places something in your mind. a drive to go somewhere.",
    "there's a backpack on the ground next to you, and a beeping starts emitting from it. you ruffle through its compartments and find a small device with an antenna. a shattered screen displays your location: \"([[[COORDS]]])\".",
    "the center of the world. not far from here. go to (0, 0)."
];

//patch new intro array to SOCKET.beginArr in the client
bullet.patches.addJs('SOCKET.beginArr = ' + JSON.stringify(intro));