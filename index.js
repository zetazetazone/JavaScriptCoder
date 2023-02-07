/*  
    Pre Entrega 3 Borzone
    Pre Entrega 3 Borzone
    Pre Entrega 3 Borzone
*/

// Algoritmo para visualizar si el usuario gano o perdio la ultima partida jugada de lol tras ingresar manualmente el display name, asumiendo que corresponde al servidor LA2, consumiendo la API de Riot.

let summonerName
let summonerData
let summonerInfo

document.getElementById('myButton').onclick = function(){

    summonerName = document.getElementById('myText').value;
    localStorage.setItem('username', summonerName)
    console.log(summonerName)

    getSummonerData().then(result => {
        summonerData = result
        console.log(summonerData);
    });
    getLeagueData().then(result => {
        summonerInfo = result
        console.log(summonerInfo);
        console.log(summonerInfo[0].tier)
    });
}

const API_KEY = 'RGAPI-f3f87a02-df2e-4936-973e-60cfc3fb1783';
const API_END_POINT = 'https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/';
const LEAGUE_END_POINT = 'https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/';

async function getSummonerData() {
    try {
    const response = await fetch(API_END_POINT + summonerName + '?api_key=' + API_KEY);
    const data = await response.json();
    return data;
    } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    }
}

async function getLeagueData() {
    try {
    const response = await fetch(LEAGUE_END_POINT + summonerData.id + '?api_key=' + API_KEY);
    const data = await response.json();
    return data;
    } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    }
}