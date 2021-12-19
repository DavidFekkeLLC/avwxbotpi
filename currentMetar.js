import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const airport_code = process.env.AIRPORT;

const wxendpoint = `https://avwx.fekke.com/metar/${airport_code}`;

const currentMetar = async () => {
    const result = await axios.get(wxendpoint);
    if (result.data.count === 0) {
        return {
            metar: '',
            time: '',
            temp: '',
            dewpoint: '',
            wind: '',
            visibility: '',
            altimeter: '',
            clouds: '',
            sky: '',
            weather: '',
            remark: '',
            raw: '',
        };
    } 
    return result.data[0];
}

export default currentMetar;
