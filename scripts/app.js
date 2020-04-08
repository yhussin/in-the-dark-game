
//code snippet: Consistently Move an Element with Arrow Keys in JavaScript
document.onkeydown = detectKey;
function detectKey(e) {
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
        let rect1 = { x: positionPlayer.x, y: positionPlayer.y, width: 10, height: 10 };
        //var rect1 = {x: 5, y: 5, width: 50, height: 50};
        let rect2 = { x: 348, y: 334, width: 50, height: 50 };
        //let rect2 = {x: 20, y: 10, width: 10, height: 10};
        let rect3 = { x: 648, y: 524, width: 50, height: 50 };

        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y) {
            // collision detected!
            console.log("collision is here")
            let obstacleWhenHit = document.querySelector(".obstacle");
            obstacleWhenHit.classList.add("obstacleHit");
        }

        if (rect1.x < rect3.x + rect3.width &&
            rect1.x + rect1.width > rect3.x &&
            rect1.y < rect3.y + rect3.height &&
            rect1.y + rect1.height > rect3.y) {
            // collision detected!
            console.log("second collision is here")
            let goalWhenHit = document.querySelector(".goal");
            goalWhenHit.classList.add("goalHit");
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

// let player1 = document.querySelector('.playerIcon');
// let positionPlayer1 = player1.getBoundingClientRect();


