const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
    let win = new BrowserWindow({
        width: 300,
        height: 100,
        alwaysOnTop: true,
        transparent: true,
        frame: false, 
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false 
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);
