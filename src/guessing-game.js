class GuessingGame {
    constructor() {
		this.num = null,
        this.first = null,
        this.last = null;
    }

    setRange(min, max) {
        if (min < max ) {
			this.first = min;
			this.last = max;
		}
		return this;
    }

    guess() {
        this.num = Math.round((this.first + this.last) / 2); //or math floor
        return this.num;
    }

    lower() {
        this.last = this.num;
        return this;
    }

    greater() {
        this.first = this.num;
        return this;
    }
}

module.exports = GuessingGame;
