class calculator {

    checkforVaildInput(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            return false
        } else {
            return true
        }
    }
    add(num1, num2) {
        var checkResult = this.checkforVaildInput(num1, num2)
        if (checkResult) {
            return num1 + num2;
        } else {
            return undefined
        }

    }
    subtract(num1, num2) {
        var checkResult = this.checkforVaildInput(num1, num2)
        if (checkResult) {
            return num1 - num2;
        } else {
            return undefined
        }

    }
    multipluy(num1, num2) {
        var checkResult = this.checkforVaildInput(num1, num2)
        if (checkResult) {
            return num1 * num2;
        } else {
            return undefined
        }

    }
    divide(num1, num2) {
        var checkResult = this.checkforVaildInput(num1, num2)
        if (checkResult) {
            return num1 / num2;
        } else {
            return undefined
        }

    }
    max(num1, num2) {
        var checkResult = this.checkforVaildInput(num1, num2)
        if (checkResult) {
            return Math.max(num1, num2);
        } else {
            return undefined
        }

    }
    min(num1, num2) {
        var checkResult = this.checkforVaildInput(num1, num2)
        if (checkResult) {
            return Math.min(num1, num2);
        } else {
            return undefined
        }

    }
    avrage(num1, num2) {
        var sum = 0;
        var checkResult = this.checkforVaildInput(num1, num2)
        if (checkResult) {
            sum = this.add(num1, num2);
            return sum / 2;
        } else {
            return undefined
        }

    }
}

describe("A calcultor", function () {
    var calc;
    beforeEach(function () {
        calc = new calculator();
    });

    afterEach(function () {
        calc = null;
    });

    it("should be able to declare calculator class", function () {
        expect(calculator).toBeDefined();
        expect(calculator).not.toBeNull();
    });


    it("should be able to add two numbers", function () {
        expect(calc.add(10, 2)).toEqual(12);
        expect(calc.add(10, 'hi')).toBe(undefined);
        expect(calc.add(10, 2)).not.toEqual(8);
        console.log(calc.add(10, 2));
    });

    it("should be able to subtract two numbers", function () {
        expect(calc.subtract(10, 2)).toEqual(8);
        expect(calc.subtract(10, 2)).not.toEqual(12);
        expect(calc.add('ten', 'two')).toBe(undefined);
        console.log(calc.subtract(10, 2));
    });

    it("should be able to multiply two numbers", function () {
        expect(calc.multipluy(10, 2)).toEqual(20);
        expect(calc.multipluy(10, 2)).not.toEqual(12);
        expect(calc.add('ten', 'two')).toBe(undefined);
        console.log(calc.multipluy(10, 2));
    });

    it("should be able to divide two numbers", function () {
        expect(calc.divide(10, 2)).toEqual(5);
        expect(calc.divide(10, 2)).not.toEqual(1);
        expect(calc.add('ten', 'two')).toBe(undefined);
        console.log(calc.divide(10, 2));
    });

    it("should be able to find the max between two numbers", function () {
        expect(calc.max(10, 2)).toEqual(10);
        expect(calc.max(10, 2)).not.toEqual(2);
        expect(calc.add('ten', 'two')).toBe(undefined);
        console.log(calc.max(10, 2));
    });

    it("should be able to find the min between two numbers", function () {
        expect(calc.min(10, 2)).toEqual(2);
        expect(calc.min(10, 2)).not.toEqual(10);
        expect(calc.add('ten', 'two')).toBe(undefined);
        console.log(calc.min(10, 2));
    });

    it("should be able to find the average between two numbers", function () {
        expect(calc.avrage(10, 2)).toEqual(6);
        expect(calc.avrage(10, 2)).not.toEqual(5);
        expect(calc.add('ten', 'two')).toBe(undefined);
        console.log(calc.avrage(10, 2));
    });

});
