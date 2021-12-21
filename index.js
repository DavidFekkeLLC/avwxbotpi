import changeState, { redState, blueState, greenState, pinkState, offState } from './changestate.js';
import currentMetar from './currentMetar.js';
import { particleButtonStream, particleColorForWeather } from './internetbutton.js';

const setCurrentWX = async () => {
    const metar = await currentMetar();
    particleColorForWeather(metar.flight_category);

    switch (metar.flight_category) {
        case 'VFR':
            changeState(greenState);
            break;
        case 'MVFR':
            changeState(blueState);
            break;
        case 'IFR':
            changeState(redState);
            break;
        case 'LIFR':
            changeState(pinkState);
            break;
        default:
            changeState(offState);
    }
}

//const stream = await particle.getEventStream({ deviceId: device, auth: access_token});
particleButtonStream.on('event', function(data) {
    if (data.name === 'readyforwx') {
        console.log("Watching for event: ", data);
        setCurrentWX();
    }
    if (data.name === 'pushcolor') {
        console.log("Color was pushed: ", data);
    }
});

const main = async () => {
    await setCurrentWX();
}

// Starting the light show
await main();

// Checking every 15 minutes for a change in weather
let task = setInterval(main, 1000 * 60 * 15);
