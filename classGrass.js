class Grass extends kendaniEak{
    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        this.multiply++;
        if (this.multiply >= 8 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }
}