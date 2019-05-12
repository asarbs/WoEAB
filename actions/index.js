const { ipcRenderer } = require('electron'); 
path = require('path')
const fs = require('fs')

const { RELOAD_DB, SAVE_LIST } = require(path.resolve('actions/types'))

ipcRenderer.on(SAVE_LIST, (event) => {
    console.log("SAVE LIST")
});

ipcRenderer.on(RELOAD_DB, (event) => {
    console.log("RELOAD_DB")
});

