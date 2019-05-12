const {Menu} = require("electron")
const {SAVE_LIST, RELOAD_DB} = require('../actions/types')


module.exports = function(window){
    return Menu.buildFromTemplate([
        {
            label: "File",
            submenu: [
                {
                    label: "Save",
                    accelerator: "CommandOrControl+s",
                    click: () => {  
                        window.webContents.send(SAVE_LIST, "SAVE_LIST");
                    } 
                }
            ]
        },
        {
            label: "Data Base",
            submenu:[
                {
                    label: "Reload database",
                    accelerator: "F5",
                    click: () => {  
                        window.webContents.send(RELOAD_DB, "RELOAD_DB");
                    } 
                }
            ]
        }
    ])
}
