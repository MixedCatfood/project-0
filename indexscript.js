
const player1Token = document.querySelector('.player1Token');
const playerCursor = document.querySelector('.playerCursor');

let hasPlayer1Token = true;

//this stays constant. hand follows hidden mouse cursor
document.addEventListener('mousemove', e => {
    playerCursor.setAttribute("style", "top: "+(e.pageY -10)+"px; left: "+(e.pageX -30)+"px;");
})
//proximity check. checks that cursor is close to token to return true(picks up cursor)
document.addEventListener('click', e => {
    if(hasPlayer1Token === true) {
        hasPlayer1Token = false;
    } else if(hasPlayer1Token === false && Math.abs(player1Token.offsetLeft - playerCursor.offsetLeft) <= 35 && Math.abs(player1Token.offsetTop - playerCursor.offsetTop) <= 35) {
        hasPlayer1Token = true;
    }
})

//checks for true and changes cursor
document.addEventListener('click', e => {
    if(hasPlayer1Token === true) {
    document.getElementById("changingCursor").src = "cursorhand.png";
    } else{
    document.getElementById("changingCursor").src = "cursorhandopen.png";
    }
})

document.addEventListener('mousemove', e => {
    if (hasPlayer1Token === true) {
    player1Token.setAttribute("style", "top: "+(e.pageY -25)+"px; left: "+(e.pageX -25)+"px;");
    }
})
