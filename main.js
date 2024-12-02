import { app, BrowserWindow } from 'electron';
import path from 'path';

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true, // Permet d'utiliser Node.js dans la fenêtre
            contextIsolation: false, // Nécessaire pour nodeIntegration
        },
    });

    // Charger Laravel
    mainWindow.loadURL('http://127.0.0.1:8000');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
