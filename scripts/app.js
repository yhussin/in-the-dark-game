
//code snippet: Consistently Move an Element with Arrow Keys in JavaScript
document.onkeydown = detectKey;
function detectKey(e) {
    let posLeft = document.getElementById('playerIcon').offsetLeft;
    let posTop = document.getElementById('playerIcon').offsetTop;
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
        document.getElementById('playerIcon').style.marginTop = (posTop - 58) + "px";
    }
    else if (e.keyCode == '40') {
        // down arrow
        document.getElementById('playerIcon').style.marginTop = (posTop + 58) + "px";
    }
    else if (e.keyCode == '37') {
        // left arrow
        document.getElementById('playerIcon').style.marginLeft = (posLeft - 58) + "px";
    }
    else if (e.keyCode == '39') {
        // right arrow
        document.getElementById('playerIcon').style.marginLeft = (posLeft + 58) + "px";
    }

    let player = document.getElementById('playerIcon');
    let positionPlayer = player.getBoundingClientRect(); 
    console.log("player is at " + positionPlayer.x, positionPlayer.y)
};




//collision detection
//from MDN
/* function collision () {
    let rect1 = {x: 5, y: 5, width: 50, height: 50}
    let rect2 = {x: 20, y: 10, width: 10, height: 10}

    if (rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y) {
        // collision detected!
    }

    // filling in the values =>
    if (5 < 30 &&
        55 > 20 &&
        5 < 20 &&
        55 > 10) {
        // collision detected!
        //add class to playerIcon
    }
};

collision(); */
