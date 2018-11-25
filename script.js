/*Progrmming3*/
var myVar;
var startTimeout = 3000;
var startLoop = false;
function myFunction() {
    myVar = setTimeout(showPage, startTimeout);
}

function showPage() {
    startLoop = true;
    document.getElementById("loader").style.display = "none";
}
var socket = io.connect();
var matrix = [
    [7, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 7,],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0,],
    [0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0,],
    [1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0,],
    [1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0,],
    [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3,],
    [0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0,],
    [0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 7, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0,],
    [1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0,],
    [1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0,],
    [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3,],
    [0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0,],
    [0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0,],
    [1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0,],
    [1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 0, 0, 7, 0, 0, 1, 0, 0, 0, 1, 1, 7, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0,],
    [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3,],
    [0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0,],
    [0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0,],
    [1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 7, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 5, 0, 0,],
    [1, 5, 0, 0, 0, 0, 7, 1, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 5, 0, 0, 0, 0, 0, 1, 0, 0, 0,],
    [1, 1, 1, 1, 0, 0, 0, 1, 0, 6, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 3,],
];





var side = 25;
var grassArr = [];
var xotaker = [];
var gish = [];
var mah = [];
var sah = [];
var ver = [];
var boomBool = true;

var exanak = "Winter";

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

function deleteCreature(x, y) {
	for (var i in grassArr) {
		if (grassArr[i].x == x && grassArr[i].y == y) {
			grassArr.splice(i, 1);
		}
	}
	for (var i in xotaker) {
		if (xotaker[i].x == x && xotaker[i].y == y) {
			xotaker.splice(i, 1);
		}
	}
	for (var i in gish) {
		if (gish[i].x == x && gish[i].y == y) {
			gish.splice(i, 1);
		}
	}
	for (let i in mah) {
		if (mah[i].x == x && mah[i].y == y) {
			mah.splice(i, 1);
		}
	}
	for (let i in sah) {
		if (sah[i].x == x && sah[i].y == y) {
			sah.splice(i, 1);
		}
	}
	for (let i in ver) {
		if (ver[i].x == x && ver[i].y == y) {
			ver.splice(i, 1);
		}
	}
}

function mouseClicked() {
	if (boomBool) {
		var xMouse = Math.floor(mouseX / side)
		var yMouse = Math.floor(mouseY / side)
		if ((yMouse - 1) >= 0 && (xMouse - 1) >= 0 && (xMouse + 1) < matrix[0].length && (yMouse + 1) < matrix.length) {
			boomBool = false;
			matrix[yMouse][xMouse] = 10;
			matrix[yMouse - 1][xMouse - 1] = 10;
			matrix[yMouse - 1][xMouse] = 10;
			matrix[yMouse - 1][xMouse + 1] = 10;
			matrix[yMouse][xMouse - 1] = 10;
			matrix[yMouse][xMouse + 1] = 10;
			matrix[yMouse + 1][xMouse - 1] = 10;
			matrix[yMouse + 1][xMouse] = 10;
			matrix[yMouse + 1][xMouse + 1] = 10;
			deleteCreature(xMouse, yMouse);
			deleteCreature(xMouse - 1, yMouse - 1);
			deleteCreature(xMouse, yMouse - 1);
			deleteCreature(xMouse + 1, yMouse - 1);
			deleteCreature(xMouse - 1, yMouse);
			deleteCreature(xMouse + 1, yMouse);
			deleteCreature(xMouse - 1, yMouse + 1);
			deleteCreature(xMouse, yMouse + 1);
			deleteCreature(xMouse + 1, yMouse + 1);
			setTimeout(() => {
				for (let y = 0; y < matrix.length; y++) {
					for (let x = 0; x < matrix[y].length; x++) {
						if (matrix[y][x] == 10) {
							matrix[y][x] = 0;
							boomBool = true;
						}

					}

				}
			}, 2000);
		}
	}
}

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

    if (startLoop == true) {


        if (frameCount % 60 == 0) {
            var kadr = {
                "xotakerneri qanaky-": xotaker.length,
                "gishatichneri qanaky-": gish.length,
                "xoteri qanaky-": grassArr.length,
                "maheri qanak-": mah.length,
                "sarsapneri qanak-": sah.length,
                "vergeri qanak-": ver.length,
            };
            var myJSON = JSON.stringify(kadr);
            function handleSubmit(evt) {
                socket.emit("send statistics", myJSON);
            }
            handleSubmit();
        }

        if (exanak == "Winter") {
            frameRate(2);
        }
        if (exanak == "Spring") {
            frameRate(6);
        }
        if (exanak == "Summner") {
            frameRate(10);
        }
        if (exanak == "Autumn") {
            frameRate(4);
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
                else if (matrix[y][x] == 7) {
                    fill("#f243f2");
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
            xotaker[i].mahanal();
        }


        for (var i in gish) {
            gish[i].bazmanal()

            if (!gish[i].utel()) {

                gish[i].sharjvel();

            }
            gish[i].mahanal()
        }

        for (var i in mah) {
            mah[i].bazmanal()

            if (!mah[i].utel()) {

                mah[i].sharjvel();

            }
            mah[i].mahanal()
        }


        for (var i in sah) {


            if (!sah[i].utel()) {

                sah[i].sharjvel();

            }
            sah[i].mahanal()
        }
        for (var i in ver) {


            if (!ver[i].utel()) {

                ver[i].sharjvel();

            }
            ver[i].mahanal()
        }
        

    }

}





