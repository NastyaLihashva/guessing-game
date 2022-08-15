class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.round((this.max + this.min)/2);
    }

    lower() {
        let num = this.guess();
        this.max = num;
    }

    greater() {
        let num = this.guess();
        this.min = num;
    }
}

module.exports = GuessingGame;
