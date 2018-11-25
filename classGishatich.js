
class Gishatich extends kendaniEak {
    constructor(x, y) {
        super(x, y)
        this.energy = 5;
    }

    stanalnorKordinatner() {
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

    sharjvel() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            if (this.energy > 0) {
                this.energy--;
            }
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.x = norVandak[0];
            this.y = norVandak[1];

        }
    }
    bazmanal() {
        if (this.energy >= 6) {
            var rin = Math.round(random(1));

            var norVandak = random(this.yntrelVandak(rin));
            if (norVandak) {
                var x = norVandak[0];
                var y = norVandak[1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                    var norGishatich = new Gishatich(x, y);

                    gish.push(norGishatich);
                    matrix[y][x] = 3;
                    this.energy = 2;
                }
            }
        }
    }
    utel() {
        var norVandak = random(this.yntrelVandak(2));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.x = norVandak[0];
            this.y = norVandak[1];

            for (var i in xotaker) {
                if (xotaker[i].x == this.x && xotaker[i].y == this.y) {
                    xotaker.splice(i, 1);
                    if (this.energy < 8) {
                        this.energy++;
                    }
                    return true;
                }
            }

        }
        return false;
    }
    mahanal() {
        if (this.energy <= 0) {
            for (var i in gish) {
                if (gish[i].x == this.x && gish[i].y == this.y) {
                    gish.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }
        }
    }

    yntrelVandak(ch) {
        this.stanalnorKordinatner();
        return super.yntrelVandak(ch);
    }
}