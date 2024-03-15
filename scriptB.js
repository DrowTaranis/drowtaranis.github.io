    
let picWinB = document.getElementById('picWindowB');

let gameButtA = document.getElementById('gameButt');

const gamePicArr = ['images/erun.jpg','images/frgrafterb.jpg','images/artif.jpg','images/arachnos.jpg'];

let picMk = 0;
gameButtA.onclick = function changeGamePic() {

    switch (picMk) {
        case 0: picWinB.src= gamePicArr[1];
            picWinB.alt = "Election Run";
        document.getElementById('gameTitle').innerHTML = "Election Run®";picMk++; break;
        case 1: picWinB.src= gamePicArr[2];
            picWinB.alt = "FameGrafter";
        document.getElementById('gameTitle').innerHTML = "FameGrafter®";picMk++; break;
        case 2: picWinB.src= gamePicArr[3];
            picWinB.alt = "Artificial Untelligence";
        document.getElementById('gameTitle').innerHTML = "Artificial Untelligence®";picMk++; break;
        case 3: picWinB.src= gamePicArr[0];
            picWinB.alt = "Arachnospiracy";
        document.getElementById('gameTitle').innerHTML = "Arachnospiracy: The Halton Fear™";
        picMk = 0; break;
    }
    };

