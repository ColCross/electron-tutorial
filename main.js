const { app, BrowserWindow } = require('electron');

// Must persist window as a global object or will be discarded by JS garbage collector
let mainWindow;

function createWindow() {
    // Generate new BrowserWindow and assign it to mainWindow
    mainWindow = new BrowserWindow({ width : 1500, height: 1000 });

    // Load our static html file into the window
    mainWindow.loadFile('app/index.html')
}

// Called once app finishes loading
app.on('ready', createWindow);

// Common for OSX applications to stay open after all windows are closed
app.on('window-all-closed', function () {

    // If current environment is not OSX
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

// Creates a new window if the app icon is clicked in OSX
app.on('activate', function () {

    if (mainWindow === null) {
        createWindow()
    }
});