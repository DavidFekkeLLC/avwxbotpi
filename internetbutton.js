import Particle from 'particle-api-js';
//import dotenv from 'dotenv';

//dotenv.config();

const particle = new Particle();
const access_token = process.env.particle_access_token;
const device = process.env.button_device;
const vfrColor = [0,255,0];
const mvfrColor = [0,0,255];
const ifrColor = [255,0,0];
const lifrColor = [255,0,255];

const getWeatherColor = (wxFlyingRules) => {
    if (wxFlyingRules === 'VFR') {
        return vfrColor;
    } else if (wxFlyingRules === 'MVFR') {
        return mvfrColor;
    } else if (wxFlyingRules === 'LIFR') {
        return lifrColor;
    } else { // if IFR
        return ifrColor;
    }
}

const particleColorForWeather = async (wxFlyingRules) => {
    let weatherColor = getWeatherColor(wxFlyingRules);
    console.log('colorForWeather called');
    console.log(`Weather color is ${weatherColor}`);
    const publishEventPr = particle.publishEvent({ name: 'pushcolor', data: weatherColor.join(','), isPrivate: true, auth: access_token }); // isPrivate: true,
    try {
        const data = await publishEventPr;
        if (data.body.ok) { console.log("Event published succesfully") }
    } catch (err) {
        console.log(err);
    }
}

const particleButtonStream = await particle.getEventStream({ deviceId: device, auth: access_token});

export { particleButtonStream, particleColorForWeather };
