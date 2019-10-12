class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min=min;
        this.max=max;
        return this.max, this.min;
    }

    guess() {
        this.try=Math.ceil((this.max+this.min)/2);
        return this.try
    }

    lower() {
        this.max=this.try;
        return this.max;
    }

    greater() {
        this.min=this.try;
        return this.min;
    }
}

module.exports = GuessingGame;
