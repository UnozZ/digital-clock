// SEZIONE Data e tempo
function inizio() {
    const oggi = new Date();
    let ora = oggi.getHours();
    let minuti = oggi.getMinutes();
    let secondi = oggi.getSeconds();

    minuti = controllaTempo(minuti);
    secondi = controllaTempo(secondi);
    
    document.getElementById('clock').innerHTML = ora + ':' + minuti + ':' + secondi;
    setTimeout(inizio,1000);
}

function controllaTempo(x) {
    if(x<10){
        x = '0' + x;
    }
    return x;
}

function data() {
    const oggi = new Date();
    let date = ['', '', '']
    date = oggi.toDateString().split(' ');

    let giorno = date[0];
    let mese = date[1];
    let anno = date[3];

    giorno = controllaGiorno(giorno);
    mese = controllaMese(mese);
    date[2] = controllaTh(date[2]);

    document.getElementById('data').innerHTML = giorno + ' ' + mese + ' ' + date[2] + ' ' + anno;
}

function controllaGiorno(x) {
    switch(x){
        case 'Mon':
            x = 'Monday'
            break;
        case 'Tue':
            x = 'Tuesday'
            break;
        case 'Wed':
            x = 'Wednesday'
            break;
        case 'Thu':
            x = 'Thursday'
            break;
        case 'Fri':
            x = 'Friday'
            break;
        case 'Sat':
            x = 'Saturday'
            break;
        case 'Sun':
            x = 'Sunday'
            break;
    }
    
    return x;
}

function controllaMese(x) {
    switch(x){
        case 'Jan':
            x = 'January'
            break;
        case 'Feb':
            x = 'February'
            break;
        case 'Mar':
            x = 'March'
            break;
        case 'Apr':
            x = 'April'
            break;
        case 'May':
            x = 'May'
            break;
        case 'Jun':
            x = 'June'
            break;
        case 'Jul':
            x = 'July'
            break;
        case 'Aug':
            x = 'August'
            break;
        case 'Set':
            x = 'September'
            break;
        case 'Oct':
            x = 'October'
            break;
        case 'Nov':
            x = 'November'
            break;
        case 'Dec':
            x = 'December'
            break;
    }
    
    return x;
}

function controllaTh(x) {
    switch (x) {
        case 1:
            x = x + 'st';
            break;
        case 2:
            x = x + 'nd';
            break;
        case 3:
            x = x + 'rd';
            break;
        case 21:
            x = x + 'st';
            break;
        case 31:
            x = x + 'st';
            break;
        case 22:
            x = x + 'nd';
            break;
        case 23:
            x = x + 'rd';
            break;

        default:
            x = x + 'th';
            break;
    }

    return x;
}

// SEZIONE Switch mode

function switchMode() {    
    var element = document.body;
    element.classList.toggle("dark-mode");
}