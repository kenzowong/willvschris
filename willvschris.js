let result1 = [];
let result2 = [];

let playercharacter = 1;

let rollit = document.getElementById("rtd");

function callSixTimes(func) {
    for (let i = 1; i <= 6; i++) {
        func();
        let value = result1[i - 1];
        let value2 = result2[i - 1];
        document.getElementById("die" + [i]).innerHTML = value;
        document.getElementById("sdie" + [i]).innerHTML = value2;


    }

    const reducerSum = (a, b) => a + b;

    let result1sum = result1.reduce(reducerSum);
    let result2sum = result2.reduce(reducerSum);
    document.getElementById('firsttotal').innerHTML = `Your total is: ${result1sum}`;
    document.getElementById('secondtotal').innerHTML = `Enemy total is: ${result2sum}`;


    if (result1sum > result2sum) {
        document.getElementById('resulttext').innerHTML = 'you is a winner';
        document.getElementById('resulttext').style.color = 'green';
    }
    else if (result2sum > result1sum) {
        document.getElementById('resulttext').innerHTML = 'you big big loser';
        document.getElementById('resulttext').style.color = 'red';
    }
    else {
        document.getElementById('resulttext').innerHTML = 'tis a tie';
        document.getElementById('resulttext').style.color = 'pink';
    }
}

const rollDie = function () {
    const num = Math.floor(Math.random() * 6) + 1;
    result1.push(num);
    const num2 = Math.floor(Math.random() * 6) + 1;
    result2.push(num2);
}

function test() {
    console.log('im getting clicked');
}


rtd.addEventListener("click", function () {
    callSixTimes(rollDie);
    result1 = [];
    result2 = [];
});

const ps = document.getElementById("playerselect");

const pg = document.getElementById('playgame')


const gamePlay = function () {

    console.log(document.getElementById('playas'));

    if (playercharacter === 1) {
        console.log('will!');

        document.getElementById('image1').src = "will.png";
        document.getElementById('image2').src = "chris.png";
    } else {

        document.getElementById('image1').src = "chris.png";
        document.getElementById('image2').src = "will.png";
    }


    document.getElementById('intro').style.display = "none";
    document.getElementById('bigwrapper').style.display = "flex";
}


pg.addEventListener('click', gamePlay);

document.getElementById('will').addEventListener('click', function () {
    pg.disabled = false;

    playercharacter = 1;

    document.getElementById('playas').innerHTML = `Play as Will`;
});

document.getElementById('chris').addEventListener('click', function () {
    pg.disabled = false;

    playercharacter = 2;
    document.getElementById('playas').innerHTML = `Play as Chris`;

    // function setPlayAs() {
    //     document.getElementById('playas').innerHTML = `Play as Will`;
    // }

});