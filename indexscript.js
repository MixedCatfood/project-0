
const player1Token = $('.player1Token');
const playerCursor = $('.playerCursor');
const readyBanner = $('.readybanner');

const characterInfo = {
    drmario: {
        characterName: 'Dr. Mario',
        readyToFightText: 'DR. MARIO\'S FRAME DATA!',
        bannerLink: 'html/drMario.html',
        image: 'CharacterPortraits/drmarioportrait.png',
    },
    mario: {
        characterName: 'Mario',
        readyToFightText: 'MARIO\'S FRAME DATA!',
        bannerLink: 'html/Mario.html',
        image: 'CharacterPortraits/marioportrait.png',
    },
    luigi: {
        characterName: 'Luigi',
        readyToFightText: 'LUIGI\'S FRAME DATA!',
        bannerLink: 'html/Luigi.html',
        image: 'CharacterPortraits/luigiportrait.png',
    },
    bowser: {
        characterName: 'Bowser',
        readyToFightText: 'Bowser\'S FRAME DATA!',
        bannerLink: 'html/Bowser.html',
        image: 'CharacterPortraits/bowserportrait.png',
    },
    peach: {
        characterName: 'Peach',
        readyToFightText: 'PEACH\'S FRAME DATA!',
        bannerLink: 'html/Peach.html',
        image: 'CharacterPortraits/peachportrait.png',
    },
    yoshi: {
        characterName: 'Yoshi',
        readyToFightText: 'Yoshi\'S FRAME DATA!',
        bannerLink: 'html/Yoshi.html',
        image: 'CharacterPortraits/yoshiportrait.png',
    },
    dk: {
        characterName: 'D K',
        readyToFightText: 'DK\'S FRAME DATA!',
        bannerLink: 'html/DK.html',
        image: 'CharacterPortraits/dkportrait.png',
    },
    falcon: {
        characterName: 'C. Falcon',
        readyToFightText: 'CAPTAIN FALCON\'S FRAME DATA!',
        bannerLink: 'html/Falcon.html',
        image: 'CharacterPortraits/falconportrait.png',
    },
    ganon: {
        characterName: 'Ganondorf',
        readyToFightText: 'GANONDORF\'S FRAME DATA!',
        bannerLink: 'html/Ganon.html',
        image: 'CharacterPortraits/ganonportrait.png',
    },
    falco: {
        characterName: 'Falco',
        readyToFightText: 'FALCO\'S FRAME DATA!',
        bannerLink: 'html/Falco.html',
        image: 'CharacterPortraits/falcoportrait.png',
    },
    fox: {
        characterName: 'Fox',
        readyToFightText: 'FOX\'S FRAME DATA!',
        bannerLink: 'html/Fox.html',
        image: 'CharacterPortraits/foxportrait.png',
    },
    ness: {
        characterName: 'Ness',
        readyToFightText: 'NESS\' FRAME DATA!',
        bannerLink: 'html/Ness.html',
        image: 'CharacterPortraits/nessportrait.png',
    },
    climbers: {
        characterName: 'Ice Climbers',
        readyToFightText: 'ICE CLIMBERS\' FRAME DATA!',
        bannerLink: 'html/IceClimbers.html',
        image: 'CharacterPortraits/climbersportrait.png',
    },
    kirby: {
        characterName: 'Kirby',
        readyToFightText: 'KIRBY\'S FRAME DATA!',
        bannerLink: 'html/Kirby.html',
        image: 'CharacterPortraits/kirbyportrait.png',
    },
    samus: {
        characterName: 'Samus',
        readyToFightText: 'SAMUS\'S FRAME DATA!',
        bannerLink: 'html/Samus.html',
        image: 'CharacterPortraits/samusportrait.png',
    },
    zelda: {
        characterName: 'Zelda',
        readyToFightText: 'ZELDA\'S FRAME DATA!',
        bannerLink: 'html/Zelda.html',
        image: 'CharacterPortraits/zeldaportrait.png',
    },
    link: {
        characterName: 'Link',
        readyToFightText: 'LINK\'S FRAME DATA!',
        bannerLink: 'html/Link.html',
        image: 'CharacterPortraits/linkportrait.png',
    },
    younglink: {
        characterName: 'Young Link',
        readyToFightText: 'YOUNG LINK\'S FRAME DATA!',
        bannerLink: 'html/YoungLink.html',
        image: 'CharacterPortraits/younglinkportrait.png',
    },
    pichu: {
        characterName: 'Pichu',
        readyToFightText: 'PICHU\'S FRAME DATA!',
        bannerLink: 'html/Pichu.html',
        image: 'CharacterPortraits/pichuportrait.png',
    },
    pikachu: {
        characterName: 'Pikachu',
        readyToFightText: 'PIKACHU\'S FRAME DATA!',
        bannerLink: 'html/Pikachu.html',
        image: 'CharacterPortraits/pikachuportrait.png',
    },
    puff: {
        characterName: 'Jigglypuff',
        readyToFightText: 'JIGGLYPUFF\'S FRAME DATA!',
        bannerLink: 'html/Jigglypuff.html',
        image: 'CharacterPortraits/puffportrait.png',
    },
    mewtwo: {
        characterName: 'Mewtwo',
        readyToFightText: 'MEWTWO\'S FRAME DATA!',
        bannerLink: 'html/Mewtwo.html',
        image: 'CharacterPortraits/mewtwoportrait.png',
    },
    gamewatch: {
        characterName: 'Mr. Game & Watch',
        readyToFightText: 'MR. GAME & WATCH\'S FRAME DATA!',
        bannerLink: 'html/Game&Watch.html',
        image: 'CharacterPortraits/gameandwatchportrait.png',
    },
    marth: {
        characterName: 'Marth',
        readyToFightText: 'MARTH\'S FRAME DATA!',
        bannerLink: 'html/Marth.html',
        image: 'CharacterPortraits/marthportrait.png',
    },
    roy: {
        characterName: 'Roy',
        readyToFightText: 'ROY\'S FRAME DATA!',
        bannerLink: 'html/Roy.html',
        image: 'CharacterPortraits/royportrait.png',
    },
}

