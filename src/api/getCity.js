import cityId from './cityId.json'
function getCity(city) {
    return cityId.filter(item => item.countyname === city).areaid
}
export default getCity