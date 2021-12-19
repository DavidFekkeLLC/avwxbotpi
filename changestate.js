
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const ip_address = process.env.IP_ADDRESS;
const user = process.env.USERTOKEN;

// make axios request to change state of bulb to blue
const changeState = async (state) => { 
    console.log(state);
    const result = await axios.put(`http://${ip_address}/api/${user}/lights/1/state`, state);
    console.log(result.data);
}

// set state for blue hue bulb
const blueState = {
    on: true,
    bri: 254,
    hue: 44484,
    sat: 254,
};

// set state for blue hue bulb
const redState = {
    on: true,
    bri: 254,
    hue: 0,
    sat: 254,
};

// set state for blue hue bulb
const greenState = {
    on: true,
    bri: 254,
    hue: 25600,
    sat: 254,
};

// set state for pink hue bulb
const pinkState = {
    on: true,
    bri: 254,
    hue: 56100,
    sat: 254,
};

// set state for blue hue bulb
const offState = {
    on: false
};

export default changeState;

export { blueState, redState, greenState, pinkState, offState };
