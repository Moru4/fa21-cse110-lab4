let nIntervId;
function printsOut() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
nIntervId = setInterval(printsOut, 1000);
