const {app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const menu = require("./components/Menu")

let win

function createWindow()
{
	win = new BrowserWindow({
		width: 1600,
		height: 1000, 
		webPreferences: {
			nodeIntegration: true
		}
	})
	
	Menu.setApplicationMenu(menu(win))
	
	win.loadURL(path.join(path.join('file://', __dirname, 'static/index.html')))
	
	
	devtools = new BrowserWindow()
    win.webContents.setDevToolsWebContents(devtools.webContents)
    win.webContents.openDevTools({mode: 'detach'})
    win.webContents.once('did-finish-load', function () {   
        let windowBounds = win.getBounds();  
        devtools.setPosition(500, 200);        
    });
    

}

app.on('ready', createWindow)
app.on('close', function() {
    win = null
})