const characters = Object.keys(characterInfo);

let selectedCharacter = null;
let hasPlayer1Token = true;

function elementsOverlap(el1, el2) {
  const domRect1 = el1.getBoundingClientRect();
  const domRect2 = el2.getBoundingClientRect();

  return !(
    domRect1.top > domRect2.bottom ||
    domRect1.right < domRect2.left ||
    domRect1.bottom < domRect2.top ||
    domRect1.left > domRect2.right
  );
}

//makes hand follow hidden mouse cursor
//checks for player1token if true token follows hand
//checks if token is hovering each character
//if character is 'selected' readybanner appears
document.addEventListener('mousemove', e => {
    playerCursor.attr("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 30) + "px;");
    if (hasPlayer1Token) {
        player1Token.attr("style", "top: " + (e.pageY - 25) + "px; left: " + (e.pageX - 25) + "px;");
    }
    else {
        return;
    }

    selectedCharacter = null;
    
    characters.some((character) => {
        const overlap = elementsOverlap(player1Token[0], $(`.${character}`)[0]);
        if (overlap) {
            $('#characterpicture').attr('src', characterInfo[character].image);
            $('#charactername').html(characterInfo[character].characterName);
            $('#readytoFightText').html(characterInfo[character].readyToFightText);
            $('#bannerlink').attr("href", characterInfo[character].bannerLink);
            selectedCharacter = character;
        }

        return overlap;
    });

})

//proximity check. checks that cursor is close to token to return true(picks up cursor)
document.addEventListener('click', e => {
    if (hasPlayer1Token) {
        hasPlayer1Token = false;
        $("#changingCursor").attr('src', 'cursorhandopen.png');
        if (selectedCharacter !== null) {
            $('#readybanner').css("display", "block");
        }
    } else if (!hasPlayer1Token) {
        console.log();
        const p1Offset = player1Token.offset();
        const cursorOffset = playerCursor.offset();
        if (Math.abs(p1Offset.left - cursorOffset.left) <= 35 &&
            Math.abs(p1Offset.top - cursorOffset.top) <= 35) {
            hasPlayer1Token = true;
            $("#changingCursor").attr('src', 'cursorhand.png');
            $('#readybanner').css("display", "none");
        }
        else {
            $("#changingCursor").attr('src', 'cursorhandopen.png');
        }
    }
})
