import { definePrime} from "./prime";

describe('tests for definePrime function', () => {
    it('17 must be prime check', () => {
        expect(definePrime(17)).toBeTruthy()
    });

    it('2 must be prime check', () => {
        expect(definePrime(2)).toBeTruthy()
    });

    it('33 must be not prime check', () => {
        expect(definePrime(33)).toBeFalsy()
    });

    it('1001 must be out of range', () => {
        expect(definePrime(1001)).toBe(`We can't work with this`)
    });
})

describe('tests for definePrime but in one test', () => {
    it('Проба пера для тестов в it, но одним тестом с кучей expect', () => {
        expect(definePrime(17)).toBeTruthy()
        expect(definePrime(2)).toBeTruthy()
        expect(definePrime(33)).toBeFalsy()
        expect(definePrime(1001)).toBe(`We can't work with this`)
    })
})