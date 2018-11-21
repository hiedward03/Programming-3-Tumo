/*Progrmming3*/

var matrix = [
    [0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0,],
    [0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0,],
    [1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0,],
    [1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0,],
    [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3,],
    [0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0,],
    [0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0,],
    [1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0,],
    [1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0,],
    [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3,],
    [0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0,],
    [0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0,],
    [1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0,],
    [1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0,],
    [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3,],
    [0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0,],
    [0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0,],
    [1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0,],
    [1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0,],
    [1, 1, 1, 1, 0, 0, 0, 1, 0, 6, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3,],
];



var side = 30;
var b = 1;
var q = 1;
var grassArr = [];
var xotaker = [];
var gish = [];
var mah = []
var sah = []
var ver = []

var exanak = "Winter"

myVar = setInterval(function () {
    if (exanak == "Winter") {
        exanak = "Spring"
    }
    else if (exanak == "Spring") {
        exanak = "Summer"
    }
    else if (exanak == "Summer") {
        exanak = "Autumn"
    }
    else if (exanak == "Autumn") {
        exanak = "Winter"
    }

}, 4000);

function setup() {

    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                xotaker.push(new Xotaker(x, y));
            }
            else if (matrix[y][x] == 3) {
                gish.push(new Gishatich(x, y));
            }
            else if (matrix[y][x] == 4) {
                mah.push(new Mah(x, y));
            }
            else if (matrix[y][x] == 5) {
                sah.push(new Sarsap(x, y));
            }
            else if (matrix[y][x] == 6) {
                ver.push(new Verg(x, y));
            }

        }
    }
    

}


function draw() {
    if (exanak == "Winter") {
        frameRate(1);
        }
    if (exanak == "Spring") {
            frameRate(3);
        }
    if (exanak == "Summner") {
            frameRate(5);
        }
    if (exanak == "Autumn") {
            frameRate(2);
        }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                if (exanak == "Winter")
                    fill("white")
                if (exanak == "Summer")
                    fill("green")
                if (exanak == "Spring")
                    fill("#9ff77b")
                if (exanak == "Autumn")
                    fill('orange')
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                if (exanak == "Winter")
                    fill("#818275")
                if (exanak == "Summer")
                    fill("#edd853")
                if (exanak == "Spring")
                    fill("yellow")
                if (exanak == "Autumn")
                    fill('#eff700')
            }
            else if (matrix[y][x] == 3) {
                fill("black");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("red");
            }
            else if (matrix[y][x] == 6) {
                fill("purple");
            }
            rect(x * side, y * side, side, side);

            fill('black');
            textSize(32);
            if (exanak == "Summer") {
                text(exanak, 20, 50)
            }
            if (exanak == "Winter") {
                text(exanak, 20, 50)
            }
            if (exanak == "Spring") {
                text(exanak, 20, 50)
            }
            if (exanak == "Autumn") {
                text(exanak, 20, 50)
            }

            
        }
    }

    for (var i in grassArr) {
        grassArr[i].bazmanal();


    }

    
    for (var i in xotaker) {
        xotaker[i].bazmanal();
        
        if (!xotaker[i].utel()) {
           
            xotaker[i].sharjvel();
        }
        if (xotaker[i].utelmah()) {
            
            xotaker[i].mahanalmah(); 
            xotaker[i].bazmanalno();    
        }
        xotaker[i].mahanal();
    }
   
    for (var i in gish) {
        gish[i].bazmanal()

        if (!gish[i].utel()) {
            {
                gish[i].sharjvel();

            }
            gish[i].mahanal()
        }
    }

    for (var i in mah) {
        mah[i].bazmanal()

        if (!mah[i].utel()) {

            mah[i].sharjvel();

        }
        mah[i].mahanal()
    }
    

    for (var i in sah) {


        if (sah[i].utel()) {
        }
        else {
            sah[i].sharjvel();

        }
        sah[i].mahanal()
    }
}




