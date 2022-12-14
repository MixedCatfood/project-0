
const player1Token = document.querySelector('.player1Token');

const playerCursor = document.querySelector('.playerCursor');

const readyBanner = document.querySelector('.readybanner');

const drMario = document.querySelector('.drmario');
const drMarioPosition = drMario.getBoundingClientRect();

const mario = document.querySelector('.mario');
const marioPosition = mario.getBoundingClientRect();

const luigi = document.querySelector('.luigi');
const luigiPosition = luigi.getBoundingClientRect();

const bowser = document.querySelector('.bowser');
const bowserPosition = bowser.getBoundingClientRect();

const peach = document.querySelector('.peach');
const peachPosition = peach.getBoundingClientRect();

const yoshi = document.querySelector('.yoshi');
const yoshiPosition = yoshi.getBoundingClientRect();

const dk = document.querySelector('.dk');
const dkPosition = dk.getBoundingClientRect();

const falcon = document.querySelector('.falcon');
const falconPosition = falcon.getBoundingClientRect();

const ganon = document.querySelector('.ganon');
const ganonPosition = ganon.getBoundingClientRect();

const falco = document.querySelector('.falco');
const falcoPosition = falco.getBoundingClientRect();

const fox = document.querySelector('.fox');
const foxPosition = fox.getBoundingClientRect();

const ness = document.querySelector('.ness');
const nessPosition = ness.getBoundingClientRect();

const climbers = document.querySelector('.climbers');
const climbersPosition = climbers.getBoundingClientRect();

const kirby = document.querySelector('.kirby');
const kirbyPosition = kirby.getBoundingClientRect();

const samus = document.querySelector('.samus');
const samusPosition = samus.getBoundingClientRect();

const zelda = document.querySelector('.zelda');
const zeldaPosition = zelda.getBoundingClientRect();

const link = document.querySelector('.link');
const linkPosition = link.getBoundingClientRect();

const younglink = document.querySelector('.younglink');
const younglinkPosition = younglink.getBoundingClientRect();

const pichu = document.querySelector('.pichu');
const pichuPosition = pichu.getBoundingClientRect();

const pikachu = document.querySelector('.pikachu');
const pikachuPosition = pikachu.getBoundingClientRect();

const puff = document.querySelector('.puff');
const puffPosition = puff.getBoundingClientRect();

const mewtwo = document.querySelector('.mewtwo');
const mewtwoPosition = mewtwo.getBoundingClientRect();

const gamewatch = document.querySelector('.gamewatch');
const gamewatchPosition = gamewatch.getBoundingClientRect();

const marth = document.querySelector('.marth');
const marthPosition = marth.getBoundingClientRect();

const roy = document.querySelector('.roy');
const royPosition = roy.getBoundingClientRect();

let hasPlayer1Token = true;

