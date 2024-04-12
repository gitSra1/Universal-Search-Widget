const { ipcRenderer } = require('electron');
const searchWidget = document.getElementById('searchWidget'); 
const dragHandle = document.getElementById('dragHandle');

dragHandle.addEventListener('mousedown', (e) => {
    let offsetX = e.clientX - searchWidget.offsetLeft;
    let offsetY = e.clientY - searchWidget.offsetTop;

    function moveWidget(event) {
        win.webContents.send('moveWidget', {
            x: event.clientX - offsetX,
            y: event.clientY - offsetY
        });
    }

    document.addEventListener('mousemove', moveWidget);
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', moveWidget);
    });
});

ipcRenderer.on('moveWidget', (event, data) => {
    searchWidget.style.left = data.x + 'px';
    searchWidget.style.top = data.y + 'px';
});

ipcRenderer.on('moveWidget', (event, data) => {
    searchWidget.style.left = data.x + 'px';
    searchWidget.style.top = data.y + 'px';
});
