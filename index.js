/*  
    Pre Entrega 3 Borzone
    Pre Entrega 3 Borzone
    Pre Entrega 3 Borzone
*/

// Algoritmo para visualizar el rango alcanzado por el usuario en Clasificatorio Solo/Duo de League Of Legends, tras ingresar manualmente el display name, asumiendo que corresponde al servidor LA2, consumiendo la API de Riot.

let summonerName

let search = document.getElementById('busqueda')
let lastUsername = localStorage.getItem('username')
if(lastUsername){
    search.innerHTML = `Ultima busqueda: ${lastUsername}`
}

document.getElementById('myButton').onclick = async function (){

    summonerName = document.getElementById('myText').value;
    localStorage.setItem('username', summonerName)
    console.log(summonerName)
    const summonerData = await getSummonerData()
        console.log(summonerData)
    const leagueData = await getLeagueData(summonerData)
        console.log(leagueData);
    const yourTier = leagueData.find(data => data.queueType === 'RANKED_SOLO_5x5')
        console.log(yourTier.tier)
    const myModalAlternative = new bootstrap.Modal('#myModal', {})
    const image = document.querySelector('#tierImage')
    image.src = `./Assets/ranked-emblem/emblem-${yourTier.tier.toLowerCase()}.png`
    const tittle = document.querySelector('#exampleModalLabel')
    tittle.innerHTML = `Rango: ${yourTier.tier} ${yourTier.rank}`
    myModalAlternative.show()
    search.innerHTML = `Ultima busqueda: ${summonerName}`
}

document.getElementById('myText').addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
        document.getElementById("myButton").click();
    }
});

// La API KEY expira cada 24 horas!
const API_KEY = 'RGAPI-24048437-dafc-4d89-ba51-6a8dba0aa9c3';
const API_END_POINT = 'https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/';
const LEAGUE_END_POINT = 'https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/';
const RANDOM_END_POINT = 'https://la2.api.riotgames.com/lol/league/v4/entries/RANKED_SOLO_5x5/'

async function getSummonerData() {
    try {
    const response = await fetch(API_END_POINT + summonerName + '?api_key=' + API_KEY);
    const data = await response.json();
    return data;
    } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    }
}

async function getLeagueData(summonerData) {
    try {
    const response = await fetch(LEAGUE_END_POINT + summonerData.id + '?api_key=' + API_KEY);
    const data = await response.json();
    return data;
    } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    }
}



let tiers = ['IRON','BRONZE','SILVER','GOLD','PLATINUM','DIAMOND']
let division = ['I','II','III','IV']
let randUser = []




document.getElementById('randBtn').onclick = async function getRandomUser() {
    function getRandomElements(tiers, division) {
        let randomIndex1 = Math.floor(Math.random() * tiers.length);
        let randomIndex2 = Math.floor(Math.random() * division.length);
        return [tiers[randomIndex1], division[randomIndex2]];
    }
    // destructuring del elemento tier y elemento division en un array
    let [randomTier, randomDivision] = getRandomElements(tiers, division);
    try {
    const response = await fetch(RANDOM_END_POINT + randomTier + '/' + randomDivision + '?page=1&api_key=' + API_KEY);
    let data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    randUser = data[randomIndex].summonerName
    document.getElementById('myText').value = randUser
    console.log(randUser)
    return data;
    } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    }
}
