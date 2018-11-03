class Mah extends kendaniEak {
    constructor(x, y) {
        super(x,y)
        this.energy = 5;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    sharjvel() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            if (this.energy > 0) {
                this.energy--;
            }
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 4;
            this.x = norVandak[0];
            this.y = norVandak[1];

        }
    }
    utel() {
        var norVandak = random(this.yntrelVandak(3));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 4;
            this.x = norVandak[0];
            this.y = norVandak[1];

            for (var i in gish) {
                if (gish[i].x == this.x && gish[i].y == this.y) {
                    gish.splice(i, 1);
                    if (this.energy < 8) {
                        this.energy++;
                    }
                    return true;
                }
            }

        }
        return false;
    }


    bazmanal() {
        if (this.energy >= 3) {
            //var ran = Math.round(random(1));

            var norVandak = random(this.yntrelVandak(0));
            if (norVandak) {
                var x = norVandak[0];
                var y = norVandak[1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                    var norMah = new Mah(x, y);

                    mah.push(norMah);
                    matrix[y][x] = 4;
                    this.energy = 2;
                }
            }
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            for (var i in mah) {
                if (mah[i].x == this.x && mah[i].y == this.y) {
                    mah.splice(i, 1);
                    matrix[this.y][this.x] = 0;

                    break;
                }
            }
        }
    }
}