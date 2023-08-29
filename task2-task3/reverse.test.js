import { reverse } from "./reverse";

describe('Тестируем переворачитватель строки', () => {
    it('Переворачиваем строку toptun, должно быть nutpot', () => {
        expect(reverse('toptun')).toBe('nutpot')
    });
    it('Переворачиваем пустую строку', () => {
        expect(reverse('')).toBe('')
    });
    it('Переворачиваем строку палиндром kek, должно быть kek', () => {
        expect(reverse('kek')).toBe('kek')
    });
})