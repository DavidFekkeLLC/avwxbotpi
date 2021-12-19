import changeState, { redState, blueState, greenState, offState } from './changestate.js';
import currentMetar from './currentMetar.js';

const main = async () => {
    const metar = await currentMetar();

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

// Starting the light show
await main();

// Checking every 15 minutes for a change in weather
let task = setInterval(main, 1000 * 60 * 15);