//makes hand follow hidden mouse cursor
//checks for player1token if true token follows hand
//checks if token is hovering each character
//if character is 'selected' readybanner appears
document.addEventListener('mousemove', e => {
    playerCursor.setAttribute("style", "top: "+(e.pageY -10)+"px; left: "+(e.pageX -30)+"px;");
    if (hasPlayer1Token === true) {
        player1Token.setAttribute("style", "top: "+(e.pageY -25)+"px; left: "+(e.pageX -25)+"px;");
        };
    if(drMarioPosition.top <=  player1Token.offsetTop &&
        drMarioPosition.left <= player1Token.offsetLeft &&
        drMarioPosition.bottom >= player1Token.offsetTop &&
        drMarioPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/drmarioportrait.png";
        document.getElementById('charactername').innerHTML = 'Dr. Mario';
    };
    if(drMarioPosition.top <=  player1Token.offsetTop &&
        drMarioPosition.left <= player1Token.offsetLeft &&
        drMarioPosition.bottom >= player1Token.offsetTop &&
        drMarioPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/drmarioportrait.png";
        document.getElementById('charactername').innerHTML = 'Dr. Mario';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "DR. MARIO'S FRAME DATA!";
        document.getElementById('bannerlink').href="html/drMario.html"
    };
    if(marioPosition.top <=  player1Token.offsetTop &&
        marioPosition.left <= player1Token.offsetLeft &&
        marioPosition.bottom >= player1Token.offsetTop &&
        marioPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/marioportrait.png";
        document.getElementById('charactername').innerHTML = 'Mario';
    };
    if(marioPosition.top <=  player1Token.offsetTop &&
        marioPosition.left <= player1Token.offsetLeft &&
        marioPosition.bottom >= player1Token.offsetTop &&
        marioPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/marioportrait.png";
        document.getElementById('charactername').innerHTML = 'Mario';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "MARIO'S FRAME DATA!";
        document.getElementById('bannerlink').href="html/Mario.html"
    };
    if(luigiPosition.top <=  player1Token.offsetTop &&
        luigiPosition.left <= player1Token.offsetLeft &&
        luigiPosition.bottom >= player1Token.offsetTop &&
        luigiPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/luigiportrait.png";
        document.getElementById('charactername').innerHTML = 'Luigi';
    };
    if(luigiPosition.top <=  player1Token.offsetTop &&
        luigiPosition.left <= player1Token.offsetLeft &&
        luigiPosition.bottom >= player1Token.offsetTop &&
        luigiPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/luigiportrait.png";
        document.getElementById('charactername').innerHTML = 'Luigi';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "LUIGI'S FRAME DATA!";
        document.getElementById('bannerlink').href="html/Luigi.html"
    };
    if(bowserPosition.top <=  player1Token.offsetTop &&
        bowserPosition.left <= player1Token.offsetLeft &&
        bowserPosition.bottom >= player1Token.offsetTop &&
        bowserPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/bowserportrait.png";
        document.getElementById('charactername').innerHTML = 'Bowser';
    };
    if(bowserPosition.top <=  player1Token.offsetTop &&
        bowserPosition.left <= player1Token.offsetLeft &&
        bowserPosition.bottom >= player1Token.offsetTop &&
        bowserPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/bowserportrait.png";
        document.getElementById('charactername').innerHTML = 'Bowser';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "BOWSER'S FRAME DATA!";
        document.getElementById('bannerlink').href="html/Bowser.html"
    };
    if(peachPosition.top <=  player1Token.offsetTop &&
        peachPosition.left <= player1Token.offsetLeft &&
        peachPosition.bottom >= player1Token.offsetTop &&
        peachPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/peachportrait.png";
        document.getElementById('charactername').innerHTML = 'Peach';
    };
    if(peachPosition.top <=  player1Token.offsetTop &&
        peachPosition.left <= player1Token.offsetLeft &&
        peachPosition.bottom >= player1Token.offsetTop &&
        peachPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/peachportrait.png";
        document.getElementById('charactername').innerHTML = 'Peach';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "PEACH'S FRAME DATA!";
        document.getElementById('bannerlink').href="html/Peach.html"
    };
    if(yoshiPosition.top <=  player1Token.offsetTop &&
        yoshiPosition.left <= player1Token.offsetLeft &&
        yoshiPosition.bottom >= player1Token.offsetTop &&
        yoshiPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/yoshiportrait.png";
        document.getElementById('charactername').innerHTML = 'Yoshi'
    };
    if(yoshiPosition.top <=  player1Token.offsetTop &&
        yoshiPosition.left <= player1Token.offsetLeft &&
        yoshiPosition.bottom >= player1Token.offsetTop &&
        yoshiPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/yoshiportrait.png";
        document.getElementById('charactername').innerHTML = 'Yoshi';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "YOSHI'S FRAME DATA!";
        document.getElementById('bannerlink').href="html/Yoshi.html"
    };
    if(dkPosition.top <=  player1Token.offsetTop &&
        dkPosition.left <= player1Token.offsetLeft &&
        dkPosition.bottom >= player1Token.offsetTop &&
        dkPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/dkportrait.png";
        document.getElementById('charactername').innerHTML = 'D K';
    };
    if(dkPosition.top <=  player1Token.offsetTop &&
        dkPosition.left <= player1Token.offsetLeft &&
        dkPosition.bottom >= player1Token.offsetTop &&
        dkPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/dkportrait.png";
        document.getElementById('charactername').innerHTML = 'D K';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "DK'S FRAME DATA!";
        document.getElementById('bannerlink').href="html/DK.html"
    };
    if(falconPosition.top <=  player1Token.offsetTop &&
        falconPosition.left <= player1Token.offsetLeft &&
        falconPosition.bottom >= player1Token.offsetTop &&
        falconPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/falconportrait.png";
        document.getElementById('charactername').innerHTML = 'C. Falcon';
    };
    if(falconPosition.top <=  player1Token.offsetTop &&
        falconPosition.left <= player1Token.offsetLeft &&
        falconPosition.bottom >= player1Token.offsetTop &&
        falconPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/falconportrait.png";
        document.getElementById('charactername').innerHTML = 'C. Falcon';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "CAPTAIN FALCON'S FRAME DATA!";
        document.getElementById('bannerlink').href="html/Falcon.html"
    };
    if(ganonPosition.top <=  player1Token.offsetTop &&
        ganonPosition.left <= player1Token.offsetLeft &&
        ganonPosition.bottom >= player1Token.offsetTop &&
        ganonPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/ganonportrait.png";
        document.getElementById('charactername').innerHTML = 'Ganondorf'
    };
    if(ganonPosition.top <=  player1Token.offsetTop &&
        ganonPosition.left <= player1Token.offsetLeft &&
        ganonPosition.bottom >= player1Token.offsetTop &&
        ganonPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/ganonportrait.png";
        document.getElementById('charactername').innerHTML = 'Ganondorf';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "GANONDORF'S FRAME DATA!";
        document.getElementById('bannerlink').href="html/Ganon.html"
    };
    if(falcoPosition.top <=  player1Token.offsetTop &&
        falcoPosition.left <= player1Token.offsetLeft &&
        falcoPosition.bottom >= player1Token.offsetTop &&
        falcoPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/falcoportrait.png";
        document.getElementById('charactername').innerHTML = 'Falco';
    };
    if(falcoPosition.top <=  player1Token.offsetTop &&
        falcoPosition.left <= player1Token.offsetLeft &&
        falcoPosition.bottom >= player1Token.offsetTop &&
        falcoPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/falcoportrait.png";
        document.getElementById('charactername').innerHTML = 'Falco';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "FALCO'S FRAME DATA!";
        document.getElementById('bannerlink').href="html/Falco.html"
    };
    if(foxPosition.top <=  player1Token.offsetTop &&
        foxPosition.left <= player1Token.offsetLeft &&
        foxPosition.bottom >= player1Token.offsetTop &&
        foxPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/foxportrait.png";
        document.getElementById('charactername').innerHTML = 'Fox';
    };
    if(foxPosition.top <=  player1Token.offsetTop &&
        foxPosition.left <= player1Token.offsetLeft &&
        foxPosition.bottom >= player1Token.offsetTop &&
        foxPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/foxportrait.png";
        document.getElementById('charactername').innerHTML = 'Fox';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "FOX'S FRAME DATA!";
        document.getElementById('bannerlink').href="html/Fox.html"
    };
    if(nessPosition.top <=  player1Token.offsetTop &&
        nessPosition.left <= player1Token.offsetLeft &&
        nessPosition.bottom >= player1Token.offsetTop &&
        nessPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/nessportrait.png";
        document.getElementById('charactername').innerHTML = 'Ness';
    };
    if(nessPosition.top <=  player1Token.offsetTop &&
        nessPosition.left <= player1Token.offsetLeft &&
        nessPosition.bottom >= player1Token.offsetTop &&
        nessPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/nessportrait.png";
        document.getElementById('charactername').innerHTML = 'Ness';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "NESS' FRAME DATA!";
        document.getElementById('bannerlink').href="html/Ness.html"
    };
    if(climbersPosition.top <=  player1Token.offsetTop &&
        climbersPosition.left <= player1Token.offsetLeft &&
        climbersPosition.bottom >= player1Token.offsetTop &&
        climbersPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/climbersportrait.png";
        document.getElementById('charactername').innerHTML = 'Ice Climbers';
    };
    if(climbersPosition.top <=  player1Token.offsetTop &&
        climbersPosition.left <= player1Token.offsetLeft &&
        climbersPosition.bottom >= player1Token.offsetTop &&
        climbersPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/climbersportrait.png";
        document.getElementById('charactername').innerHTML = 'Ice Climbers';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "ICE CLIMBERS' FRAME DATA!";
        document.getElementById('bannerlink').href="html/IceClimbers.html"
    };
    if(kirbyPosition.top <=  player1Token.offsetTop &&
        kirbyPosition.left <= player1Token.offsetLeft &&
        kirbyPosition.bottom >= player1Token.offsetTop &&
        kirbyPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/kirbyportrait.png";
        document.getElementById('charactername').innerHTML = 'Kirby';
    };
    if(kirbyPosition.top <=  player1Token.offsetTop &&
        kirbyPosition.left <= player1Token.offsetLeft &&
        kirbyPosition.bottom >= player1Token.offsetTop &&
        kirbyPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/kirbyportrait.png";
        document.getElementById('charactername').innerHTML = 'Kirby';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "KIRBY'S FRAME DATA!";
        document.getElementById('bannerlink').href="html/Kirby.html"
    };
    if(samusPosition.top <=  player1Token.offsetTop &&
        samusPosition.left <= player1Token.offsetLeft &&
        samusPosition.bottom >= player1Token.offsetTop &&
        samusPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/samusportrait.png";
        document.getElementById('charactername').innerHTML = 'Samus';
    };
    if(samusPosition.top <=  player1Token.offsetTop &&
        samusPosition.left <= player1Token.offsetLeft &&
        samusPosition.bottom >= player1Token.offsetTop &&
        samusPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/samusportrait.png";
        document.getElementById('charactername').innerHTML = 'Samus';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "SAMUS' FRAME DATA!";
        document.getElementById('bannerlink').href="html/Samus.html"
    };
    if(zeldaPosition.top <=  player1Token.offsetTop &&
        zeldaPosition.left <= player1Token.offsetLeft &&
        zeldaPosition.bottom >= player1Token.offsetTop &&
        zeldaPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/zeldaportrait.png";
        document.getElementById('charactername').innerHTML = 'Zelda';
    };
    if(zeldaPosition.top <=  player1Token.offsetTop &&
        zeldaPosition.left <= player1Token.offsetLeft &&
        zeldaPosition.bottom >= player1Token.offsetTop &&
        zeldaPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/zeldaportrait.png";
        document.getElementById('charactername').innerHTML = 'Zelda';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "ZELDA'S FRAME DATA!";
        document.getElementById('bannerlink').href="html/Zelda.html"
    };
    if(linkPosition.top <=  player1Token.offsetTop &&
        linkPosition.left <= player1Token.offsetLeft &&
        linkPosition.bottom >= player1Token.offsetTop &&
        linkPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/linkportrait.png";
        document.getElementById('charactername').innerHTML = 'Link'
    };
    if(linkPosition.top <=  player1Token.offsetTop &&
        linkPosition.left <= player1Token.offsetLeft &&
        linkPosition.bottom >= player1Token.offsetTop &&
        linkPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/linkportrait.png";
        document.getElementById('charactername').innerHTML = 'Link';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "LINK'S FRAME DATA!";
        document.getElementById('bannerlink').href="html/Link.html"
    };
    if(younglinkPosition.top <=  player1Token.offsetTop &&
        younglinkPosition.left <= player1Token.offsetLeft &&
        younglinkPosition.bottom >= player1Token.offsetTop &&
        younglinkPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/younglinkportrait.png";
        document.getElementById('charactername').innerHTML = 'Young Link';
    };
    if(younglinkPosition.top <=  player1Token.offsetTop &&
        younglinkPosition.left <= player1Token.offsetLeft &&
        younglinkPosition.bottom >= player1Token.offsetTop &&
        younglinkPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/younglinkportrait.png";
        document.getElementById('charactername').innerHTML = 'Young Link';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "YOUNG LINK'S FRAME DATA!";
        document.getElementById('bannerlink').href="html/YoungLink.html"
    };
    if(pichuPosition.top <=  player1Token.offsetTop &&
        pichuPosition.left <= player1Token.offsetLeft &&
        pichuPosition.bottom >= player1Token.offsetTop &&
        pichuPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/pichuportrait.png";
        document.getElementById('charactername').innerHTML = 'Pichu';
    };
    if(pichuPosition.top <=  player1Token.offsetTop &&
        pichuPosition.left <= player1Token.offsetLeft &&
        pichuPosition.bottom >= player1Token.offsetTop &&
        pichuPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/pichuportrait.png";
        document.getElementById('charactername').innerHTML = 'Pichu';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "PICHU'S FRAME DATA!";
        document.getElementById('bannerlink').href="html/Pichu.html"
    };
    if(pikachuPosition.top <=  player1Token.offsetTop &&
        pikachuPosition.left <= player1Token.offsetLeft &&
        pikachuPosition.bottom >= player1Token.offsetTop &&
        pikachuPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/pikachuportrait.png";
        document.getElementById('charactername').innerHTML = 'Pikachu';
    };
    if(pikachuPosition.top <=  player1Token.offsetTop &&
        pikachuPosition.left <= player1Token.offsetLeft &&
        pikachuPosition.bottom >= player1Token.offsetTop &&
        pikachuPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/pikachuportrait.png";
        document.getElementById('charactername').innerHTML = 'Pikachu';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "PIKACHU'S FRAME DATA!";
        document.getElementById('bannerlink').href="html/Pikachu.html"
    };
    if(puffPosition.top <=  player1Token.offsetTop &&
        puffPosition.left <= player1Token.offsetLeft &&
        puffPosition.bottom >= player1Token.offsetTop &&
        puffPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/puffportrait.png";
        document.getElementById('charactername').innerHTML = 'Jigglypuff';
    };
    if(puffPosition.top <=  player1Token.offsetTop &&
        puffPosition.left <= player1Token.offsetLeft &&
        puffPosition.bottom >= player1Token.offsetTop &&
        puffPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/puffportrait.png";
        document.getElementById('charactername').innerHTML = 'Jigglypuff';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "JIGGLYPUFF'S FRAME DATA!";
        document.getElementById('bannerlink').href="html/Jigglypuff.html"
    };
    if(mewtwoPosition.top <=  player1Token.offsetTop &&
        mewtwoPosition.left <= player1Token.offsetLeft &&
        mewtwoPosition.bottom >= player1Token.offsetTop &&
        mewtwoPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/mewtwoportrait.png";
        document.getElementById('charactername').innerHTML = 'Mewtwo'
    };
    if(mewtwoPosition.top <=  player1Token.offsetTop &&
        mewtwoPosition.left <= player1Token.offsetLeft &&
        mewtwoPosition.bottom >= player1Token.offsetTop &&
        mewtwoPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/mewtwoportrait.png";
        document.getElementById('charactername').innerHTML = 'Mewtwo';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "MEWTWO'S FRAME DATA!";
        document.getElementById('bannerlink').href="html/Mewtwo.html"
    };
    if(gamewatchPosition.top <=  player1Token.offsetTop &&
        gamewatchPosition.left <= player1Token.offsetLeft &&
        gamewatchPosition.bottom >= player1Token.offsetTop &&
        gamewatchPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/gameandwatchportrait.png";
        document.getElementById('charactername').innerHTML = 'Mr. Game & Watch';
    };
    if(gamewatchPosition.top <=  player1Token.offsetTop &&
        gamewatchPosition.left <= player1Token.offsetLeft &&
        gamewatchPosition.bottom >= player1Token.offsetTop &&
        gamewatchPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/gameandwatchportrait.png";
        document.getElementById('charactername').innerHTML = 'Mr. Game & Watch';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "MR. GAME & WATCH'S FRAME DATA!";
        document.getElementById('bannerlink').href="html/Game&Watch.html"
    };
    if(marthPosition.top <=  player1Token.offsetTop &&
        marthPosition.left <= player1Token.offsetLeft &&
        marthPosition.bottom >= player1Token.offsetTop &&
        marthPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/marthportrait.png";
        document.getElementById('charactername').innerHTML = 'Marth';
    };
    if(marthPosition.top <=  player1Token.offsetTop &&
        marthPosition.left <= player1Token.offsetLeft &&
        marthPosition.bottom >= player1Token.offsetTop &&
        marthPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/marthportrait.png";
        document.getElementById('charactername').innerHTML = 'Marth';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "MARTH'S FRAME DATA!";
        document.getElementById('bannerlink').href="html/Marth.html"
    };
    if(royPosition.top <=  player1Token.offsetTop &&
        royPosition.left <= player1Token.offsetLeft &&
        royPosition.bottom >= player1Token.offsetTop &&
        royPosition.right >= player1Token.offsetLeft
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/royportrait.png";
        document.getElementById('charactername').innerHTML = 'Roy';
    };
    if(royPosition.top <=  player1Token.offsetTop &&
        royPosition.left <= player1Token.offsetLeft &&
        royPosition.bottom >= player1Token.offsetTop &&
        royPosition.right >= player1Token.offsetLeft &&
        hasPlayer1Token === false
        ) {
        document.getElementById('characterpicture').src = "CharacterPortraits/royportrait.png";
        document.getElementById('charactername').innerHTML = 'Roy';
        document.getElementById('readybanner').style.display = "block";
        document.getElementById('readytoFightText').innerHTML = "ROY'S FRAME DATA!";
        document.getElementById('bannerlink').href="html/Roy.html"
    };
    if (hasPlayer1Token) {
        document.getElementById('readybanner').style.display = "none";
    }
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
