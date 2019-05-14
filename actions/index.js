const { ipcRenderer } = require('electron'); 
path = require('path')
const fs = require('fs')
const ui = require(path.resolve('actions/ui'))

const { RELOAD_DB, SAVE_LIST } = require(path.resolve('actions/types'))

var db = null
var selectedArmies = -1

ipcRenderer.on(SAVE_LIST, (event) => {
    console.log("SAVE LIST")
});

ipcRenderer.on(RELOAD_DB, (event) => {
    console.log("RELOAD_DB")
});

function loadDB()
{
    let rawData = fs.readFileSync('db.json');
    let db = JSON.parse(rawData);
    return db
}


function main()
{
    db = loadDB()
    ui.selectArmyWidget()
}

document.addEventListener('DOMContentLoaded', main);

