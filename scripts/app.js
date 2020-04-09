


document.onkeydown = detectKey;
// function soundB () {
//    let backgroundSound = new Audio('sounds/zapsplat_horror.mp3');
//    backgroundSound.play(); 
// }
// soundB();

//code snippet: Consistently Move an Element with Arrow Keys in JavaScript
function detectKey(e) {

    let startButton = document.querySelector(".startButton");
    startButton.classList.add("startButtonHidden");

    let posLeft = document.querySelector('.playerIcon').offsetLeft;
    let posTop = document.querySelector('.playerIcon').offsetTop;
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
        document.querySelector('.playerIcon').style.marginTop = (posTop - 58) + "px";
    }
    else if (e.keyCode == '40') {
        // down arrow
        document.querySelector('.playerIcon').style.marginTop = (posTop + 58) + "px";
    }
    else if (e.keyCode == '37') {
        // left arrow
        document.querySelector('.playerIcon').style.marginLeft = (posLeft - 58) + "px";
    }
    else if (e.keyCode == '39') {
        // right arrow
        document.querySelector('.playerIcon').style.marginLeft = (posLeft + 58) + "px";
    }


    let player = document.querySelector('.playerIcon');
    let positionPlayer = player.getBoundingClientRect();
    console.log("player is at " + positionPlayer.x, positionPlayer.y)

    //collision detection
    //From MDN
    function collision() {
        let rect1 = { x: positionPlayer.x, y: positionPlayer.y, width: 20, height: 20 };
        let rect2 = { x: 348, y: 334, width: 100, height: 100 };
        let rect3 = { x: 648, y: 524, width: 50, height: 50 };
        let rect4 = { x: 870, y: 218, width: 50, height: 50 };


        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y) {
            // collision detected!
            console.log("collision is here")
            let obstacleWhenHit = document.querySelector(".obstacle");
            obstacleWhenHit.classList.add("obstacleHit");

            let gameoverScreen = document.querySelector(".gameoverHidden");
            gameoverScreen.classList.add("gameover");

            let gameoverSound = new Audio('sounds/zapsplat_gameover.mp3');
            gameoverSound.play();

            document.onkeydown = null;
            return;
        }

        if (rect1.x < rect4.x + rect4.width &&
            rect1.x + rect1.width > rect4.x &&
            rect1.y < rect4.y + rect4.height &&
            rect1.y + rect1.height > rect4.y) {
            // collision detected!
            console.log("collision is here")
            let obstacleWhenHit = document.querySelector(".obstacle2");
            obstacleWhenHit.classList.add("obstacleHit2");

            let gameoverScreen = document.querySelector(".gameoverHidden");
            gameoverScreen.classList.add("gameover");

            let gameoverSound = new Audio('sounds/zapsplat_gameover.mp3');
            gameoverSound.play();

            document.onkeydown = null;
            return;
        }

        if (rect1.x < rect3.x + rect3.width &&
            rect1.x + rect1.width > rect3.x &&
            rect1.y < rect3.y + rect3.height &&
            rect1.y + rect1.height > rect3.y) {
            // collision detected!
            console.log("second collision is here")
            let goalWhenHit = document.querySelector(".goal");
            goalWhenHit.classList.add("goalHit");

            let youwinScreen = document.querySelector(".youwinHidden");
            youwinScreen.classList.add("youwin");

            let youwinSound = new Audio('sounds/zapsplat_youwin.mp3');
            youwinSound.play();

            document.onkeydown = null;
            return;
        };

        // filling in the values =>
        if (5 < 30 &&
            55 > 20 &&
            5 < 20 &&
            55 > 10) {
            // collision detected!
        };
    };
    collision()

};



