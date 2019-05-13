// Can use .test, .spec or __test__ (folder__(double underscore)), to create designated test files. (yarn test).

const calculator = require('./calculator.js');

//Sample Test
describe('calculator.js', () => {

    describe('add() method', () => {
        //add two numbers
        it('should return the sum of two numbers', () => {

            //toBe is a matcher.
            //can have multiple expects as long as they test the same thing.
            expect(calculator.add(2, 2)).toBe(4);
            expect(calculator.add(2, 1)).toBe(3);
            expect(calculator.add(0, 1)).toBe(1);
        });

        //return 0 when called without values.
        // it('should return 0 when called with no values', () => {
        //     expect(calculator.add().toBe(0));
        // });

        //return the number passed if only one number provided.
        it('should return the number, if only one number passed', () => {
            //arrange -> setup
            const expected = 10;

            //act -> run the system under test
            const result = calculator.add(10);

            //assert -> verify it works
            expect(result).toBe(expected);
        });

        //add any number of arguments
        it('should return any number of arguments, separated by comma', () => {
            expect(calculator.add(2, 2, 2)).toBe(6);
            expect(calculator.add(2, 1, 1)).toBe(4);
        })

        //add support for handling an array of numbers
        it('should return any number of arguments, separated by comma', () => {
            expect(calculator.add([2, 2, 2])).toBe(6);
        })

        //toEqual**
        it('toBe or not.toBe', () => {
            expect(true).toBe(true);
            expect({ name: 'John'}).toEqual({ name: 'John'})
        })
    });
});